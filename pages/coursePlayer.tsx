import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import ReactPlayer from 'react-player/lazy'
import { Flex, Text } from '@chakra-ui/react'
import { RetailItem } from '../lib/types/products'
import { fromBinary } from '../utilities/common-utils'
import DetailsSection from '../components/productDetails/DetailsSection'
import { useSelector } from 'react-redux'
import { ICartRootState } from '../lib/types/cart'
import StarRatingComponent from 'react-star-rating-component'
import { useLanguage } from '../hooks/useLanguage'

const CoursePlayer = () => {
    const [domLoaded, setDomLoaded] = useState(false)
    const [savedProduct, setSavedProduct] = useState<RetailItem | null>(null)
    const cartItems = useSelector((state: ICartRootState) => state.cart.items)
    const { t } = useLanguage()

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    useEffect(() => {
        const { itemId } = Router.query

        if (localStorage && cartItems.length) {
            const itemToBeDisplayed = cartItems.find(
                (item) => item.id === itemId
            )

            localStorage.setItem(
                'selectedItem',
                JSON.stringify(itemToBeDisplayed)
            )
        }
    }, [])

    useEffect(() => {
        if (localStorage && localStorage.getItem('selectedItem')) {
            const stringifiedSelectedItem = localStorage.getItem('selectedItem')
            if (stringifiedSelectedItem) {
                setSavedProduct(JSON.parse(stringifiedSelectedItem))
            }
        }
    }, [])

    if (!domLoaded || !savedProduct) {
        return <></>
    }

    return (
        <Flex
            alignItems={'center'}
            direction="column"
        >
            <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={savedProduct.tags.Url}
            />

            <Flex
                mt={'11px'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection="column"
            >
                <h2
                    className="text-palette-mute whitespace-normal border_radius_all"
                    style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#000',
                    }}
                >
                    {savedProduct.descriptor.name}
                </h2>
                <Text
                    mt={'10px'}
                    mb={'10px'}
                    fontSize={'14px'}
                >
                    by {savedProduct.bppName}
                </Text>
            </Flex>
            <hr className="mt-1 hidden md:block" />
            <div className="flex items-start flex-wrap relative ">
                <div className="flex-grow ">
                    <div
                        className="flex items-center self-center"
                        style={{ justifyContent: 'center' }}
                    >
                        <StarRatingComponent
                            name="product_rate"
                            starCount={5}
                            value={4}
                        />
                        <p className="text-sm text-palette-mute rtl:mr-2 ltr:ml-2 pl-1 ">
                            {4} {t.stars}
                        </p>
                    </div>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: savedProduct.descriptor.long_desc,
                        }}
                        className="mt-4 product_description_text border-2 border_radius_all"
                        style={{
                            padding: '0px 10px',
                            maxHeight: '400px',
                            overflow: 'auto',
                        }}
                    ></div>
                </div>
            </div>
        </Flex>
    )
}

export default CoursePlayer
