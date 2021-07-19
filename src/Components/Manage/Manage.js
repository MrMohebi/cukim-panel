import React from 'react';
//css
import './css/manage.css'
import {Button, ButtonBase} from "@material-ui/core";


// markup
const Manage = () => {
    return (
        <div className={'main w-100 h-100 d-grid  '}>
            <div className={' profile-container d-flex  align-items-center'}>
                <div className={'profile  w-100 d-flex flex-column'}>
                    <div className={'bio d-flex justify-content-center align-items-center flex-column'}>
                        <img className={'bio-image'} src="/img/nav.png" alt=""/>
                        <h3 className={'IranSansLight mt-4'}>محمد کریمدادی</h3>
                        <div className={'user-info'}>
                            <span className={'mt-3 pr-3 pl-2'}>اعتبار  : 250 هزار تومان</span>
                            <span className={'mt-3 pr-3 pl-2'}>شماره تماس  : 09031232531</span>
                            <span className={'mt-3 pr-3 pl-2'}>وضعیت   : تایید نشده</span>
                            <span className={'mt-3 pr-3 pl-2'}>آدرس    :

                                یه متن خیلی طولانی جهت تست وایت اسپیس ها در این مکا ننوشته میشود


                            </span>

                        </div>
                    </div>
                    <button className={'btn logout w-25 btn-outline-danger'} type={'button'}>
                        خروج
                    </button>
                </div>
            </div>

            <div className={'restaurants-holder d-flex flex-column  align-items-center  pb-4 height-wrapper'}>
                <div className={'each-res d-flex flex-row-reverse justify-content-around align-items-center'}>
                    <div className={'res-image'}>
                        <img height={"50px"} src="/img/sample.png" alt=""/>

                    </div>
                    <h4> رستوران کوکی</h4>
                    <span style={{direction: "rtl", lineHeight: '1rem'}}>
                        {25 + " روز "}
                    </span>
                    <a href="#"> اطلاعات کامل</a>
                </div>

            </div>

            <div className={'new-button'}>
                <ButtonBase style={{
                    background: "linear-gradient(315deg, #7f53ac, #7f53ac) ",
                    color: 'white',
                    borderRadius: '5px',
                    padding: '10px'
                }} variant={'outlined'} className={'new-button'} type={'button'} color={"primary"}>
                    ساخت مجموعه
                    <i className={' ml-3 fas fa-plus'}/>

                </ButtonBase>
            </div>


        </div>
    );
}
export default Manage;
