function main()
{
    let input = document.querySelector('textarea').value;
    input = input.replace(/\s+/g, '')
    let f = "";
    let v = "";
    let v2 = "";

    let i = 0;
    while ((input[i] != '(') && (input[i] != null))
    {
        f += input[i];
        i++;
    }

    i++;

    while ((input[i] != null) && (input[i] != ')') && (input[i] != ','))
    {
        v += input[i];
        i++;
    }

    i++;

    while ((input[i] != ')') && (input[i] != null))
    {
        v2 += input[i];
        i++;
    }
    
    let ov2 = v2;
    v = v.replace(/\s+/g, '')
    v2 = v2.replace(/\s+/g, '')
    v = new cread(v);
    v2 = new cread(v2);

    if (f == 'sin')
    {
        fv = new cmplx(csin(v).re.toFixed(3), csin(v).im.toFixed(3))
    }
    
    else if (f == "cos")
    {
        fv = new cmplx(ccos(v).re.toFixed(3), ccos(v).im.toFixed(3));
    }

    else if (f == "tan")
    {
        fv = new cmplx(ctan(v).re.toFixed(3), ctan(v).im.toFixed(3));
    }
    
    else if (f == "arcsin")
    {
        fv = new cmplx(carcsin(v).re.toFixed(3), carcsin(v).im.toFixed(3));
    }
    else if (f == "arccos")
    {
        fv = new cmplx(carccos(v).re.toFixed(3), carccos(v).im.toFixed(3));
    }
    
    else if (f == "arctan")
    {
        fv = new cmplx(carctan(v).re.toFixed(3), carctan(v).im.toFixed(3));
    }

    else if (f == "sinh")
    {
        fv = new cmplx(csinh(v).re.toFixed(3), csinh(v).im.toFixed(3));
    }

    else if (f == "cosh")
    {
        fv = new cmplx(ccosh(v).re.toFixed(3), ccosh(v).im.toFixed(3));
    }

    else if (f == "tanh")
    {
        fv = new cmplx(ctanh(v).re.toFixed(3), ctanh(v).im.toFixed(3));
    }

    else if (f == "exp")
    {
        fv = new cmplx(exp(v).re.toFixed(3), exp(v).im.toFixed(3));
    }

    else if (f == "ln")
    {
        fv = new cmplx(ln(v).re.toFixed(3), ln(v).im.toFixed(3));
    }

    else if (f == "log")
    {
        fv = new cmplx(log(v, v2).re.toFixed(3), 0);
    }

    else if (f == "fac")
    {
        if (ffac(v.re, v.re) == "error")
        {
            fv = new cmplx(NaN, NaN);
        }
        else
        {
            fv = new cmplx(ffac(v.re, v.re).toFixed(3), 0);
        }
    }

    else if (f == "rCk")    
    {
        if (rCk(v.re, v2.re) == "error")
        {
            fv = new cmplx(NaN, NaN);
        }
        else
        {
            fv = new cmplx(rCk(v.re, v2.re).toFixed(3), 0);
        }
    }

    else if (f == "cadd")
    {
        fv = new cmplx(cadd(v, v2).re.toFixed(3), cadd(v, v2).im.toFixed(3));
    }
    
    else if (f == "cneg")
    {
        fv = new cmplx(cneg(v, v2).re.toFixed(3), cneg(v, v2).im.toFixed(3));
    }

    else if (f == "cmul")
    {
        fv = new cmplx(cmul(v, v2).re.toFixed(3), cmul(v, v2).im.toFixed(3));
    }

    else if (f == "cdiv")
    {
        fv = new cmplx(cdiv(v, v2).re.toFixed(3), cdiv(v, v2).im.toFixed(3));
    }

    else if (f == "cpow")
    {
        fv = new cmplx(cpow(v, v2.re).re.toFixed(3), cpow(v, v2.re).im.toFixed(3));
    }

    else if (document.querySelector('textarea').value == "")
    {
        document.querySelector('#output').innerHTML = "";
        return;
    }
    
    else
    {
        document.querySelector('#output').innerHTML = "Unsupported Function";
        return;
    }
    


    if (fv.str == "error" || fv == "error")
    {
        document.querySelector('#output').innerHTML = "Invalid Input";   
    }
    else if (ov2 != "")
    {
        document.querySelector('#output').innerHTML = `${f}(${v.str}, ${v2.str}) = ${fv.str}`;
    }
    else
    {
        document.querySelector('#output').innerHTML = `${f}(${v.str}) = ${fv.str}`;
    }
}










