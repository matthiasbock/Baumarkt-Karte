
/**
 * http://www.hellweg.de/cms/de/Filialen.htm
 */
 
Hellweg = {
   var image = "/cms/skins/_111327/1001001003/img/hellweg_minilogo4.gif";
   var loc = [
		 // Name, Adresse, Long, Lat, ?, Icon, ?, ?, ?, Name
		 //
		 ['Dortmund-Wambel ', 'Hannöversche Str. 56, 44143  Dortmund', '51.524233', '7.510619', 771632, image, 771735, false, false, 'Dortmund/Dortmund-Wambel'],  
		 //
		 ['Dortmund-Kley', 'Borussiastraße 88, 44149  Dortmund', '51.489665', '7.376433', 771632, image, 771736, false, false, 'Dortmund/Dortmund-Kley'],  
		 //
		 ['Bochum-Hofstede', 'Riemker Str. 4 , 44809  Bochum', '51.5087', '7.191661', 771632, image, 771741, false, false, 'Bochum-Hofstede/Bochum-Hofstede'],  
		 //
		 ['Essen-Rellinghausen', 'Frankenstr. 58, 45134  Essen', '51.427799', '7.049422', 771632, image, 771742, false, false, 'Essen/Essen-Rellinghausen'],  
		 //
		 ['Essen-Kettwig', 'Im Teelbruch 105, 45219 Essen', '51.380153', '6.936986', 771632, image, 771743, false, false, 'Essen/Essen-Kettwig'],  
		 //
		 ['Essen-Altenessen', 'Gladbecker Str. 399, 45326  Essen', '51.485733', '6.998832', 771632, image, 771745, false, false, 'Essen/Essen-Altenessen'],  
		 //
		 ['Essen-Borbeck', 'Aktienstr. 10, 45359  Essen', '51.461686', '6.930044', 771632, image, 771746, false, false, 'Essen/Essen-Borbeck'],  
		 //
		 ['Hattingen', 'Am Büchsenschütz 10, 45527  Hattingen', '51.408048', '7.196098', 771632, image, 771748, false, false, 'Hattingen/Hattingen'],  
		 //
		 ['Recklinghausen', 'Herner Str. 378, 45659  Recklinghausen', '51.583771', '7.211832', 771632, image, 771750, false, false, 'Recklinghausen/Recklinghausen'],  
		 //
		 ['Gelsenkirchen', 'Lockhofstr. 2, 45881  Gelsenkirchen', '51.522364', '7.075264', 771632, image, 771752, false, false, 'Gelsenkirchen/Gelsenkirchen'],  
		 //
		 ['Bad Kissingen', 'Steubenstraße/Ecke Kasernenstraße, 97688 Bad Kissingen', '50.209889', '10.08253', 771632, image, 771763, false, false, 'Bad-Kissingen/Bad-Kissingen'],  
		 //
		 ['Osnabrück', 'Hansastr. 81, 49090 Osnabrück', '52.291355', '8.036568', 771632, image, 771765, false, false, 'Osnabrueck/Osnabrueck'],  
		 //
		 ['Borken (Hessen)', 'Alfred-Nobel-Str. 1, 34582 Borken (Hessen)', '51.052784', '9.269907', 771632, image, 771767, false, false, 'Borken/Borken-Hessen'],  
		 //
		 ['Groß-Umstadt', 'Georg-August-Zinn-Str. 92, 64823  Groß-Umstadt', '49.870826', '8.917851', 771632, image, 771769, false, false, 'Gross-Umstadt/Gross-Umstadt'],  
		 //
		 ['Ahrensfelde-Blumberg', 'Möbel-Hübner-Straße 7, 16356  Ahrensfelde-Blumberg', '52.600471', '13.602787', 771632, image, 771772, false, false, 'Ahrensfelde-Blumberg/Ahrensfelde-Blumberg'],  
		 //
		 ['Schwielowsee', 'Hauffstr. 41, 14548 Schwielowsee', '52.363452', '12.967241', 771632, image, 771774, false, false, 'Schwielowsee/Schwielowsee'],  
		 //
		 ['Brandenburg', 'Upstallstr. 3, 14772  Brandenburg', '52.430515', '12.550216', 771632, image, 771776, false, false, 'Brandenburg/Brandenburg'],  
		 //
		 ['Falkensee', 'Spandauer Str. 109, 14612  Falkensee', '52.560514', '13.124665', 771632, image, 771778, false, false, 'Falkensee/Falkensee'],  
		 //
		 ['Deulowitz/Guben', 'Gewerbestr. 32, 03172  Deulowitz/Guben', '51.95254', '14.660255', 771632, image, 771780, false, false, 'DeulowitzGuben/DeulowitzGuben'],  
		 //
		 ['Dahlwitz-Hoppegarten', 'Handwerker Str. 34-40, 15366  Dahlwitz-Hoppegarten', '52.50486', '13.633324', 771632, image, 771782, false, false, 'Dahlwitz-Hoppegarten/Dahlwitz-Hoppegarten'],  
		 //
		 ['Hennigsdorf', 'Veltener Str., 16761  Hennigsdorf', '52.652454', '13.205093', 771632, image, 771784, false, false, 'Hennigsdorf/Hennigsdorf'],  
		 //
		 ['Potsdam', 'Beetzweg/Fritz-Zubeil-Straße, 14482  Potsdam', '52.37863816394399', '13.105659484863281', 771632, image, 771786, false, false, 'Potsdam/Potsdam'],  
		 //
		 ['Berlin-Biesdorf', 'Alt Biesdorf 38, 12683  Berlin', '52.505655847468496', '13.566248416900635', 771632, image, 771788, false, false, 'Berlin/Berlin-Biesdorf'],  
		 //
		 ['Berlin-Hohenschönhausen', 'Ferdinand-Schultze-Str. 106, 13055  Berlin', '52.543853', '13.508178', 771632, image, 771789, false, false, 'Berlin/Berlin-Hohenschoenhausen'],  
		 //
		 ['Berlin-Weißensee', 'Roelckestr. 108, 13086  Berlin', '52.56077752418216 ', '13.456728458404541', 771632, image, 771790, false, false, 'Berlin/Berlin-Weissensee'],  
		 //
		 ['Halle', 'Industriestr. 1, 06132  Halle', '51.439849', '11.985166', 771632, image, 771792, false, false, 'Halle/Halle'],  
		 //
		 ['Lutherstadt-Eisleben', 'An der Zolltafel 3-4, 06295  Lutherstadt-Eisleben', '51.513304', '11.569944', 771632, image, 771795, false, false, 'Lutherstadt-Eisleben/Lutherstadt-Eisleben'],  
		 //
		 ['Aschersleben', 'Güstener Str. 19c, 06449  Aschersleben', '51.765301', '11.475777', 771632, image, 771797, false, false, 'Aschersleben/Aschersleben'],  
		 //
		 ['Quedlinburg', 'Magdeburger Str. 15, 06484  Quedlinburg', '51.79175', '11.172177', 771632, image, 771799, false, false, 'Quedlinburg/Quedlinburg'],  
		 //
		 ['Zeitz', 'Weißenfelser Straße, 06712  Zeitz', '51.07014', '12.12081', 771632, image, 771801, false, false, 'Zeitz/Zeitz'],  
		 //
		 ['Halberstadt', 'Quedlinburger Str. 101, 38820  Halberstadt', '51.889237', '11.06409', 771632, image, 771803, false, false, 'Halberstadt/Halberstadt'],  
		 //
		 ['Magdeburg', 'Siedlerweg 9, 39124  Magdeburg', '52.153041', '11.629601', 771632, image, 771805, false, false, 'Magdeburg/Magdeburg'],  
		 //
		 ['Staßfurt', 'Förderstedter Straße, 39418  Staßfurt', '51.860775', '11.592887', 771632, image, 771807, false, false, 'Stassfurt/Stassfurt'],  
		 //
		 ['Stendal', 'Clausewitzstraße, 39576  Stendal', '52.607346', '11.840874', 771632, image, 771809, false, false, 'Stendal/Stendal'],  
		 //
		 ['Rodewisch', 'Lengenfelder Straße, 08228  Rodewisch', '50.540853', '12.395587', 771632, image, 771811, false, false, 'Rodewisch/Rodewisch'],  
		 //
		 ['Zwickau', 'Leipziger Str. 213, 08058  Zwickau', '50.750696', '12.483778', 771632, image, 771814, false, false, 'Zwickau/Zwickau'],  
		 //
		 ['Leipzig', 'Hallesche Str. 214, 04159  Leipzig', '51.385178', '12.265097', 771632, image, 771816, false, false, 'Leipzig/Leipzig'],  
		 //
		 ['Gütersloh', 'Am Anger 43 a, 33332 Gütersloh', '51.901509', '8.40491', 771632, image, 771818, false, false, 'Guetersloh/Guetersloh'],  
		 //
		 ['Chemnitz-Adelsberg', 'Zschopauer Str. 273, 09126  Chemnitz', '50.814732', '12.954285', 771632, image, 771819, false, false, 'Chemnitz/Chemnitz-Adelsberg'],  
		 //
		 ['Chemnitz-Alt Chemnitz', 'Werner-Seelenbinder-Str. 5, 09120  Chemnitz', '50.80379', '12.916965', 771632, image, 771820, false, false, 'Chemnitz/Chemnitz-Alt-Chemnitz'],  
		 //
		 ['Freiberg', 'Dresdner Str. 52, 09599  Freiberg', '50.914142', '13.362609', 771632, image, 771823, false, false, 'Freiberg/Freiberg'],  
		 //
		 ['Bünde', 'Herforder Str. 180, 32257 Bünde', '52.182291', '8.606355', 771632, image, 771825, false, false, 'Buende/Buende'],  
		 //
		 ['Delitzsch', 'Leipziger Str. 28, 04509  Delitzsch', '51.513721', '12.336385', 771632, image, 771826, false, false, 'Delitzsch/Delitzsch'],  
		 //
		 ['Leimbach-Kaiseroda / Bad Salzungen', 'Schulstraße 34, 36433  Leimbach-Kaiseroda / Bad Salzungen', '50.819192', '10.181643', 771632, image, 771828, false, false, 'Leimbach-Kaiseroda/Leimbach-Kaiseroda--Bad-Salzungen'],  
		 //
		 ['Arnstadt', 'Ichtershäuser Str. 51, 99310  Arnstadt', '50.848591', '10.954784', 771632, image, 771830, false, false, 'Arnstadt/Arnstadt'],  
		 //
		 ['Schmalkalden', 'Am Bad 6, 98574  Schmalkalden', '50.721539', '10.44347', 771632, image, 771832, false, false, 'Schmalkalden/Schmalkalden'],  
		 //
		 ['Nordhausen', 'An der Helme, 99734 Nordhausen', '51.473044', '10.80767', 771632, image, 771834, false, false, 'Nordhausen--OT-Sundhausen/Nordhausen'],  
		 //
		 ['Greiz', 'Plauensche Str. 1c, 07973  Greiz', '50.640788', '12.192677', 771632, image, 771836, false, false, 'Greiz/Greiz'],  
		 //
		 ['Monheim', 'Baumberger Chaussee/Benzstr. 5, 40789 Monheim', '51.104676', '6.898168', 771632, image, 771838, false, false, 'Monheim/Monheim'],  
		 //
		 ['Mettmann', 'Düsseldorfer Str. 181-187, 40822 Mettmann', '51.253689', '6.960069', 771632, image, 771840, false, false, 'Mettmann/Mettmann'],  
		 //
		 ['Wuppertal', 'Uellendahler Str. 212-226, 42109  Wuppertal', '51.274737', '7.151793', 771632, image, 771842, false, false, 'Wuppertal/Wuppertal'],  
		 //
		 ['Oberhausen', 'Lindnerstr. 137, 46149 Oberhausen', '51.49371', '6.835072', 771632, image, 771844, false, false, 'Oberhausen/Oberhausen'],  
		 //
		 ['Eschborn', 'Frankfurter Str. 2-8, 65760  Eschborn', '50.130758', '8.565985', 771632, image, 771845, false, false, 'Eschborn/Eschborn'],  
		 //
		 ['Duisburg', 'Westender Str. 47, 47138  Duisburg', '51.465967', '6.789958', 771632, image, 771847, false, false, 'Duisburg/Duisburg'],  
		 //
		 ['Dorsten', 'Halterner Str. 45, 46284 Dorsten', '51.670161', '6.975389', 771632, image, 771849, false, false, 'Dorsten/Dorsten'],  
		 //
		 ['Ahaus', 'Wüllener Straße, 48683 Ahaus', '52.069173', '6.985910', 771632, image, 771851, false, false, 'Ahaus/Ahaus'],  
		 //
		 ['St. Augustin', 'Marie-Curie-Straße, 53757 St. Augustin', '50.793031', '7.175847', 771632, image, 771853, false, false, 'St-Augustin/St-Augustin'],  
		 //
		 ['Bonn-Duisdorf', 'Rochusstraße 344, 53123 Bonn', '50.714842', '7.037536', 771632, image, 771854, false, false, 'Bonn/Bonn-Duisdorf'],  
		 //
		 ['Bonn-Beuel', 'Königswinterer Str. 89, 53227 Bonn-Beuel', '50.734643', '7.131902', 771632, image, 771856, false, false, 'Bonn/Bonn-Beuel'],  
		 //
		 ['Gronau', 'Maybachstr. 2/Borgwardstraße, 48599 Gronau', '52.200928', '7.068864', 771632, image, 771858, false, false, 'Gronau/Gronau'],  
		 //
		 ['Steinfurt', 'Max-Planck-Straße 2, 48565 Steinfurt', '52.11861', '7.392612', 771632, image, 771860, false, false, 'Steinfurt/Steinfurt'],  
		 //
		 ['Hagen', 'Schwerter Str. 180, 58099 Hagen', '51.399103', '7.474414', 771632, image, 771862, false, false, 'Hagen/Hagen'],  
		 //
		 ['Iserlohn', 'Baarstr. 114, 58636 Iserlohn', '51.395609', '7.69243', 771632, image, 771864, false, false, 'Iserlohn/Iserlohn'],  
		 //
		 ['Lüdenscheid', 'Hohe Steinert 6 , 58509 Lüdenscheid', '51.22771', '7.605633', 771632, image, 771866, false, false, 'Luedenscheid/Luedenscheid'],  
		 //
		 ['Hamm', 'Östingstraße 3, 59063  Hamm', '51.668224', '7.80946', 771632, image, 771868, false, false, 'Hamm/Hamm'],  
		 //
		 ['Ennepetal', 'Neustr. 2, 58256 Ennepetal', '51.297451', '7.357615', 771632, image, 771870, false, false, 'Ennepetal/Ennepetal'],  
		 //
		 ['Menden', 'Hönnenwerth, 58706 Menden', '51.442056', '7.786473', 771632, image, 771872, false, false, 'Menden/Menden'],  
		 //
		 ['Beckum', 'Grevenbrede 12/ Neubeckumer Straße, 59269 Beckum ', '51.774639', '8.037737', 771632, image, 771874, false, false, 'Beckum/Beckum'],  
		 //
		 ['Werl', 'Soester Straße 57, 59457 Werl', '51.549529', '7.917236', 771632, image, 771876, false, false, 'Werl/Werl'],  
		 //
		 ['Berlin-Friedrichshain', 'An der Ostbahn 3, 10243 Berlin', '52.51015', '13.437839', 771632, image, 771888, false, false, 'Berlin/Berlin-Friedrichshain'],  
		 //
		 ['Dortmund Zentrale', 'Zeche Oespel 15, 44149 Dortmund', '51.490158', '7.368709', 771632, image, 772144, false, false, 'Dortmund-Zentrale/Dortmund-Zentrale'],  
		 //
		 ['Langenhagen bei Hannover', 'Westfalenstraße 40-44, 30853 Langenhagen bei Hannover', '52.4433', '9.722705', 771632, image, 772354, false, false, 'Langenhagen-bei-Hannover/Langenhagen-bei-Hannover'],  
		 //
		 ['Kreuztal', 'Siegener Straße 210, 57223 Kreuztal', '50.928474', '8.009891', 771632, image, 772356, false, false, 'Kreuztal/Kreuztal'],  
		 //
		 ['Nordrhein Westfalen/ Niedersachsen', 'Borussiastr. 112, 44149 Dortmund ', '51.491565', '7.371756', 771632, image, 772358, false, false, 'Nordrhein-Westfalen-Niedersachsen/Nordrhein-Westfalen-Niedersachsen'],  
		 //
		 ['Bad Nenndorf', 'Bückenthaler Str. 2, 31542 Bad Nenndorf', '52.334789', '9.400954', 771632, image, 772511, false, false, 'Bad-Nenndorf/Bad-Nenndorf'],  
		 //
		 ['Wolfenbüttel', 'Schweigerstr. 13, 38302 Wolfenbüttel', '52.164181', '10.572596', 771632, image, 772513, false, false, 'Wolfenbuettel/Wolfenbuettel'],  
		 //
		 ['Berlin-Tiergarten', 'Ellen-Epstein-Str. 1, 10559 Berlin', '52.53632', '13.35499', 771632, image, 772580, false, false, 'Berlin/Berlin-Tiergarten'],  
		 //
		 ['Berlin-Tempelhof', 'Attilastr. 52, 12105 Berlin', '52.448736', '13.364792', 771632, image, 772614, false, false, 'Berlin/Berlin-Tempelhof'],  
		 //
		 ['Berlin-Köpenick', 'Salvador-Allende-Str. 115, 12559 Berlin', '52.451210360406684 ', '13.59208345413208', 771632, image, 772617, false, false, 'Berlin/Berlin-Koepenick'],  
		 //
		 ['Rheda-Wiedenbrück', 'Herzebrocker Straße 25-27, 33378 Rheda-Wiedenbrück', '51.859489', '8.279662', 771632, image, 772743, false, false, 'Rheda-Wiedenbrueck/Rheda-Wiedenbrueck'],  
		 //
		 ['Mechernich-Kommern', 'Monzenbend 3, 53894 Mechernich-Kommern', '50.61931458868814', '6.6548073291778564', 771632, image, 772745, false, false, 'Mechernich-Kommern/Mechernich-Kommern'],  
		 //
		 ['Dillenburg', 'Hirschwiese 1, 35683 Dillenburg', '50.767137', '8.288577', 771632, image, 878683, false, false, 'Dillenburg/Dillenburg'],  
		 //
		 ['Dortmund-Hacheney', 'Zillestraße 71, 44265 Dortmund', '51.473645', '7.487053', 771632, image, 879265, false, false, 'Dortmund/Dortmund-Hacheney'],  
		 //
		 ['Hallstadt', 'Michelinstraße 146, 96103 Hallstadt', '49.922742', '10.89323', 771632, image, 879451, false, false, 'Hallstadt/Hallstadt'],  
		 //
		 ['Essen Frillendorf', 'Frillendorfer Straße 130, 45139 Essen', '51.458727', '7.03831', 771632, image, 883895, false, false, 'Essen/Essen-Frillendorf'],  
		 //
		 ['Selm', 'Lüdinghausener Straße, 59379 Selm', '51.710095', '7.456782', 771632, image, 885240, false, false, 'Selm/Selm'],  
		 //
		 ['Berlin-Kreuzberg', 'Yorckstraße 38-39 , 10965 Berlin', '52.493357', '13.370606', 771632, image, 888385, false, false, 'Berlin/Berlin-Kreuzberg']  
		 //
		 //    
    ]; // loc
    
    initMap = function() {
	   var pos = new google.maps.LatLng(51.37178, 8.964844);
	   var options = { zoom: 6, center: pos, mapTypeId: google.maps.MapTypeId.ROADMAP, scaleControl: true, navigationControl: true, navigationControlOptions: { style:google.maps.NavigationControlStyle.ZOOM_PAN } };
	   map = new google.maps.Map(UO("gmap"), options);
	   
	  if( loc.length > 0 ){
		 setTimeout('setMarkers(map, loc, \'/cms/de/Filialen\')', 1000);
	  }
    }
}
	    