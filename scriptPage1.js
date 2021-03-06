        const url = "https://log2420-serve.herokuapp.com/JSON/output.json"


        // Replace ./data.json with your JSON feed
        fetch(url)
          .then(response => {
            return response.json()
          })
          .then(data => {
            // Work with JSON data here
            generateElectionElements(data);

            generatePartisFederauxElements(data);
        
            generatePartisProvinciauxElements(data);
        
            displayPartis();
          })
          .catch(err => {
            // Do something for an error here
        })

        function generateElectionElements(data){
          document.getElementById("electionNom1").innerHTML = data.Elections[0].name;
          document.getElementById("electionDate1").innerHTML = data.Elections[0].date;

          document.getElementById("electionNom2").innerHTML = data.Elections[1].name;
          document.getElementById("electionDate2").innerHTML = data.Elections[1].date;

          document.getElementById("electionNom3").innerHTML = data.Elections[2].name;
          document.getElementById("electionDate3").innerHTML = data.Elections[2].date;

          document.getElementById("electionNom4").innerHTML = data.Elections[3].name;
          document.getElementById("electionDate4").innerHTML = data.Elections[3].date;
        }

        function generatePartisFederauxElements(data){
          document.getElementById("partiAbreviation1").innerHTML = data.PartisFederaux[0].abreviation;
          document.getElementById("partiNom1").innerHTML = data.PartisFederaux[0].fullname;

          document.getElementById("partiAbreviation2").innerHTML = data.PartisFederaux[1].abreviation;
          document.getElementById("partiNom2").innerHTML = data.PartisFederaux[1].fullname;

          document.getElementById("partiAbreviation3").innerHTML = data.PartisFederaux[2].abreviation;
          document.getElementById("partiNom3").innerHTML = data.PartisFederaux[2].fullname;
          
          document.getElementById("partiAbreviation4").innerHTML = data.PartisFederaux[3].abreviation;
          document.getElementById("partiNom4").innerHTML = data.PartisFederaux[3].fullname;

          document.getElementById("partiAbreviation5").innerHTML = data.PartisFederaux[4].abreviation;
          document.getElementById("partiNom5").innerHTML = data.PartisFederaux[4].fullname;

          document.getElementById("partiAbreviation6").innerHTML = data.PartisFederaux[5].abreviation;
          document.getElementById("partiNom6").innerHTML = data.PartisFederaux[5].fullname;
        }
       
        var count=0;
        var clicked5=false;
        var clicked6=false;
        var clicked7=false;
        var clicked8=false;
        var clicked9=false;
        var clicked10=false;
        function peser1(){
        var x=document.getElementById("bouton1");
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10_selected.svg?token=86c351514e38ab2185dbad1d000473f21ed20405e8efd80e3cc34932b4232fc5')";
        }
        function peser2(){
        var x=document.getElementById("bouton2");
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10_selected.svg?token=86c351514e38ab2185dbad1d000473f21ed20405e8efd80e3cc34932b4232fc5')";
        }
        function peser3(){
        var x=document.getElementById("bouton3");
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10_selected.svg?token=86c351514e38ab2185dbad1d000473f21ed20405e8efd80e3cc34932b4232fc5')";
        }
        function peser4(){
        var x=document.getElementById("bouton4");
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10_selected.svg?token=86c351514e38ab2185dbad1d000473f21ed20405e8efd80e3cc34932b4232fc5')";
        }
        function reset(){
        var a=document.getElementById("bouton1");
        a.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10.svg?token=d0c387ec44cb005118feef621b7bcd728fd4054088cc2a37b5db6a558fb475ff')";
        var b=document.getElementById("bouton2");
        b.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10.svg?token=d0c387ec44cb005118feef621b7bcd728fd4054088cc2a37b5db6a558fb475ff')";
        var c=document.getElementById("bouton3");
        c.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10.svg?token=d0c387ec44cb005118feef621b7bcd728fd4054088cc2a37b5db6a558fb475ff')";
        var d=document.getElementById("bouton4");
        d.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u10.svg?token=d0c387ec44cb005118feef621b7bcd728fd4054088cc2a37b5db6a558fb475ff')";
        }
        function peser5(){
        var x=document.getElementById("bouton5");
        if(clicked5==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked5=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked5=false;
        count=count-1;
        }
        }
        function peser6(){
        var x=document.getElementById("bouton6");
        if(clicked6==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked6=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked6=false;
        count=count-1;
        }
        }
        function peser7(){
        var x=document.getElementById("bouton7");
        if(clicked7==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked7=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked7=false;
        count=count-1;
        }
        }
        function peser8(){
        var x=document.getElementById("bouton8");
        if(clicked8==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked8=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked8=false;
        count=count-1;
        }
        }
        function peser9(){
        var x=document.getElementById("bouton9");
        if(clicked9==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked9=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked9=false;
        count=count-1;
        }
        }
        function peser10(){
        var x=document.getElementById("bouton10");
        if(clicked10==false)
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u50_selected.svg?token=f38fbb65d5c5522e53534ea2a619583ee1161072bf586690b518bbb172c7627a')";
        clicked10=true;
        count=count+1;
        }
        else
        {
        x.style.backgroundImage="url('https://d1icd6shlvmxi6.cloudfront.net/gsc/S07G4J/6e/f3/0e/6ef30edcf95748619c3dd4f8df39238b/images/home/u56.svg?token=3e8da55ddcb2f33b31c5390acbd8c295383d157f54b78ee51384ad4e53cd3e56')";
        clicked10=false;
        count=count-1;
        }
        }
        function couleur(){
        var z=document.getElementById("bouton11");
        var x=document.getElementById("bouton12");
        var w=document.getElementById("a1");
        var q=document.getElementById("a2");
        if (count==1)
        {
        z.style.backgroundColor="rgb(33, 150, 243)";
        z.style.color="white";
        x.style.backgroundColor="lightgray";
        x.style.color="rgb(127, 127, 127)";
        w.style.pointerEvents="all";
        q.style.pointerEvents="none";
        }
        else if (count==2)
        {
        z.style.backgroundColor="lightgray";
        z.style.color="rgb(127, 127, 127)";
        x.style.backgroundColor="rgb(33, 150, 243)";
        x.style.color="white";
        w.style.pointerEvents="none";
        q.style.pointerEvents="all";
        }
        else
        {
        z.style.backgroundColor="lightgray";
        z.style.color="rgb(127, 127, 127)";
        x.style.backgroundColor="lightgray";
        x.style.color="rgb(127, 127, 127)";
        w.style.pointerEvents="none";
        q.style.pointerEvents="none";
        }
        }