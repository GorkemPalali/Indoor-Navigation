const drawLine = function (from, to) {
  var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newLine.setAttribute("id", "line2");
  newLine.setAttribute("x1", "" + from.getAttribute("cx"));
  newLine.setAttribute("y1", "" + from.getAttribute("cy"));
  newLine.setAttribute("x2", "" + to.getAttribute("cx"));
  newLine.setAttribute("y2", "" + to.getAttribute("cy"));
  newLine.setAttribute("stroke", "blue");
  newLine.setAttribute("stroke-width", "4");  
  // newLine.setAttribute("stroke-dasharray", "10 10");
  document.querySelector("svg").append(newLine);
};
const drawLineObj = function (from, to) {
  var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newLine.setAttribute("id", "line2");
  newLine.setAttribute("x1", "" + from.coordinates[0]);
  newLine.setAttribute("y1", "" + from.coordinates[1]);
  newLine.setAttribute("x2", "" + to.coordinates[0]);
  newLine.setAttribute("y2", "" + to.coordinates[1]);
  newLine.setAttribute("stroke", "red");
  newLine.setAttribute("stroke-width", "4");
  // newLine.setAttribute("stroke-dasharray", "10 10");
  document.querySelector("svg").append(newLine);
};
// -2. Kat-------------------------------------------------------------------------------

const L001 = document.getElementById("L001");

if(L001){
  const MerdivenEksi2 = document.getElementById("MerdivenEksi2");
  const MerdivenEksi2C = document.getElementById("MerdivenEksi2C");

  const L002 = document.getElementById("L002");
  const L003 = document.getElementById("L003");
  const L004 = document.getElementById("L004");
  const L006 = document.getElementById("L006");
  const L007 = document.getElementById("L007");
  const L008 = document.getElementById("L008");
  const L009 = document.getElementById("L009");
  const L010 = document.getElementById("L010");
  const L011 = document.getElementById("L011");
  const L019 = document.getElementById("L019");
  const L023 = document.getElementById("L023");
  const L024 = document.getElementById("L024");
  const L026 = document.getElementById("L026");
  const L028 = document.getElementById("L028");
  const L029 = document.getElementById("L029");
  const L030 = document.getElementById("L030");
  const LAB028 = document.getElementById("LAB028");
    

  const L001CRD = document.getElementById("L001CRD");
  const L002CRD = document.getElementById("L002CRD");
  const L003CRD = document.getElementById("L003CRD");
  const L004CRD = document.getElementById("L004CRD");
  const L006CRD = document.getElementById("L006CRD");
  const L007CRD = document.getElementById("L007CRD");
  const L008CRD = document.getElementById("L008CRD");
  const L009CRD = document.getElementById("L009CRD");
  const L010CRD1 = document.getElementById("L010CRD1");
  const L010CRD2 = document.getElementById("L010CRD2");
  const L010CRD3 = document.getElementById("L010CRD3");
  const L010CRD4 = document.getElementById("L010CRD4");
  const L011CRD = document.getElementById("L011CRD");
  const L019CRD1 = document.getElementById("L019CRD1");
  const L019CRD2 = document.getElementById("L019CRD2");
  const L019CRD3 = document.getElementById("L019CRD3");
  const L023CRD = document.getElementById("L023CRD");
  const L024CRD = document.getElementById("L024CRD");
  const L026CRD1 = document.getElementById("L026CRD1");
  const L026CRD2 = document.getElementById("L026CRD2");
  const L028CRD = document.getElementById("L028CRD");
  const L029CRD = document.getElementById("L029CRD");
  const L030CRD = document.getElementById("L030CRD");
  const LAB028CRD = document.getElementById("028CRD");
}
//tekmer katı----------------------------------------------------------------------------
const D2110 = document.getElementById("D2110");

if(D2110){
  const MerdivenKatTEKMER = document.getElementById("MerdivenKatTEKMER");
  const MerdivenKatTEKMERC = document.getElementById("MerdivenKatTEKMERC");
  const MaviKonferansSalonu = document.getElementById("MaviKonferansSalonu");
  const TuruncuKonferansSalonu = document.getElementById("TuruncuKonferansSalonu");

  
  const D2109 = document.getElementById("D2109");

  const D2108 = document.getElementById("D2108");
  const D2107 = document.getElementById("D2107");
  const D2106 = document.getElementById("D2106");

  const WCTkmr = document.getElementById("WCTkmr");
  const WCTkmrC = document.getElementById("WCTkmrC");  
  const TekmerGirisi = document.getElementById("TekmerGirisi");
  const DTEKMERGirişiC = document.getElementById("DTEKMERGirişiC");  
  const TEKMER = document.getElementById("TEKMER");
  const TEKMERC = document.getElementById("TEKMERC");  

  const MaviKonferansSalonuC = document.getElementById("MaviKonferansSalonuC");
  const TuruncuKonferansSalonuC = document.getElementById("TuruncuKonferansSalonuC");
  
  const D2110C = document.getElementById("D2110C");
  const D2109C = document.getElementById("D2109C");

  const D2108C = document.getElementById("D2108C");
  const D2108C2 = document.getElementById("D2108C2");
  const D2107C = document.getElementById("D2107C");
  const D2106C = document.getElementById("D2106C");

  const altKoridor = document.getElementById("altKoridor");
  const üstKoridor = document.getElementById("üstKoridor");
}

