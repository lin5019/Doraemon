let string = `.Doraemon {
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: #fad200;
}
.Doraemon .head {

    position: absolute;
    top:20%;
    left: 50%;
    width: 240px;
    height: 230px;
    margin-left: -120px;
    border: #000 solid 2px;
    border-radius:  50% 50% 50% 50% / 50% 50% 50% 50%;
    /*transform: rotateZ(-50deg);*/
    background: #facb00;
    z-index: 10;
}

.head .face {
    position: absolute;
    top:12%;
    left: 50%;
    width: 210px;
    height: 200px;
    margin-left: -105px;
    border: #000 solid 2px;
    border-radius:  50% ;
    /*transform: rotateZ(-50deg);*/
    background: #e2dfde;
    z-index: 20;
}

.face .brow {
    border: #58293a solid 2px;
    position: absolute;
    width: 25px;
    height: 20px;
    border-radius:  50% ;
    z-index: 1;
}
.face .brow.left {
    top: 15px;
    left: 45px;
    transform: rotateZ(-25deg);
}
.face .brow.left::before {
    content: "";
    position: absolute;
    top: 4px;
    left: -4px;
    width: 28px;
    height: 20px;
    /*border: red solid 1px;*/
    background:#e2dfde;
}
.face .brow.right {
    top: 10px;
    left: 127px;
    transform: rotateZ(15deg);
}
.face .brow.right::before {
    content: "";
    position: absolute;
    top: 4px;
    left: -4px;
    width: 28px;
    height: 20px;
    /*border: red solid 1px;*/
    background:#e2dfde;
}

.face .eye {
    position: absolute;
    top: 48px;
    left: 44px;
    width: 40px;
    height: 60px;
    border: #763058 solid 2px;
    border-radius: 45% ;
    z-index: 1;
}

.face .eye.left {
    top: 45px;
    left: 40px;
}

.face .eye.right {
    top: 45px;
    left: 125px;
}

.face .eye.left>.eyelash1 {
    position: absolute;
    top: -3px;
    left: 0;
    width: 10px;
    border: #763058 solid 1px;
    transform: rotateZ(50deg);
    background: #763058;
}
.face .eye.left>.eyelash2 {
    position: absolute;
    top: -8px;
    left: 11px;
    width: 13px;
    border: #763058 solid 1px;
    transform: rotateZ(87deg);
    background: #763058;
}
.face .eye.left>.eyelash3 {
    position: absolute;
    top: -3px;
    left: 26px;
    width: 10px;
    border: #763058 solid 1px;
    transform: rotateZ(113deg);
    background: #763058;
}

.face .eye.right>.eyelash1 {
    position: absolute;
    top: -3px;
    left: 0;
    width: 10px;
    border: #763058 solid 1px;
    transform: rotateZ(50deg);
    background: #763058;
}
.face .eye.right>.eyelash2 {
    position: absolute;
    top: -8px;
    left: 11px;
    width: 13px;
    border: #763058 solid 1px;
    transform: rotateZ(87deg);
    background: #763058;
}
.face .eye.right>.eyelash3 {
    position: absolute;
    top: -3px;
    left: 26px;
    width: 10px;
    border: #763058 solid 1px;
    transform: rotateZ(113deg);
    background: #763058;
}
.face .eye.left>.tongkong {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 28px;
    height: 45px;
    border-radius: 45% ;
    background: #270c00;
}
.face .eye.right>.tongkong {
    position: absolute;
    top: 6px;
    left: 3px;
    width: 28px;
    height: 45px;
    border-radius: 45% ;
    background: #270c00;
}
.tongkong::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 0;
    width: 0;
    height: 0;
    border: transparent solid 5px;
    border-left: #e2dfde solid 5px;
}
.tongkong::after {
    content: "";
    position: absolute;
    top: 16px;
    left: 8px;
    width: 9px;
    height: 13px;
    border-radius: 45% ;
    background: #e2dfde;
}

.face .blush {
    position: absolute;
    width: 15px;
    height: 15px;
    /*border: red solid 1px;*/
    border-radius: 45% ;
    background: #e8c6cc;
    opacity: .7;
    z-index: 1;
}

.face .blush.left {
    top: 110px;
    left: 30px;
}

.face .blush.right {
    top: 110px;
    left: 160px;
}

.face .nose {
    position: absolute;
    top: 90px;
    left: 88px;
    width: 28px;
    height: 18px;
    background: #e6cad0;
    border-radius: 50%;
    border: #763058 solid 2px;
    z-index: 1;
}

.face .nose::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 2px;
    width: 20px;
    height: 10px;
    border-top: #763058 solid 2px;
    border-radius: 40%;
}

.face .mouth {
    overflow: hidden;
    position: absolute;
    top: 6px;
    left: 72px;
    width: 60px;
    height: 150px;
    border: #763058 solid 2px;
    border-radius: 30px/75px;
    background: #e90000;
}
.face .smile {
    position: absolute;
    top: 102px;
    left: 66px;
    width: 70px;
    height: 30px;
    border: #763058 solid 2px;
    border-radius: 50%;
    background: #e2dfde;
}
.face .mouth::after {
    content: "";
    position: absolute;
    top: 130px;
    left: 13px;
    width: 30px;
    height: 30px;
    border: #763058 solid 2px;
    border-radius: 50%;
}

.face .shadow {
    position: absolute;
    top: 5px;
    left: 60px;
    width: 80px;
    height: 110px;
    background: #e2dfde;
    border-radius:10%;
}

.Doraemon .chaplet {
    position: absolute;
    bottom: 40px;
    left: 50%;
    width: 150px;
    height: 30px;
    margin-left: -75px;
    background: #fad200;
    z-index: 30;
    border-radius: 10px
}

.Doraemon .chaplet::before {
    content: "";
    width: 150px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    border: #272b51 solid 2px;
    background: #369ced;
    border-radius: 10px  10px 100px 100px /10px  10px 30px 30px;
}

.Doraemon .ear {
    position: absolute;
    width: 80px;
    height: 120px;
    background: #f40000;
    border-radius: 50% / 50%;
    border: #502b00 solid 2px;
    z-index: 1;
}
.Doraemon .ear.left {
    top: 45px;
    left: 60px;
    transform: rotateZ(-25deg);
}
.Doraemon .ear.right {
    top: 35px;
    left: 185px;
    transform: rotateZ(24deg);
}
.Doraemon .bell {
    overflow: hidden;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -18px;
    width: 36px;
    height: 36px;
    border: #0c1500 solid 2px;
    border-radius: 50%;
    z-index: 40;
    background: #f8bc00;
}
.bell  .bell-line {
    position: absolute;
    top: 8px;
    left: 0;
    width: 36px;
    height: 3px;
    border: #0c1500 solid 2px;
}
.bell  .bell-circle{
    position: absolute;
    top: 17px;
    left: 12px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #031500;
}
.bell  .bell-circle::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 3px;
    /*width: 2px;*/
    height: 10px;
    border: #031500 solid 1px;
    background: #031500;
}`;
export default string;