let PI = 3.1415926535;
let E = 2.7182818284;


class cmplx
{
    constructor(re, im)
    {
        this.re = re;
        this.im = im;
        this.mag = (this.re ** 2 + this.im ** 2) ** (1/2);

        let imstr = "";
        if (im < 0)
        {
            imstr = " - " + -im + "i";
            if (im == -1)
            {
                imstr = " - i";
            }
        }
        else if (im > 0)
        {
            imstr = " + " + im + "i";
            if (im == 1)
            {
                imstr = " + i";
            }
        }
        else
        {
            imstr = "";
        }

        if (isNaN(re) || isNaN(im))
        {
            this.str = "error";
        }
        else if (re != 0)
        {
            this.str = re + imstr;
        }
        else
        {
            if (im < 0)
            {
                this.str = "-" + -im + "i";
                if (im == -1)
                {
                    this.str = "-i";
                }
            }
            else if (im > 0)
            {
                this.str = im + "i";
                if (im == 1)
                {
                    this.str = "i";
                }
            }
            else
            {
                this.str = "0";
            }
        }
    }
}


function cread(z)
{
    z = z.replace(/\s/g, '')
    let re = "";
    let im = "";
    let i = z.length - 1;

    if (z[i] == "i")
    {
        i--;
        while ((z[i] != "+" && z[i] != "-") && i >= 0)
        {
            im += z[i];
            i--;
        }
        if (im == "")
        {
            im = "1";
        }
        if (i >= 0)
        {
            im += z[i];
        }
        im = im.split('').reverse().join('');

        i--;

        while (i >= 0)
        {
            re += z[i];
            i--;
        }
        re = re.split('').reverse().join('');
        
        im = Number(im);
        re = Number(re);
    }
    else
    {
        im = 0;
        re = Number(z);
    }

    return new cmplx(re, im);
}


function cadd(z1, z2)
{
    return new cmplx(z1.re + z2.re, z1.im + z2.im);
}

function cneg(z1, z2)
{
    return new cmplx(z1.re - z2.re, z1.im - z2.im);
}


function cmul(z1, z2)
{
    return new cmplx(z1.re * z2.re - z1.im * z2.im, z1.re * z2.im + z1.im * z2.re);
}


function cdiv(z1, z2)
{
    return new cmplx((z1.re * z2.re + z1.im * z2.im) / (z2.re * z2.re + z2.im * z2.im), (z1.im * z2.re - z2.im * z1.re) / (z2.re * z2.re + z2.im * z2.im));
}


function exp(z)
{
    let s = new cmplx(0, 0);
    for (let i = 0; i < 55; i++)
    {
        s = cadd(s, cdiv(cpow(z, i), new cmplx(ffac(i, i), 0)))
    }
    return s;
}


function ln(x)
{
    if (x.re <= 0 || x.im != 0)
    {
        return new cmplx(NaN, NaN);
    }

    v = (x.re ** .0000001 - 1) / (.0000001)
    return new cmplx(v, x.im);
}


function log(a, b)
{
    return cdiv(ln(b), ln(a));
}


function cpow(z1, n)
{    
    if (Number.isInteger(n) == false)
    {
        return new cmplx(NaN, NaN);
    }
    let p = new cmplx(1, 0);
    for (let i = 0; i < n; i++)
    {
        p = cmul(p, z1);
    }
    return p;
}


