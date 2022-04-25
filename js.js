function Calculate()
{
    let sum=0,chour=0;
        let ch1=document.getElementById("CH1").value;
    let ch2=document.getElementById("CH2").value;
    let ch3=document.getElementById("CH3").value;
    let ch4=document.getElementById("CH4").value;
    let ch5=document.getElementById("CH5").value;
    let ch6=document.getElementById("CH6").value;
    let grade1=document.getElementById("Grade1").value;
    let grade2=document.getElementById("Grade2").value;
    let grade3=document.getElementById("Grade3").value;
    let grade4=document.getElementById("Grade4").value;
    let grade5=document.getElementById("Grade5").value;
    let grade6=document.getElementById("Grade6").value;
    const ch=[ch1,ch2,ch3,ch4,ch5,ch6];
    const grade=[grade1,grade2,grade3,grade4,grade5,grade6];
    for(let i=0;i<ch.length;i++){
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
let gpa=sum/chour;
console.log(" GPA is "+gpa);
document.getElementById("GPA").value=gpa;
}