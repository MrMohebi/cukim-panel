import React, {useEffect} from 'react';
//css
import "./css/style.css"
//plugins
import {TextField, Button} from "@material-ui/core"
import gsap from 'gsap'
import Lottie from 'react-lottie';
//files
import contractAnimation from '../../assets/lottieFiles/contract.json'
import successAnimation from '../../assets/lottieFiles/success.json'

const CreateNewRes = () => {

    let [animation, setAnimation] = React.useState(contractAnimation)
    let [animLoop, setAnimLoop] = React.useState(true)
    let userData = {
        eName: "",
        pName: "",
        username: "",
        pass: ""
    }

    useEffect(() => {
        const backImage = document.getElementsByClassName('back-image')[0];
        document.body.addEventListener("mousemove", (e) => {
            gsap.to(backImage, {
                backgroundPositionX: e.clientX / 200,
                backgroundPositionY: e.clientY / 200
            })

        });
    }, [])

    let changeAnim = (anim, loop) => {
        if (animation !== anim) {
            if (anim === successAnimation) {
                changeButtonState(true)
            } else {
                changeButtonState(false)
            }
            gsap.to(".lottie-holder", {
                x: -20,
                opacity: 0,
                ease: "expo.out",
                onComplete: () => {
                    setAnimLoop(loop)
                    setAnimation(anim)
                    gsap.to(".lottie-holder", {
                        x: 0,
                        opacity: 1,
                        ease: "expo.out",
                    })
                }
            })
        }
    }

    let changeButtonState = (show) => {
        if (show) {
            gsap.to("#submitButton", {
                y: 0,
                opacity: 1,
                pointerEvents: "all",
                ease: "expo.out"
            })
            document.getElementsByClassName('inputs-holder')[0].scrollBy(0, 200)
        } else {
            gsap.to("#submitButton", {
                y: 20,
                opacity: 0,
                pointerEvents: "none",
                ease: "expo.out"
            })
        }
    }

    let checkInputs = () => {
        userData.eName = document.getElementById('eName').value
        userData.pName = document.getElementById('pName').value
        userData.username = document.getElementById('username').value
        userData.pass = document.getElementById('pass').value
        if (userData["eName"].length > 2 && userData["pName"].length > 2 && userData["username"].length > 2 && userData["pass"].length > 2) {
            changeAnim(successAnimation, false)
        } else {
            changeAnim(contractAnimation, true)
        }
    }

    return (
        <div className={'w-100 h-100 main-container'}>
            <div className={'back-image position-absolute w-100 h-100'}/>

            <div className={" mainContainer-createNewRes"}>
                <div className={"header"}>ایجاد رستوران</div>

                <div className={'vect w-50 d-flex flex-column align-items-center'}>
                    <div className={'lottie-holder'}>
                        <Lottie options={{
                            loop: animLoop,
                            autoplay: true,
                            animationData: animation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}/>
                    </div>
                </div>
                <div className={'w-50 inputs-holder d-flex flex-column align-items-center'}>

                    <TextField className={"pt-2 m-2 textField-r"} id={'eName'} label="اسم رستوران انگلیسی"
                               onChange={checkInputs}/>
                    <TextField className={"pt-2 m-2 textField-r textField-rp"} id={'pName'} label="اسم رستوران فارسی"
                               onChange={checkInputs}/>
                    <TextField className={"pt-2 m-2 textField-r"} id={'username'} label="نام کاربری"
                               helperText="اعداد و حروف انگلیسی" onChange={checkInputs}/>
                    <TextField className={"pt-2 m-2 textField-r text-center"} id={'pass'} label="رمز"
                               onChange={checkInputs}/>
                    <Button className={'mt-3  submit-button'} id={'submitButton'} variant="contained"
                            color="primary">ساخت</Button></div>
            </div>
        </div>
    );
};

export default CreateNewRes;