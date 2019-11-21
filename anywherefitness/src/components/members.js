import React from 'react';
import jose from './images/jose.png';
import john from './images/john.png';
import andre from './images/andre.png';
import oluwafemi from './images/oluwafemi.png';
import oladimeji from './images/oladimeji.png';
import sandrava from './images/sandrava.png';
import dave from './images/dave.png';
import logo from './images/github.png';
import styled from 'styled-components';

const Members = () => {

    const Member = styled.div`
        display: flex;
        width: 90%;
        flex-direction: column;
        margin-bottom: 40px;

        .top-row {
            display: flex;
        justify-content: space-around;
        }

        .bottom-row {
            display: flex;
        justify-content: space-around;
        margin-top: 40px;
        }
    `
    return (
        <Member className='member-card'>
            <div className='top-row'>
                <div>
                    <img src={jose} width='250px' height='250px' />
                    <p>Josemaria Nriagu</p>
                    <p>Team Lead/Backend</p>
                    <a href='https://github.com/josenriagu'><img src={logo} width='25px' height='25px' /></a>
                </div>
                <div>
                    <img src={john} width='250px' height='250px' />
                    <p>John Afolabi</p>
                    <p>React I</p>
                    <a href='https://github.com/john-afolabi'><img src={logo} width='25px' height='25px' /></a>
                </div>
                <div>
                    <img src={andre} width='250px' height='250px' />
                    <p>Andre Michalowski</p>
                    <p>React I</p>
                    <a href='https://github.com/andremichalowski'><img src={logo} width='25px' height='25px' /></a>
                </div>
                <div>
                    <img src={oluwafemi} width='250px' height='250px' />
                    <p>Oluwafemi Oluwatola</p>
                    <p>Backend</p>
                    <a href='https://github.com/Oluwa-Femi'><img src={logo} width='25px' height='25px' /></a>
                </div>
            </div>

            <div className='bottom-row'>
                <div>
                    <img src={oladimeji} width='250px' height='250px' />
                    <p>Oladimeji Lawal-Are</p>
                    <p>Backend</p>
                    <a href='https://github.com/DimejiAre'><img src={logo} width='25px' height='25px' /></a>
                </div>
                <div>
                    <img src={sandrava} width='250px' height='250px' />
                    <p>Sandrava Philips</p>
                    <p>Backend</p>
                    <a href='https://github.com/Sandravaphilips'><img src={logo} width='25px' height='25px' /></a>
                </div>
                <div>
                    <img src={dave} width='250px' height='250px' />
                    <p>David Kuseh</p>
                    <p>Backend</p>
                    <a href='https://github.com/DavidKuseh'><img src={logo} width='25px' height='25px' /></a>
                </div>
            </div>

        </Member>
    )
}

export default Members;