//Zemin Kat------------------------------------------------------------------------------
const D2201= document.getElementById("D2201");

if(D2201){

  const MerdivenGirişKat = document.getElementById("MerdivenGirişKat");
  const MerdivenGirişKatC = document.getElementById("MerdivenGirişKatC");

  const DGiriş = document.getElementById("DGiriş");

  const D2202 = document.getElementById("D2202");
  const D2203 = document.getElementById("D2203");
  const D2204 = document.getElementById("D2204");
  const D2205 = document.getElementById("D2205");
  const D2207 = document.getElementById("D2207");
  const D2242 = document.getElementById("D2242");
  const OnlineLAB = document.getElementById("OnlineLAB");
  const D2229 = document.getElementById("D2229");
  const D2228 = document.getElementById("D2228");
  const D2227 = document.getElementById("D2227");
  const WCGirişKat = document.getElementById("WCGirişKat");
  const WCGirişKatC = document.getElementById("WCGirişKatC");
  const D2230 = document.getElementById("D2230");


  //------------------------------------------------------------------------


  const D2201C= document.getElementById("D2201C");
  const D2202C = document.getElementById("D2202C");
  const D2203C = document.getElementById("D2203C");
  const D2204C = document.getElementById("D2204C");
  const D2205C = document.getElementById("D2205C");
  const D2207C = document.getElementById("D2207C");
  const D2242C = document.getElementById("D2242C");
  const OnlineLABC = document.getElementById("OnlineLABC");
  const D2229C = document.getElementById("D2229C");
  const D2228C = document.getElementById("D2228C");
  const D2227C = document.getElementById("D2227C");
  const D2230C = document.getElementById("D2230C");

  const solÜstBirleşim = document.getElementById("solÜstBirleşim");
  const solAltBirleşim = document.getElementById("solAltBirleşim");
  const sağAltBirleşim = document.getElementById("sağAltBirleşim");
  const D2229C2 = document.getElementById("D2229C2");
  const HolC = document.getElementById("HolC");
}


// 1. Kat--------------------------------------------------------------------------------
const D2301 = document.getElementById("D2301");

if (D2301) {
  const MerdivenKat1 = document.getElementById("MerdivenKat1");
  const Güvenlik = document.getElementById("Güvenlik");
  const D2302 = document.getElementById("D2302");

  const D2303 = document.getElementById("D2303");
  const D2304 = document.getElementById("D2304");
  const D2305 = document.getElementById("D2305");

  const D2306 = document.getElementById("D2306");
  const D2307 = document.getElementById("D2307");
  const D2308 = document.getElementById("D2308");

  const D2309 = document.getElementById("D2309");
  const D2310 = document.getElementById("D2310");
  const D2311 = document.getElementById("D2311");

  const D2312 = document.getElementById("D2312");
  const D2313 = document.getElementById("D2313");
  const D2314 = document.getElementById("D2314");
  const D2315 = document.getElementById("D2315");

  const GüvenlikCRD = document.getElementById("GüvenlikCRD");

  const D2301CRD = document.getElementById("D2301CRD");
  const D2302CRD = document.getElementById("D2302CRD");
  const D2303CRD = document.getElementById("D2303CRD");
  const D2304CRD = document.getElementById("D2304CRD");
  const D2305CRD = document.getElementById("D2305CRD");
  const D2306CRD = document.getElementById("D2306CRD");
  const D2307CRD = document.getElementById("D2307CRD");
  const D2308CRD = document.getElementById("D2308CRD");
  const D2309CRD = document.getElementById("D2309CRD");
  const D2310CRD = document.getElementById("D2310CRD");
  const D2311CRD = document.getElementById("D2311CRD");
  const D2312CRD = document.getElementById("D2312CRD");
  const D2313CRD = document.getElementById("D2313CRD");
  const D2314CRD = document.getElementById("D2314CRD");
  const D2315CRD = document.getElementById("D2315CRD");

  const D1WC2 = document.getElementById("D1WC2");
  const D1WC1 = document.getElementById("D1WC1");
  const D1WC3 = document.getElementById("D1WC3");
  const D1WC4 = document.getElementById("D1WC4");

  const UPCRD1 = document.getElementById("UPCRD1");
  const UPCRD2 = document.getElementById("UPCRD2");

  const DOWNCRD1 = document.getElementById("DOWNCRD1");
  const DOWNCRD2 = document.getElementById("DOWNCRD2");
  const DOWNCRD3 = document.getElementById("DOWNCRD3");
  const ALT4 = document.getElementById("ALT4");

  const LEFTCRD1 = document.getElementById("LEFTCRD1");
  const LEFTCRD2 = document.getElementById("LEFTCRD2");

  const RIGHTCRD2 = document.getElementById("RIGHTCRD2");
  const RIGHTCRD1 = document.getElementById("RIGHTCRD1");
}


