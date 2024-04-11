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
.navbar
{
    display: flex;
    align-items: center;
    padding: 20px;
}
nav
{
    flex: 1;
    text-align: right;
}
nav ul
{
    display: inline-block;
    list-style-type: none;
}
nav ul li
{
    display: inline-block;
    margin-right: 20px;
}
a
{
    text-decoration: none;
    color: black;
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
    font-size: 50px;
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
.header
{
    background: radial-gradient(white,pink);
}
.header .row
{
    margin-top: 70px;
}


.categories
{
    margin: 70px 0;
}
.col-3
{
    flex-basis: 30%;
    min-width: 250px;
    margin-bottom: 30px;
}
.col-3 img
{
    width: 100%;
}
.small-container
{
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}
.col-4
{
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}
.col-4 img
{
    width: 100%;
}
.tittle
{
    text-align: center;
    margin: 0 auto 60px;
    position: relative;
    line-height: 60px;
    color: black;
}
.tittle::after
{
    content: '';
    background: deeppink;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
h4
{
    color: black;
    font-weight: normal;
}
.col-4 p
{
    font-size: 14px;
}
.rating .fa
{
    color: deeppink;
}
.col-4:hover
{
    transform: translateY(-50%);
}
    
    /*------ offer -------*/
    
.offer
{
    background: radial-gradient(white,pink);
    margin-top: 80px;
    padding: 30px;
}
.col-2 .offer-img
{
    padding: 50px;
}

 /*------- testimonial --------*/

testimonial
{
    padding-top: 100px;
}
.testimonial .col-3
{
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.5s;
}
.testimonial .col-3 img
{
    width: 50px;
    margin-top: 20px;
    border-radius: 50%;
}
.testimonial .col-3:hover
{
    transform: translateY(-10px);
}
.fa .fa-quote-left
{
    font-size: 34px;
    color: deeppink;
}
.col-3 p
{
    font-size: 12px;
    margin: 12px 0;
    color: black;
}
.testimonial .col-3 h3
{
    font-weight: 600;
    color: black;
    font-size: 30px;
}

/*-------- footer ---------*/

.footer
{
    background: pink;
    color: black;
    font-size: 15px;
    padding: 60px 0 20px;
}
.footer p
{
    color: black;
    margin-bottom: 20px;
}
.footer-col-1, footer-col-2
{
    min-width: 200px;
    margin-bottom: 10px;
}
.footer-col-1
{
    text-align: center;
}
.footer-col-2
{
    text-align: center;
}
ul
{
    list-style-type: none;
}
.footer hr
{
    border: none;
    background: black;
    height: 2px;
    margin: 20px 0;
}
.copyright
{
    text-align: center;
}


/*--------- all products --------*/

.row-2
{
    justify-content: space-between;
    margin: 100px auto 50px;
}
select
{
    border: 1px solid deeppink;
    padding: 5px;
}
select:focus
{
    outline: none;
}
.page-btn
{
    margin: 0 auto 80px;
}
.page-btn span
{
    display: inline-block;
    border: 1px solid deeppink;
    margin-left: 10px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.page-btn span:hover
{
    background: deeppink;
    color: black;
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

/*------ cart items -----*/

.cart-page
{
    margin: 80px auto;
}
table
{
    width: 100%;
    border-collapse: collapse;
}
.cart-info
{
    display: flex;
    flex-wrap: wrap;
}
th
{
    text-align: left;
    padding: 5px;
    color: black;
    background: deeppink;
    font-weight: normal;
}
td
{
    padding: 10px 5px;
}
td input
{
    width: 40px;
    height: 30px;
    padding: 5px;
}
td a
{
    color: deeppink;
    font-size: 12px;
}
td img
{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.total-price
{
    display: flex;
    justify-content: flex-end;
}
.total-price table
{
    border-top: 3px solid deeppink;
    width: 100%;
    max-width: 350px;
}
td:last-child
{
    text-align: right;
}
th:last-child
{
    text-align: right;
}

/*------ account-page -------*/

.account-page
{
    padding: 50px 0;
    background: radial-gradient(white,pink);
    
}
.form-container
{
    background: white;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    margin: auto;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
    overflow: hidden;
}
.form-container span
{
    font-weight: bold;
    padding: 0 10px;
    color: black;
    cursor: pointer;
    width: 100px;
    display: inline-block;
}
.form-btn
{
    display: inline-block;
    
}
.form-container form
{
    max-width: 300px;
    padding: 0 20px;
    position: absolute;
    top: 130px;
    transition: transform 1s;

}
form input
{
    width: 100%;
    height: 30px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid deeppink;
}
form .btn
{
    width: 100%;
    border: none;
    cursor: pointer;
}
form .btn:focus
{
    outline: none;
}
#LoginForm
{
    left: -300px;
}
#RegForm
{
    left: 0;
}
form a{
    font-size: 12px;
}
#Indicator
{
    width: 100px;
    border: none;
    background: deeppink;
    height: 3px;
    margin-top: 8px;
    transform: translateX(100px);
    transition: transform 1s;
}
`;
export default Wrapper ;