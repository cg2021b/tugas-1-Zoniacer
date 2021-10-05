function sin(a){
    return Math.sin(Math.PI * a);
    }
    
function cos(a){
    return Math.cos(Math.PI * a);
}

function gelasKiri(){
    var kiri = [];
    let A,B,C,D,E;
    
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 271) / 180;
        
        
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.62, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.62,
            43/255, 81/255, 88/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // setengah lingkaran gelas bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    A = kiri.slice(180*5*3, 180*5*3+5);
    B = kiri.slice(181*5*3, 181*5*3+5);
    C = kiri.slice(5, 10);
    D = kiri.slice(361*5*3, 361*5*3+5);
    E = kiri.slice(0*5*3, 0*5*3+5);

    kiri = kiri.concat(A, B, C);
    kiri = kiri.concat(B, C, D);
    kiri = kiri.concat(C, D, E);


    //bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-1
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, -0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, -0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    //bawah-2
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17- 0.5 , cos(j) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 - 0.5 , cos(k) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 - 0.5 , cos(j) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 - 0.5 , cos(k) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-3
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17- 0.5 , cos(j) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, -0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 - 0.5 , cos(k) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 - 0.5 , cos(j) * 0.2 - 0.2,
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, -0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 - 0.5 , cos(k) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-4
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, -0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-5
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, 0, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, 0, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-6
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-7
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            -0.5, 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-8
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2- 0.5 , cos(j) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            -0.5, 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    //bottlecap2
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    // bottle cap top
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.1 - 0.5 , cos(j) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            83/255, 149/255, 153/255,
        ];

        var vertex_3 = [
            sin(k) * 0.1 - 0.5 , cos(k) * 0.1 + 0.62,
            83/255, 149/255, 153/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.1 - 0.5 , cos(j) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            83/255, 149/255, 153/255,
        ];

        var vertex_3 = [
            sin(k) * 0.1 - 0.5 , cos(k) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    return kiri;
    
}

function gelasKanan(){
    var kanan = [];
    let A,B,C,D,E;
    
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 271) / 180;
        
        
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.62, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.62,
            43/255, 81/255, 88/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // setengah lingkaran gelas bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    A = kanan.slice(180*5*3, 180*5*3+5);
    B = kanan.slice(181*5*3, 181*5*3+5);
    C = kanan.slice(5, 10);
    D = kanan.slice(361*5*3, 361*5*3+5);
    E = kanan.slice(0*5*3, 0*5*3+5);

    kanan = kanan.concat(A, B, C);
    kanan = kanan.concat(B, C, D);
    kanan = kanan.concat(C, D, E);


    //bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.5, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-1
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, -0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, -0.4, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.4, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    //bawah-2
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 + 0.5 , cos(j) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 + 0.5 , cos(k) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 + 0.5 , cos(j) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 + 0.5 , cos(k) * 0.2 - 0.3, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-3
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 + 0.5 , cos(j) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, -0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 + 0.5 , cos(k) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.17 + 0.5 , cos(j) * 0.2 - 0.2,
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, -0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.17 + 0.5 , cos(k) * 0.2 - 0.2, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-4
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, -0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 - 0.1, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-5
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, 0, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, 0, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-6
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, 0.1, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.1, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-7
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_2 = [
            0.5, 0.2, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.2, 
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bawah-8
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.2 + 0.5 , cos(j) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_2 = [
            0.5, 0.3, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.2 + 0.5 , cos(k) * 0.21 + 0.3, 
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    //bottlecap2
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.5, 
            43/255, 81/255, 88/255,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            43/255, 81/255, 88/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.5,
            43/255, 81/255, 88/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    // bottle cap top
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.1 + 0.5 , cos(j) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            83/255, 149/255, 153/255,
        ];

        var vertex_3 = [
            sin(k) * 0.1 + 0.5 , cos(k) * 0.1 + 0.62,
            83/255, 149/255, 153/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.1 + 0.5 , cos(j) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            83/255, 149/255, 153/255,
        ];

        var vertex_3 = [
            sin(k) * 0.1 + 0.5 , cos(k) * 0.1 + 0.62, 
            83/255, 149/255, 153/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    return kanan;
}