//2. kat---------------------------------------------------------------------------------
const D2401 = document.getElementById("D2401");

if (D2401) {
  const D2416 = document.getElementById("D2416");
  const D2417 = document.getElementById("D2417");
  const D2418 = document.getElementById("D2418");
  const MerdivenKat2 = document.getElementById("MerdivenKat2");

  const D2416C = document.getElementById("D2416C");
  const D2417C = document.getElementById("D2417C");
  const D2418C = document.getElementById("D2418C");

  const D2408 = document.getElementById("D2408");
  const D2407 = document.getElementById("D2407");
  const D2406 = document.getElementById("D2406");

  const D2408C = document.getElementById("D2408C");
  const D2407C = document.getElementById("D2407C");
  const D2406C = document.getElementById("D2406C");

  const D2402 = document.getElementById("D2402");
  const D2403 = document.getElementById("D2403");
  const D2404 = document.getElementById("D2404");
  const D2405 = document.getElementById("D2405");

  const D2401C = document.getElementById("D2401C");
  const D2402C = document.getElementById("D2402C");
  const D2403C = document.getElementById("D2403C");
  const D2404C = document.getElementById("D2404C");
  const D2405C = document.getElementById("D2405C");
  const D2ÜstSınıf5CGiden = document.getElementById("D2ÜstSınıf5CGiden");
  const D2SağÜsteGiden = document.getElementById("D2SağÜsteGiden");
  const D2SolÜsteGiden = document.getElementById("D2SolÜsteGiden");

  const D2415 = document.getElementById("D2415");
  const D2414 = document.getElementById("D2414");
  const D2413 = document.getElementById("D2413");
  const D2412 = document.getElementById("D2412");
  const D2411 = document.getElementById("D2411");
  const D2410 = document.getElementById("D2410");
  const D2409 = document.getElementById("D2409");

  const D2414C = document.getElementById("D2414C");
  const D2413C = document.getElementById("D2413C");
  const D2412C = document.getElementById("D2412C");
  const D2411C = document.getElementById("D2411C");
  const D2410C = document.getElementById("D2410C");
  const D2SağAlta = document.getElementById("D2SağAlta");
  const D2SolAlta = document.getElementById("D2SolAlta");

  const WCKat2 = document.getElementById("WCKat2");
  const D2WCC = document.getElementById("D2WCC");
}

//3.kat----------------------------------------------------------------------------------

const D2501 = document.getElementById("D2501");

if (D2501) {
  const D2502 = document.getElementById("D2502");
  const D2503 = document.getElementById("D2503");
  const D2504 = document.getElementById("D2504");
  const D2505 = document.getElementById("D2505");
  const D2506 = document.getElementById("D2506");
  const D2507 = document.getElementById("D2507");
 
  const D2509 = document.getElementById("D2509");
  const D2510 = document.getElementById("D2510");
  const D2511 = document.getElementById("D2511");
  const D2512 = document.getElementById("D2512");
  const D3WC = document.getElementById("D3WC");
  const D3stairs = document.getElementById("D3stairs");

  
  const D2501C = document.getElementById("D2501C"); 
  const D2501C2 = document.getElementById("D2501C2"); 

  const D2502C = document.getElementById("D2502C");
  const D2503C = document.getElementById("D2503C");

  const D2504C = document.getElementById("D2504C");
  const D2504C2 = document.getElementById("D2504C2");

  const D2505C = document.getElementById("D2505C");
  const D2505C2 = document.getElementById("D2505C2");
  const D2505C3 = document.getElementById("D2505C3");

  const D25067C = document.getElementById("D25067C");
  const D25067C2 = document.getElementById("D25067C2");

  const D2509C = document.getElementById("D2509C");
  const D2509C2 = document.getElementById("D2509C2");

  const D2510C = document.getElementById("D2510C");
  const D2510C2 = document.getElementById("D2510C2");
  const D2510C3 = document.getElementById("D2510C3");

  const D2511C = document.getElementById("D2511C");
  const D2512C = document.getElementById("D2512C");

  const D3WCC = document.getElementById("D3WCC");
  const D3WCC2 = document.getElementById("D3WCC2");

  const D3stairsC  = document.getElementById("D3stairsC");
  const D3stairsC2  = document.getElementById("D3stairsC2");
  const D3stairsC3  = document.getElementById("D3stairsC3");
  const D3stairsC4  = document.getElementById("D3stairsC4");
  const D3stairsC5 = document.getElementById("D3stairsC5");
}

//4.Kat--------------------------------------------------------------------
const Kantin = document.getElementById("Kantin");

if(Kantin){
  const MerdivenKat4 = document.getElementById("MerdivenKat4");
  const MerdivenKat4C = document.getElementById("MerdivenKat4C");

  const KantinC = document.getElementById("KantinC");

  const EğlenceAlanı = document.getElementById("EğlenceAlanı");
  const EğlenceAlanıC = document.getElementById("EğlenceAlanıC");

  const Teras = document.getElementById("Teras");
  const TerasC = document.getElementById("TerasC");
}