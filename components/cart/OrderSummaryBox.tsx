import React from 'react'
import { useSelector } from 'react-redux'
import { useLanguage } from '../../hooks/useLanguage'
import { ICartRootState } from '../../lib/types/cart'
import Button from '../button/Button'
import ProductPrice from '../UI/ProductPrice'
import { Divider } from '@chakra-ui/react'
import { Router } from 'next/router'
import EmptyCart from './EmptyCart'

interface OrderSummaryBoxPropsModel {
    onOrderClick: () => void
}

const OrderSummaryBox: React.FC<OrderSummaryBoxPropsModel> = (props) => {
    const { t, locale } = useLanguage()
    const totalAmount = useSelector(
        (state: ICartRootState) => state.cart.totalAmount
    )

    const totalQuantity = useSelector(
        (state: ICartRootState) => state.cart.totalQuantity
    )

    return (
        <>
            {totalQuantity > 0 ? (
                <>
                    <h3
                        className=" sm:text-lg md:text-xl"
                        style={{ fontSize: '17px' }}
                    >
                        {t.orderSummary}
                    </h3>
                    <div
                        className="flex-grow  bottom-2 left-0 right-0 md:top-36 shadow-lg rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8  w-[100%] md:w-auto  md:min-w-[300px] md:max-w-[400px]"
                        style={{
                            margin: '20px 0 40px auto',
                            zIndex: '9',
                        }}
                    >
                        <div
                            className="flex flex-col my-1 sm:my-2"
                            style={{ fontSize: '15px' }}
                        >
                            <div className=" my-1 flex items-center justify-between md:my-4">
                                <p className="text-md sm:text-base md:text-palette-base tracking-wide">
                                    {t.totalQuantity}
                                </p>
                                <p className="rtl:ml-1 ltr:mr-1">
                                    {totalQuantity}
                                </p>
                            </div>
                            <div className=" my-1 flex flex-wrap items-baseline justify-between flex-grow md:my-4">
                                <p className="text-md sm:text-base md:text-palette-base tracking-wide">
                                    {t.subtotalText}
                                </p>
                                <ProductPrice
                                    price={totalAmount}
                                    customStyleObject={{
                                        fontWeight: 400,
                                        color: 'black',
                                    }}
                                />
                            </div>
                            <Divider my={'10px'} />
                            <div className=" my-1 flex flex-wrap items-baseline justify-between flex-grow md:my-4">
                                <p className="text-md sm:text-base md:text-palette-base tracking-wide font-extrabold">
                                    {t.totalText}
                                </p>
                                <ProductPrice
                                    isLargeSize
                                    price={totalAmount}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        buttonText={t.orderBtn}
                        background={'rgba(var(--color-primary))'}
                        color={'rgba(var(--text-color))'}
                        isDisabled={false}
                        handleOnClick={() => props.onOrderClick()}
                    />
                </>
            ) : (
                <EmptyCart />
            )}
        </>
    )
}

export default OrderSummaryBox