function csin(z)
{
    while (z.re < -PI || z.re > PI)
    {
        if (z.re > PI)
        {
            z.re -= PI*2;
        }
        else if (z.re < -PI)
        {
            z.re += PI*2;
        }
    }

    let s = new cmplx(0, 0);
    for (let i = 0; i < 55; i++)
    {
        s = cadd(s, cmul(cpow(new cmplx(-1, 0), i), cdiv(cpow(z, i * 2 + 1), new cmplx(ffac(i * 2 + 1, i * 2 + 1), 0))));
    }   
    return s;
}


function ccos(z)
{
    while (z.re < -PI || z.re > PI)
    {
        if (z.re > PI)
        {
            z.re -= PI*2;
        }
        else if (z.re < -PI)
        {
            z.re += PI*2;
        }
    }

    let s = new cmplx(0, 0);
    for (let i = 0; i < 55; i++)
    {
        s = cadd(s, cmul(cpow(new cmplx(-1, 0), i), cdiv(cpow(z, i * 2), new cmplx(ffac(i * 2, i * 2), 0))));
    }   
    return s;
}


function ctan(z)
{
    return cdiv(csin(z), ccos(z));
}


function carcsin(z)
{
    if (z.mag > 1)
    {
        return new cmplx(NaN, NaN);
    }

    let s = new cmplx(0, 0);
    for (let i = 0; i < 172; i++)
    {
        s = cadd(s, cmul(cpow(z, i * 2 + 1), new cmplx((-1)**i * rCk(-.5, i) / (i * 2 + 1), 0)));
    }
    return s;
}


function carccos(z)
{
    if (z.mag > 1)
    {
        return new cmplx(NaN, NaN);
    }
    return cneg(new cmplx(PI/2, 0), carcsin(z));
}


function carctan(z)
{
    if (z.mag > 1)
    {
        return cneg(new cmplx(PI/2, 0), carctan(cdiv(new cmplx(1, 0), z)));
    }

    let s = new cmplx(0, 0);
    for (let i = 0; i < 172; i++)
    {
        s = cadd(s, cmul(cpow(z, i * 2 + 1), new cmplx((-1)**i / (i * 2 + 1), 0)));
    }
    return s;
}


function csinh(z)
{
    return cdiv(cneg(exp(z), exp(cmul(z, new cmplx(-1, 0)))), new cmplx(2, 0));
}


function ccosh(z)
{
    return cdiv(cadd(exp(z), exp(cmul(z, new cmplx(-1, 0)))), new cmplx(2, 0));
}


function ctanh(z)
{
    return cdiv(csinh(z), ccosh(z));
}


function ffac(r, n)
{
    if (Number.isInteger(n) == false || n < 0)
    {
        return "error";
    }

    let p = 1;
    for (let i = 0; i < n; i++)
        p *= r - i;
    return p;
}


function rCk(r, k)
{
    if (Number.isInteger(k) == false)
    {
        return "error";
    }

    if (k == 0)
    {
        return 1;
    }
    return ffac(r, k) / ffac(k, k);
}


function sin(r)
{
    while (r < -PI || r > PI)
    {
        if (r > PI)
        {
            r -= PI*2;
        }
        else if (r2 < -PI)
        {
            r += PI*2;
        }
    }
    let s = 0;
    for (let i = 0; i < 172; i++)
    {
        s += (-1)**i * (r**(i * 2 + 1) / ffac(i * 2 + 1, i * 2 + 1))
    }
    return s;
}


function cos(r)
{
    return sin(PI/2 - r);
}


function tan(r)
{
    return sin(r)/cos(r);
}


function arcsin(r)
{
    let s = 0;
    for (let i = 0; i < 172; i++)
    {
        s += (-1)**i * rCk(-.5, i) * (r**(i * 2 + 1)/(i * 2 + 1));
    }
    return s;
}


function arccos(r)
{
     return PI/2 - arcsin(r);
}


function arctan(r)
{
    if (r > 1 || r < -1)
    {
        return PI/2 - arctan(1/r);
    }

    let s = 0;
    for (let i = 0; i < 172; i++)
    {
        s += (-1)**i * ((r ** (i * 2 + 1)) / (i * 2 + 1))
    }
    return s;
}
