import React from 'react'

import styled from 'styled-components'

import { ButtonWrapper, StyledTextButton } from '../GlobalReusableStyles'
import ios_card_img from '../../img/DownloadPage/ios_card_img.svg'
import android_card_img from '../../img/DownloadPage/android_card_img.svg'
import linux_card_img from '../../img/DownloadPage/linux_card_img.svg'
import mac_card_img from '../../img/DownloadPage/mac_card_img.svg'


const Section = () => {
    return (
        <StyledSection>
            <LeftCards>
                <Card>
                    <h2>iOS</h2>
                    <ButtonWrapper>
                        <TextButton>Download</TextButton>
                    </ButtonWrapper>
                    <img src={ios_card_img} alt=""/>
                </Card>
                <Card>
                    <h2>Linux</h2>
                    <ButtonWrapper>
                        <TextButton>Download</TextButton>
                    </ButtonWrapper>
                    <img src={linux_card_img} alt=""/>
                </Card>
                <BuildCard>
                    <h2>Feeling experimental?</h2>
                    <p>Try our Public Test Build and test new features before they launch.</p>
                    <ButtonWrapper>
                        <TextButton>Download Public Test Build</TextButton>
                    </ButtonWrapper>
                </BuildCard>
            </LeftCards>
            <RightCards>
                <Card>
                    <h2>Android</h2>
                    <ButtonWrapper>
                        <TextButton>Download</TextButton>
                    </ButtonWrapper>
                    <img src={android_card_img} alt=""/>
                </Card>
                <Card>
                    <h2>Mac</h2>
                    <ButtonWrapper>
                        <TextButton>Download</TextButton>
                    </ButtonWrapper>
                    <img src={mac_card_img} alt=""/>
                </Card>
            </RightCards>
        </StyledSection>
    )
}


const StyledSection = styled.div`
    min-height: 1400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6rem 0.5rem;
`

const LeftCards = styled.div`
    width: 50%;
    margin-right: 1.5rem;
`

const RightCards = styled.div`
    width: 50%;
    margin-top: 10rem;
`

const Card = styled.div`
    height: 590px;
    width: 100%;
    background: #F6F6F6;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3.5rem;
    overflow: hidden;
    margin-top: 1.5rem;

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    ul {
        margin-bottom: 4rem;
    }
` 

const BuildCard = styled.div`
    width: 100%;
    background: #F6F6F6;
    margin-top: 1.5rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    ul {
        justify-content: flex-start;
    }
`

const TextButton = styled(StyledTextButton)`
    color: #fff;
`



export default Section