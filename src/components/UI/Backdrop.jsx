export const Backdrop = ({ toggleModal }) => {
  return <div onClick={toggleModal} className='fixed z-10 h-screen w-full bg-black/30 drop-shadow-lg backdrop-blur-sm' />
}
