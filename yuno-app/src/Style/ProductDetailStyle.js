import styled from 'styled-components';
const Wrapper  = styled.section`
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    font-family: 'Poppins', sans-serif;
}
p{
    color: black;
}
.container
{
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}
.row
{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
.col-2
{
    flex-basis: 50%;
    min-width: 300px;
}
.col-2 img
{
    max-width: 100%;
    padding: 50px 0;
}
.col-2 h1
{
    font-size: 30px;
    line-height: 60px;
    margin: 25px 0;
}
.btn
{
    display: inline-block;
    background: deeppink;
    color: black;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    transition: background 0.5;
}
.btn:hover
{
    background: pink;
}

.small-container
{
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}


/*-------- products details -------*/

.products-details
{
    margin-top: 80px;
}
.products-details .col-2 img
{
    padding: 0;
}
.products-details .col-2
{
    padding: 20px;
}
.products-details h4
{
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}
.products-details select
{
    display: block;
    padding: 10px;
    margin-top: 20px;
}
.products-details input
{
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px
}
input:focus
{
    outline: none;
}
.products-details  .fa
{
    color: deeppink;
    margin-left: 5px;
}

.small-img-row
{
    display: flex;
    justify-content: space-between;
}
.small-img-col
{
    flex-basis: 24%;
    cursor: pointer;
}


































`;
export default Wrapper ;