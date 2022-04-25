function Calculate()
{
    let sum=0,chour=0;
    let ch1=0,ch2=0,ch3=0,ch4=0,ch5=0,ch6=0;
    let grade1=0,grade2=0,grade3=0,grade4=0,grade5=0,grade6=0;
    ch1=document.getElementById("CH1").value;
    ch2=document.getElementById("CH2").value;
    ch3=document.getElementById("CH3").value;
    ch4=document.getElementById("CH4").value;
    ch5=document.getElementById("CH5").value;
    ch6=document.getElementById("CH6").value;
    grade1=document.getElementById("Grade1").value;
    grade2=document.getElementById("Grade2").value;
    grade3=document.getElementById("Grade3").value;
    grade4=document.getElementById("Grade4").value;
    grade5=document.getElementById("Grade5").value;
    grade6=document.getElementById("Grade6").value;
    const ch=[ch1,ch2,ch3,ch4,ch5,ch6];
    const grade=[grade1,grade2,grade3,grade4,grade5,grade6];
    for(let i=0;i<ch.length;i++){
        if(ch[i]!=0){
    if(grade[i]=='A')
    {
        sum=sum+(ch[i]*4.0);
        console.log(i+" sum is "+sum);
        chour+=parseInt(ch[i]);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='A-')
    {
        sum=sum+(ch[i]*3.67);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='B+')
    {
        sum=sum+(ch[i]*3.33);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='B')
    {
        sum=sum+(ch[i]*3.0);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='B-')
    {
        sum=sum+(ch[i]*2.67);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='C+')
    {
        sum=sum+(ch[i]*2.33);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='C')
    {
        sum=sum+(ch[i]*2.0);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='C-')
    {
        sum=sum+(ch[i]*1.87);
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='D+')
    {
        sum=sum+(ch[i]*1.33); 
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else if(grade[i]=='D')
    {
        sum=sum+(ch[i]*1.0);  
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
    else
    {
        sum+=0;
        chour+=parseInt(ch[i]);
        console.log(i+" sum is "+sum);
        console.log(i+" credit hour is "+chour);
    }
}
}
let gpa=sum/chour;
console.log(" GPA is "+gpa);
document.getElementById("GPA").value=gpa;
}