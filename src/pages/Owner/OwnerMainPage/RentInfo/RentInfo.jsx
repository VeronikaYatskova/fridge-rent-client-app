import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFridgeRentInfo } from '../../../../redux';

import scss from './RentInfo.module.scss';

export const RentInfo = ({ fridgeId, handleClose }) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');
    const rentData = useSelector((state) => state.ownerFridge.rent_info);

    useEffect(() => {
        dispatch(fetchFridgeRentInfo({ token, fridgeId }));
    }, []);

    return (<div className={scss.modalWindow} onClick={(e) => handleClose(e)}>
                <div className={scss.modalForm}>
                    <h2>Договор аренды</h2>
                    <table className={scss.table_rent}>
                        <tbody>
                            <tr>
                                <th>Арендатор</th>
                                <td>{rentData.renterEmail}</td>
                            </tr>
                            <tr>
                                <th>Владелец</th>
                                <td>{rentData.ownerName}</td>
                            </tr>
                            <tr>     
                                <th>Дата начала</th>
                                <td>{rentData.startDate}</td>
                            </tr>
                            <tr>     
                                <th>Дата окончания</th>
                                <td>{rentData.endDate}</td>
                            </tr>
                            <tr>     
                                <th>Ежемесячная оплата</th>
                                <td>{rentData.monthCost}</td>
                            </tr>
                                
                        </tbody>
                    </table>
                    <div className={scss.button_cancel}>
                        <button onClick={(e) => handleClose(e)}>Закрыть</button>
                    </div>
                </div>
            </div>);
}