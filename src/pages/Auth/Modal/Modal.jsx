import React, { useContext, useState } from 'react'
import scss from "./Modal.module.scss"
import { useDispatch } from "react-redux";
import { fetchGoogleRegistrationUser, fetchVkRegistrationUser } from '../../../redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PushMessagesContext } from '../../../contexts';

export const Modal = ({code, provider}) => {
  const dispatch = useDispatch()
  const pushMessagesContext = useContext(PushMessagesContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(false);

  const sendData = async () => {
    await dispatch(fetchGoogleRegistrationUser({ code: code, isOwner: isOwner }, 
      (message) => {
        pushMessagesContext.addPushMessage({
          message,
          id: Date.now()
        })
      },
      () => {
        const pathname = location.state?.from?.pathname || '/';

        navigate(pathname, { replace: true });
      }
    ))
  }

  const sendDataVk = async () => {
    await dispatch(fetchVkRegistrationUser({code: code, isOwner: isOwner}, 
      (message) => {
        pushMessagesContext.addPushMessage({
          message,
          id: Date.now()
        });
      },
      () => {
        const pathname = location.state?.from?.pathname || '/';

        navigate(pathname, { replace: true });
      }
    ))
  }

  return (
      <div className={scss.wrapper}>
          <div className="modal-window">
              <h4>Выберите роль:</h4>
              <div className={scss.buttons}>
                <div>
                  <input type="checkbox" id="scales" name="owner" onChange={() => setIsOwner(true)}/>
                  <label for="owner">Владелец</label>
                </div>
                <div>
                  <input type="checkbox" id="scales" name="renter" onChange={() => setIsOwner(false)}/>
                  <label for="renter">Арендатор</label>
                </div>
              </div>
              <div onClick={() => provider === 'google' ? sendData() : sendDataVk()}>
                <Link to="/user">
                  <button className={scss.button}>Войти</button>
                </Link>
              </div>
          </div>
      </div>
  )
}
