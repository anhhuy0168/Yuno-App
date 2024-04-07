import styled from 'styled-components';
const Wrapper  = styled.section`
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