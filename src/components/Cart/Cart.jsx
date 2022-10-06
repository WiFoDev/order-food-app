import { useState, useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import { CheckoutForm } from '../CheckoutForm'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Modal } from '../UI/Modal'
import { CartItem } from './CartItem'

export const Cart = ({ toggleModal }) => {
  const { items, totalAmount } = useContext(CartContext)
  const [isCheckout, setCheckout] = useState(false)

  const handleCheckout = () => {
    setCheckout(true)
  }

  const buttonContent = () => {
    return (
      !isCheckout &&
        <div className='flex items-center justify-end gap-2'>
          <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Close</Button>
          <Button onClick={handleCheckout} bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Order</Button>
        </div>
    )
  }
  return (
    <Modal toggleModal={toggleModal}>
      <Card bgColor='bg-white'>
        <ul>
          {items.map(item => {
            return <CartItem key={item.id} item={item} />
          })}
        </ul>
        <div className='my-2 flex items-center justify-between text-xl font-bold'>
          <h1>Total Amount</h1>
          <span>${totalAmount}</span>
        </div>
        {buttonContent()}
        {isCheckout && <CheckoutForm toggleModal={toggleModal} />}
      </Card>
    </Modal>
  )
}
