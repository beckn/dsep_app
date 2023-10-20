import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { Flex, Text } from '@chakra-ui/react'

const CoursePlayer = () => {
    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    if (!domLoaded) {
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
                url="https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3"
            />

            <Text
                fontWeight={600}
                fontSize={'20px'}
            >
                Custom player
            </Text>
        </Flex>
    )
}

export default CoursePlayer
