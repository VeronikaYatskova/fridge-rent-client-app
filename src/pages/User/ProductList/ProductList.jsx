import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { AddProduct } from './AddProduct';
import { DeleteProduct } from './DeleteProduct';

import scss from './ProductList.module.scss';

import { PushMessagesContext } from '../../../contexts';
import { useParams } from 'react-router-dom';
import { fetchProductsInFridge } from '../../../redux';

export const ProductList = () => {

    const params = useParams();

    const fridgeGuid = params.fridgeId;

    const dispatch = useDispatch();
    const products = useSelector((state) => state.userFridge.products);
    const token = useSelector((state) => state.auth.user?.token || '');
    const [selectedProduct, setSelectedProduct] = useState('');

    useEffect(() => {
        dispatch(fetchProductsInFridge({ token, fridgeId: fridgeGuid }));
    }, [])

    const { addPushMessage } = useContext(PushMessagesContext);

    const [newProductModalView, setNewProductModalView] = useState(false);
    const [editProductModalView, setEditProductModalView] = useState(false);
    const [deleteProductModalView, setDeleteProductModalView] = useState(false);
    const [productId, setProductId] = useState('');

    const handleOpenModalAddNewProduct = () => {
        setNewProductModalView((currentValue) => !currentValue);
    }

    const handleOpenModalEditProduct = (productId) => {
        setEditProductModalView((currentValue) => !currentValue);
        setProductId(productId);
    }

    const handleOpenModalDeleteProduct = (id) => {
        setSelectedProduct(id);
        setDeleteProductModalView((currentValue) => !currentValue);
    }

    const handleCloseModalWindow = (e) => {
        if (e.target === e.currentTarget) {
            setNewProductModalView(false);
            setEditProductModalView(false);
            setDeleteProductModalView(false);
        }
    }

    return (<div className={scss.wrapper}>
        <div className={scss.title}>
            <div className={ scss.text }>Список продуктов в холодильнике { fridgeGuid }</div>
            <button onClick={() => handleOpenModalAddNewProduct()} className={scss.addProductButton}>Добавить продукт</button>
        </div>
        <table className={scss.table_fridge}>
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Название</th>
                <th scope="col">Количество</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {
                products.map(item => 
                    <tr>
                        <th>{item.id}</th>
                        <td>{item.name}</td>
                        <td className={scss.actions}>
                            {item.count}
                            <div className={scss.buttons}>
                                <button onClick={() => handleOpenModalDeleteProduct(item.id)}>Удалить</button>
                            </div>
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
        {
            newProductModalView && <AddProduct handleCloseModalWindow={handleCloseModalWindow}/>
        } 
        {
            deleteProductModalView && <DeleteProduct fridgeGuid={fridgeGuid} selectedProduct={selectedProduct} setDeleteProductModalView={setDeleteProductModalView} handleCloseModalWindow={handleCloseModalWindow}/>
        }
    </div> 
    )
}
