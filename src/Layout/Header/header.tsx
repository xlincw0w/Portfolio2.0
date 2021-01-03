import React from 'react'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import bvideo from '../../Assets/Videos/bvideo.webm'
import { FormControl } from '@material-ui/core'
import { constants } from '../../constants'
import { Alert } from '@material-ui/lab'
import Axios from 'axios'

const Header = () => {
    const [openContact, setOpenContact] = React.useState<boolean>(false)

    const [fullname, setFullname] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [subject, setSubject] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')

    interface alertInfo {
        severity: number
        message: string
    }

    const [AlertInfo, setAlertInfo] = React.useState<alertInfo>({
        severity: 0,
        message: '',
    })

    const HandleSubmit = () => {
        if (!constants.username_rg.test(fullname)) {
            setAlertInfo({
                severity: -1,
                message: 'Please type a correct fullname',
            })
            setTimeout(() => {
                setAlertInfo({
                    severity: 0,
                    message: '',
                })
            }, 3000)
            return -1
        } else if (!constants.email_rg.test(email)) {
            setAlertInfo({
                severity: -1,
                message: 'Please type a correct email',
            })
            setTimeout(() => {
                setAlertInfo({
                    severity: 0,
                    message: '',
                })
            }, 3000)
            return -1
        } else if (subject.length === 0) {
            setAlertInfo({
                severity: -1,
                message: 'Please write a subject title',
            })
            setTimeout(() => {
                setAlertInfo({
                    severity: 0,
                    message: '',
                })
            }, 3000)
            return -1
        } else if (message.length === 0) {
            setAlertInfo({
                severity: -1,
                message: 'Please write a short message',
            })
            setTimeout(() => {
                setAlertInfo({
                    severity: 0,
                    message: '',
                })
            }, 3000)
            return -1
        }
        Axios.post(constants.url + '/contact/submitContact', {
            fullname,
            email,
            subject,
            message,
        })
            .then((res) => {
                if (res.data.updated) {
                    setAlertInfo({
                        severity: 1,
                        message: 'Your message was sent successfully',
                    })
                    setTimeout(() => {
                        setAlertInfo({
                            severity: 0,
                            message: '',
                        })
                    }, 3000)
                    return 0
                } else {
                    setAlertInfo({
                        severity: -1,
                        message: 'A problem occured, please retry later !',
                    })
                    setTimeout(() => {
                        setAlertInfo({
                            severity: 0,
                            message: '',
                        })
                    }, 3000)
                    return -1
                }
            })
            .catch(() => {
                setAlertInfo({
                    severity: -1,
                    message: 'A problem occured, please retry later !',
                })
                setTimeout(() => {
                    setAlertInfo({
                        severity: 0,
                        message: '',
                    })
                }, 3000)
                return -1
            })
    }

    return (
        <React.Fragment>
            <div className='w-full h-full shadow select-none'>
                <div className='w-full h-full'>
                    <video autoPlay loop muted className='w-full h-screen object-cover absolute'>
                        <source src={bvideo} type='video/mp4' />
                    </video>
                </div>
                <Modal className='h-screen' open={openContact} onClose={() => setOpenContact(false)} closeAfterTransition>
                    <Fade in={openContact}>
                        <div className='h-screen flex overflow-y-scroll'>
                            <div className='w-full xl:w-3/6 h-192 my-auto mx-auto bg-popupsBack2 bg-cover bg-center rounded shadow'>
                                <div className='text-center'>
                                    <div className='mb-10'>
                                        <p className='text-6xl mx-auto pt-10 textanimate'>❖</p>
                                    </div>
                                    <FormControl className='w-full'>
                                        <div className='block my-4'>
                                            <TextField
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                                className='w-5/6 sm:w-1/2'
                                                type='text'
                                                label='Full name'
                                                variant='outlined'
                                                color='secondary'
                                                required
                                            />
                                        </div>
                                        <div className='block my-4'>
                                            <TextField
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className='w-5/6 sm:w-1/2'
                                                type='email'
                                                label='E-mail'
                                                variant='outlined'
                                                color='secondary'
                                                required
                                            />
                                        </div>
                                        <div className='block my-4'>
                                            <TextField
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className='w-5/6 sm:w-1/2'
                                                type='text'
                                                label='Subject'
                                                variant='outlined'
                                                color='secondary'
                                                required
                                            />
                                        </div>
                                        <div className='block my-4'>
                                            <TextField
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className='w-5/6 sm:w-1/2'
                                                label='How can i help you ?'
                                                multiline
                                                rows={4}
                                                variant='outlined'
                                                color='secondary'
                                                required
                                            />
                                        </div>
                                        <div className='mt-6'>
                                            <button
                                                type='submit'
                                                onClick={() => HandleSubmit()}
                                                className='mx-5 shadow inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none'>
                                                Submit
                                            </button>
                                            <button
                                                onClick={() => setOpenContact(false)}
                                                className='mx-5 shadow inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded ripple hover:bg-yellow-100 focus:outline-none'>
                                                Exit
                                            </button>
                                        </div>
                                        {AlertInfo.severity != 0 ? (
                                            <div className='mt-6 w-2/3 mx-auto shadow'>
                                                <Alert severity={AlertInfo.severity === 1 ? 'success' : 'error'}>{AlertInfo.message}</Alert>
                                            </div>
                                        ) : (
                                            <br></br>
                                        )}
                                        <div className='block my-5'></div>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
                <div className='bg-black bg-opacity-20 w-full h-screen relative grid grid-cols-3 '>
                    <div className='w-full h-full col-span-2'></div>
                    <div className='w-full h-full'></div>
                    <div className='w-full h-full col-span-3'>
                        <div className='text-center mt-10'>
                            <p className='text-5xl text-gray-300'>
                                <p className='md:inline'>Hi,</p> i'm Khaled KHAZEM
                            </p>
                            <p className='text-2xl mt-4 text-gray-200'>
                                <p className='xl:inline'>
                                    I'm a <span className='text-yellow-500 text-3xl'>web developer</span> from Algeria.{' '}
                                </p>
                                I can help you build your next
                                <span className='text-yellow-500'> Business App.</span>
                            </p>
                            <div className='mt-10'>
                                <button className='hidden sm:inline-block shadow px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none'>
                                    Hire me now
                                </button>
                                <p className='hidden sm:inline-block text-gray-300 text-2xl inline mx-10'>or</p>
                                <button
                                    onClick={() => setOpenContact(true)}
                                    className='shadow inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded ripple hover:bg-yellow-100 focus:outline-none'>
                                    Contact me
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full col-span-3'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
