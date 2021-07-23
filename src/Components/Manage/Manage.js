import React from 'react';
//css
import './css/manage.css'
import '../../assets/inputCss/inputCss.css'
//other
import {ButtonBase} from "@material-ui/core";
import gsap from 'gsap';
import lottie from 'lottie-web';
// markup

const Manage = () => {

    let imgLocation = "img/"
    let [newResButtonContetn, setNewResButtonContetn] = React.useState([0,
            <span>
            <i className={'ml-2 fas fa-plus'}/>
            <span>
                ساخت رستوران جدید
            </span>
        </span>
        ]
    )
    let createNewRes = (e) => {
        let button = e.currentTarget
        let currentState = newResButtonContetn[0];
        let toggleNewResContainer = () => {
            gsap.to('.new-res-container', {
                height: currentState === 0 ? 600 : 0,
            })
            gsap.to(button.firstChild, {
                y: currentState === 0 ? 30 : -30,
                duration: 0.2,
                ease: '.inOut',
                onComplete: () => {
                    setNewResButtonContetn(
                        currentState === 0 ?
                            [1,
                                <span>
                            <i className={'ml-2 fas fa-check'}/>
                            <span>
                                تایید
                            </span>
                        </span>
                            ]
                            :
                            [0,
                                <span>
                                <i className={'ml-2 fas fa-plus'}/>
                                <span>
                                    ساخت رستوران جدید
                                </span>
                            </span>
                            ]
                    )
                    gsap.set(button.firstChild, {
                        y: currentState === 0 ? -30 : 30,
                        duration: 0.2,
                        onComplete: () => {
                            gsap.to(button.firstChild, {
                                y: 0,
                                ease: 'power3.out',
                                duration: 0.2,
                            })
                        }
                    })
                }
            })
            gsap.to('.new-res-button', {
                y: currentState === 0 ? -80 : 0,
                ease: "power3.out",
                duration: 0.7
            })
        }

        let form = document.querySelector('.new-res-container-inner')
        if (currentState) {
            let createdResSuccessfulAnimation = lottie.loadAnimation({
                autoplay: true,
                loop: false,
                container: document.querySelector('.animation-container'),
                path: '/lottie/res-created.json'
            })
            gsap.to('.new-res-button', {
                pointerEvents: 'none',
                duration: 0
            })
            gsap.to(form,{
                pointerEvents:'none',
                duration:0,
                onComplete:()=>{
                    gsap.to(form, {
                        opacity: 0,
                        onComplete: () => {
                            setTimeout(() => {
                                toggleNewResContainer()
                                createdResSuccessfulAnimation.destroy()
                                gsap.to('.new-res-button', {
                                    pointerEvents: 'all',
                                    duration: 0
                                })
                            }, 1000)
                        }
                    })
                }
            })

        } else {
            gsap.to(form, {
                opacity: 1,
                pointerEvents:'all'
            })
            toggleNewResContainer()
        }
    }

    let handlePlansClick = (e) => {
        if (!e.currentTarget.classList.contains('active-plan')) {
            let checkAnimation = lottie.loadAnimation({
                container: e.currentTarget.children[2],
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/lottie/check.json'
            })
            checkAnimation.hide()
            checkAnimation.stop()
            let plansArray = document.querySelector('.plans').childNodes
            plansArray.forEach(el => {
                el.classList.remove('active-plan')
            })
            if (e.currentTarget.classList.contains('active-plan')) {
                checkAnimation.destroy()
                e.currentTarget.classList.remove('active-plan')
            } else {
                checkAnimation.show()
                checkAnimation.play()
                e.currentTarget.classList.add('active-plan')
            }
            plansArray.forEach(el => {
                    if (!el.classList.contains('active-plan')) {
                        if (el.children[2].firstChild) {
                            let lottie = el.children[2].firstChild
                            lottie.remove()
                        }
                    }
                }
            )
        }
    }
    return (
        <div className={'main w-100 h-100 d-grid'}>
            <div className={' profile-container d-flex  align-items-center'}>
                <div className={'profile  w-100 d-flex flex-column'}>
                    <div className={'bio d-flex justify-content-center align-items-center flex-column'}>
                        <img className={'bio-image'} src={imgLocation + "nav.png"} alt=""/>
                        <h3 className={'IranSansLight mt-4'}>محمد کریمدادی</h3>
                        <div className={'user-info rtl'}>
                               <span className={'mt-3 d-flex flex-column pr-3 pl-2'}>
                                <span style={{direction: 'rtl'}}>اعتبار:</span>
                                <span className={'rtl green '}>250 هزار تومان</span>
                                <ButtonBase TouchRippleProps={{}} style={{
                                    borderRadius: '10px',
                                    padding: '10px',
                                    color: 'white',
                                    background: '#2b9348',
                                    width: '100px',
                                    fontSize: '0.7rem',
                                    margin: '20px auto 0 auto'
                                }}>
                                    <i className={'ml-2 fas fa-plus'}/>
                                    افزایش اعتبار
                                </ButtonBase>
                            </span>
                            <span className={'mt-3 d-flex flex-column pr-3 pl-2'}>
                                <span style={{direction: 'rtl'}}>شماره تماس:</span>
                                <span className={'ltr'}>0903 123 2531</span>
                            </span>
                            <span className={'mt-3 d-flex flex-column pr-3 pl-2'}>
                                <span style={{direction: 'rtl'}}>آدرس:</span>
                                <span className={'rtl'}>خیابان مهدیه کوچه 45 درب سوم سمت راست پلاک اول</span>
                            </span>
                        </div>
                    </div>
                    <span style={{position: 'absolute', bottom: '80px', right: '50%', transform: 'translate(50%,0)'}}
                          className={'mt-3 d-flex flex-column pr-3 pl-2'}>

                                <ButtonBase TouchRippleProps={{}} style={{
                                    direction: 'rtl',
                                    whiteSpace: 'nowrap',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    color: 'white',
                                    background: '#3a86ff',
                                    width: '160px',
                                    fontSize: '0.7rem',
                                    margin: '20px auto 0 auto'
                                }}>
                                    <i className={'ml-2 fas fa-edit'}/>
                                    مدیریت پنل ها
                                </ButtonBase>
                            </span>
                    <button className={'btn logout w-25 btn-outline-danger'} type={'button'}>
                        خروج
                    </button>
                </div>
            </div>
            <div className={'restaurants-holder d-flex flex-column  align-items-center  pb-4 height-wrapper'}>
                <div className={'each-res d-flex flex-row-reverse justify-content-around align-items-center'}>
                    <div className={'res-image'}>
                        <img height={"50px"} src={imgLocation + "sample.png"} alt=""/>
                    </div>
                    <h4> رستوران کوکی</h4>
                    <span style={{direction: "rtl", lineHeight: '1rem'}}>
                        {25 + " روز "}
                    </span>
                    <a href="/#"> اطلاعات کامل</a>
                </div>
                <div className={'new-res-container'}>
                    <div style={{height: 300, width: 300, position: "absolute", marginTop: '50px'}}
                         className="animation-container">

                    </div>
                    <div className={'new-res-container-inner'}>
                        <span style={{fontSize:'0.8rem'}} className={'mt-3'}>آیکون</span>

                        <input id={'res-image-input'} style={{zIndex:'999',display:'none'}} type="file" className={'res-picture'}/>
                        <label className={'new-res-img-label'} style={{zIndex:'999',cursor:'pointer',position:'relative'}} htmlFor="res-image-input">
                            <div  className="res-image mt-3">
                                <img src={imgLocation + 'sample.png'} className={'new-res-image-img'} alt="New Restaurnt Imge"/>
                            </div>
                        </label>

                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                                   required/>
                            <label htmlFor="name" className="form__label">نام فارسی</label>
                        </div>
                        <div dir="rtl" className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'
                                   required/>
                            <label htmlFor="name" className="form__label">نام اینگلیسی</label>
                        </div>
                        <div className={'select-plan d-flex flex-column mt-4'}>
                            <span className={'mb-2 text-center'}>پلن های من</span>

                            <div className={'d-flex flex-row plans'}>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{
                                        direction: 'rtl',
                                        width: '89%',
                                        borderBottom: '1px solid rgb(0,0,0,0.2)'
                                    }}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{width: '89%', borderBottom: '1px solid rgb(0,0,0,0.2)'}}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                                <div onPointerDownCapture={handlePlansClick}
                                     className="each-plan d-flex flex-column align-items-center">
                                    <h4 style={{width: '89%', borderBottom: '1px solid rgb(0,0,0,0.2)'}}
                                        className={'mt-2 pb-2 text-center '}>
                                        پلن A
                                    </h4>
                                    <div className={'items-summery d-flex flex-column'}>
                                        <span>کامنت</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>پرداخت دونگی</span>
                                        <span>کامنت</span>
                                    </div>
                                    <div className={'plan-check-place-holder'}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ButtonBase className={'new-res-button'} onClick={createNewRes} TouchRippleProps={{}}
                            style={{
                                direction: 'rtl',
                                whiteSpace: 'nowrap',
                                borderRadius: '10px',
                                padding: '10px',
                                color: 'white',
                                background: '#2b2d42',
                                width: '160px',
                                fontSize: '0.7rem',
                                margin: '20px auto 0 auto'
                            }}>
                    {newResButtonContetn[1]}
                </ButtonBase>
            </div>


        </div>
    );
}
export default Manage;
