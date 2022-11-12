import React, { useCallback, useState, useEffect, useRef } from "react";
import Grid from "../component/Grid";
import ProductCard from "../component/ProductCard";
import Checkbox from "../component/Checkbox";
import InfinityList from "../component/InfinityList";

// import productData from "../assets/fake-data/products";
// import category from "../assets/fake-data/category";
import size from "../assets/fake-data/product-size";
import Button from "../component/Button";
import axios from "axios";



const Catalog = () => {
  document.title = "Nụ Cười Sáng - Sản phẩm";
  ////
   const [produclist, setproductlist] = useState([]);

  var products1=[];
    useEffect(() => {
      axios.get(`/api/view-product`).then((res) => {
        if (res.status === 200) {
          setproductlist(res.data.products);
        }
      });
    }, []);
  
    products1=produclist.map((item)=>{
        return item;
  }); 
  
    const getAllProducts = () => products1;
  
    const getProducts = (count) => {
      const max = products1.length - count;
      const min = 0;
      const start = Math.floor(Math.random() * (max - min) + min);
      return products1.slice(start, start + count);
    };
    
    const getProductBySlug = (slug) => products1.find((e) => e.slug === slug);
    
    const getCartItemsInfo = (cartItems) => {
      let res = [];
      if (cartItems.length > 0) {
        cartItems.forEach((e) => {
          let product = getProductBySlug(e.slug);
          res.push({
            ...e,
            product: product,
          });
        });
      }
      // console.log(res)
      // console.log('sorted')
      // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
      return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    };
    
    const productData = {
      getAllProducts,
      getProducts,
      getProductBySlug,
      getCartItemsInfo,
    };
  ///
const [categorylist, setCategorylist] = useState([]);
var category=[];

  useEffect(() => {
            axios.get(`/api/view-category`).then((res) => {
              if (res.status === 200) {
                setCategorylist(res.data.category);
                // const category =res.data.category;
                  category=res.data.category;
                  // console.log(category);
              }
            });
          }, []);

category=categorylist.map((item)=>{
      return item;
});

  const initFilter = {
    category: [],
    
    size: [],
  };
  const productList = productData.getAllProducts();
const [products, setProducts] = useState(productList);
 const [filter, setFilter] = useState(initFilter);
 const clearFilter = () => setFilter(initFilter);
    const filterSelect = (type, checked, item) => {
      if (checked) {
        switch (type) {
          case "CATEGORY":
            setFilter({
              ...filter,
              category: [...filter.category, item.categorySlug],
            });
            break;
  
          case "SIZE":
            setFilter({ ...filter, size: [...filter.size, item.size] });
            break;
          default:
        }
      } else {
        switch (type) {
          case "CATEGORY":
            const newCategory = filter.category.filter(
              (e) => e !== item.categorySlug
            );
            setFilter({ ...filter, category: newCategory });
            break;
              
          case "SIZE":
            const newSize = filter.size.filter((e) => e !== item.size);
            setFilter({ ...filter, size: newSize });
            break;
          default:
        }
      }
    };

     const updateProducts = useCallback(() => {
       let temp = productList;

       if (filter.category.length > 0) {
         temp = temp.filter((e) => filter.category.includes(e.categorySlug));
       }

       if (filter.size.length > 0) {
         temp = temp.filter((e) => {
           const check = e.size.find((size) => filter.size.includes(size));
           return check !== undefined
         });
       }
       setProducts(temp);
     }, [filter, productList]);

     useEffect(() => {
       updateProducts();
     }, [updateProducts]);

     const filterRef = useRef(null);
     const showHideFilter = () => filterRef.current.classList.toggle("active"); //ẩn bộ lọc khi làm reponsive

  return (
    <div>
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          {/* nút close danh mục khi responsive */}
          <div
            className="catalog__filter__close"
            onClick={() => showHideFilter()}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh mục sản phẩm
            </div>

            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Kích cỡ</div>

            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>

        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            bộ lọc
          </Button>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
