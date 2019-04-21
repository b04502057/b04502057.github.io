var tt=()=>{
    var a=$("#in").val();
    var intext=a.toLowerCase();
    var outtext="";
    var c = intext;
    for(var i=0; i<intext.length;i++){
        if(c[i]=="a"){outtext+="m";}
        else if(c[i]=="m"){outtext+="e";}
        else if(c[i]=="e"){outtext+="l";}
        else if(c[i]=="l"){outtext+="i";}
        else if(c[i]=="i"){outtext+="t";}
        else if(c[i]=="t"){outtext+="v";}
        else if(c[i]=="v"){outtext+="d";}
        else if(c[i]=="d"){outtext+="c";}
        else if(c[i]=="c"){outtext+="o";}
        else if(c[i]=="o"){outtext+="n";}
        else if(c[i]=="n"){outtext+="g";}
        else if(c[i]=="g"){outtext+="r";}
        else if(c[i]=="r"){outtext+="u";}
        else if(c[i]=="u"){outtext+="b";}
        else if(c[i]=="b"){outtext+="f";}
        else if(c[i]=="f"){outtext+="h";}
        else if(c[i]=="h"){outtext+="j";}
        else if(c[i]=="j"){outtext+="k";}
        else if(c[i]=="k"){outtext+="p";}
        else if(c[i]=="p"){outtext+="q";}
        else if(c[i]=="q"){outtext+="s";}
        else if(c[i]=="s"){outtext+="w";}
        else if(c[i]=="w"){outtext+="x";}
        else if(c[i]=="x"){outtext+="y";}
        else if(c[i]=="y"){outtext+="z";}
        else if(c[i]=="z"){outtext+="a";}
        else if(c[i]==" "){outtext+=" ";}
        else if(c[i]==","){outtext+=",";}
        else if(c[i]=="."){outtext+=".";}
        else if(c[i]=="/"){outtext+="/";}
        else if(c[i]==";"){outtext+=";";}
        else if(c[i]=="'"){outtext+="'";}
        else if(c[i]=="<"){outtext+="<";}
        else if(c[i]==">"){outtext+=">";}
        else if(c[i]=="?"){outtext+="?";}
        else if(c[i]==":"){outtext+=":";}
        else {outtext+=" ";}
    }
    $("#out").val(outtext);

    
}




var ttt=()=>{
    var b=$("#out").val();
    var intext=b.toLowerCase();
    var outtext="";
    var c = intext;
    for(var i=0; i<intext.length;i++){
        if(c[i]=="m"){outtext+="a";}
        else if(c[i]=="e"){outtext+="m";}
        else if(c[i]=="l"){outtext+="e";}
        else if(c[i]=="i"){outtext+="l";}
        else if(c[i]=="t"){outtext+="i";}
        else if(c[i]=="v"){outtext+="t";}
        else if(c[i]=="d"){outtext+="v";}
        else if(c[i]=="c"){outtext+="d";}
        else if(c[i]=="o"){outtext+="c";}
        else if(c[i]=="n"){outtext+="o";}
        else if(c[i]=="g"){outtext+="n";}
        else if(c[i]=="r"){outtext+="g";}
        else if(c[i]=="u"){outtext+="r";}
        else if(c[i]=="b"){outtext+="u";}
        else if(c[i]=="f"){outtext+="b";}
        else if(c[i]=="h"){outtext+="f";}
        else if(c[i]=="j"){outtext+="h";}
        else if(c[i]=="k"){outtext+="j";}
        else if(c[i]=="p"){outtext+="k";}
        else if(c[i]=="q"){outtext+="p";}
        else if(c[i]=="s"){outtext+="q";}
        else if(c[i]=="w"){outtext+="s";}
        else if(c[i]=="x"){outtext+="w";}
        else if(c[i]=="y"){outtext+="x";}
        else if(c[i]=="z"){outtext+="y";}
        else if(c[i]=="a"){outtext+="z";}
        else if(c[i]==" "){outtext+=" ";}
        else if(c[i]==","){outtext+=",";}
        else if(c[i]=="."){outtext+=".";}
        else if(c[i]=="/"){outtext+="/";}
        else if(c[i]==";"){outtext+=";";}
        else if(c[i]=="'"){outtext+="'";}
        else if(c[i]=="<"){outtext+="<";}
        else if(c[i]==">"){outtext+=">";}
        else if(c[i]=="?"){outtext+="?";}
        else if(c[i]==":"){outtext+=":";}
        else {outtext+=" ";}
    }
    $("#in").val(outtext);

    
}