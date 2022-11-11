import React, { useContext, useState, useEffect } from 'react'
import { EditProduct } from './EditProduct';
import { AddProduct } from './AddProduct';
import { useDispatch, useSelector } from "react-redux";

import scss from './ProductList.module.scss'
import { PushMessagesContext } from '../../../contexts';
import { useParams } from 'react-router-dom';
import { fetchProductsInFridge, fetchRemoveProductFromFridge } from '../../../redux';

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

    const handleProductDelete = () => {
        dispatch(fetchRemoveProductFromFridge({ token, fridgeId: fridgeGuid, productId: selectedProduct}));
        setDeleteProductModalView(false);
    }

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
                                <button onClick={() => handleOpenModalEditProduct(item.id)}>Редактировать</button>
                            </div>
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
        {
            newProductModalView && 
            <div className={scss.modalWindow} onClick={(e) => handleCloseModalWindow(e)}>
                <AddProduct/>
            </div> 
        }
        {
            editProductModalView &&
            <div className={scss.modalWindow} onClick={(e) => handleCloseModalWindow(e)}>
                <EditProduct fridgeId={fridgeGuid} productId={productId}/>
            </div> 
        }
        {
            deleteProductModalView &&
            <div className={scss.modalWindow} onClick={(e) => handleCloseModalWindow(e)}>
                <div className={scss.modalForm}>
                    <div>Вы уверены?</div>
                    <div className={scss.buttons}>
                        <button onClick={() => handleProductDelete()}>Да</button>
                        <button onClick={(e) => handleCloseModalWindow(e)}>Отмена</button>
                    </div>
                </div>
            </div>
        }
    </div> 
    )
}