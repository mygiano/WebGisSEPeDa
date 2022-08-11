ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([125.285120, 2.712911, 125.436995, 2.781996]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA</a>',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKecamatan_4 = new ol.format.GeoJSON();
var features_BatasKecamatan_4 = format_BatasKecamatan_4.readFeatures(json_BatasKecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasKecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_4.addFeatures(features_BatasKecamatan_4);
var lyr_BatasKecamatan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_4, 
                style: style_BatasKecamatan_4,
                interactive: true,
    title: 'Batas Kecamatan<br />\
    <img src="styles/legend/BatasKecamatan_4_0.png" /> Biaro<br />\
    <img src="styles/legend/BatasKecamatan_4_1.png" /> Siau Barat<br />\
    <img src="styles/legend/BatasKecamatan_4_2.png" /> Siau Barat Selatan<br />\
    <img src="styles/legend/BatasKecamatan_4_3.png" /> Siau Barat Utara<br />\
    <img src="styles/legend/BatasKecamatan_4_4.png" /> Siau Tengah<br />\
    <img src="styles/legend/BatasKecamatan_4_5.png" /> Siau Timur<br />\
    <img src="styles/legend/BatasKecamatan_4_6.png" /> Siau Timur Selatan<br />\
    <img src="styles/legend/BatasKecamatan_4_7.png" /> Tagulandang<br />\
    <img src="styles/legend/BatasKecamatan_4_8.png" /> Tagulandang Selatan<br />\
    <img src="styles/legend/BatasKecamatan_4_9.png" /> Tagulandang Utara<br />\
    <img src="styles/legend/BatasKecamatan_4_10.png" /> <br />'
        });
var format_BatasDesa_5 = new ol.format.GeoJSON();
var features_BatasDesa_5 = format_BatasDesa_5.readFeatures(json_BatasDesa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasDesa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_5.addFeatures(features_BatasDesa_5);
var lyr_BatasDesa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesa_5, 
                style: style_BatasDesa_5,
                interactive: true,
    title: 'Batas Desa<br />\
    <img src="styles/legend/BatasDesa_5_0.png" /> Biaro<br />\
    <img src="styles/legend/BatasDesa_5_1.png" /> Siau Barat<br />\
    <img src="styles/legend/BatasDesa_5_2.png" /> Siau Barat Selatan<br />\
    <img src="styles/legend/BatasDesa_5_3.png" /> Siau Barat Utara<br />\
    <img src="styles/legend/BatasDesa_5_4.png" /> Siau Tengah<br />\
    <img src="styles/legend/BatasDesa_5_5.png" /> Siau Timur<br />\
    <img src="styles/legend/BatasDesa_5_6.png" /> Siau Timur Selatan<br />\
    <img src="styles/legend/BatasDesa_5_7.png" /> Tagulandang<br />\
    <img src="styles/legend/BatasDesa_5_8.png" /> Tagulandang Selatan<br />\
    <img src="styles/legend/BatasDesa_5_9.png" /> Tagulandang Utara<br />\
    <img src="styles/legend/BatasDesa_5_10.png" /> <br />'
        });
var format_Titik_SarKes_6 = new ol.format.GeoJSON();
var features_Titik_SarKes_6 = format_Titik_SarKes_6.readFeatures(json_Titik_SarKes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Titik_SarKes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_SarKes_6.addFeatures(features_Titik_SarKes_6);
var lyr_Titik_SarKes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_SarKes_6, 
                style: style_Titik_SarKes_6,
                interactive: true,
                title: '<img src="styles/legend/Titik_SarKes_6.png" /> Titik_SarKes'
            });
var format_Titik_Sekolah_7 = new ol.format.GeoJSON();
var features_Titik_Sekolah_7 = format_Titik_Sekolah_7.readFeatures(json_Titik_Sekolah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Titik_Sekolah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Sekolah_7.addFeatures(features_Titik_Sekolah_7);
var lyr_Titik_Sekolah_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Sekolah_7, 
                style: style_Titik_Sekolah_7,
                interactive: true,
    title: 'Titik_Sekolah<br />\
    <img src="styles/legend/Titik_Sekolah_7_0.png" /> SD<br />\
    <img src="styles/legend/Titik_Sekolah_7_1.png" /> SMP<br />\
    <img src="styles/legend/Titik_Sekolah_7_2.png" /> Sekolah<br />'
        });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_StamenWatercolor_0,lyr_OpenTopoMap_1,lyr_Voyagernolabelsretina_2,lyr_GoogleSatelliteHybrid_3,],
                                title: "Basemap"});

lyr_StamenWatercolor_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Voyagernolabelsretina_2.setVisible(true);lyr_GoogleSatelliteHybrid_3.setVisible(true);lyr_BatasKecamatan_4.setVisible(true);lyr_BatasDesa_5.setVisible(true);lyr_Titik_SarKes_6.setVisible(true);lyr_Titik_Sekolah_7.setVisible(true);
var layersList = [group_Basemap,lyr_BatasKecamatan_4,lyr_BatasDesa_5,lyr_Titik_SarKes_6,lyr_Titik_Sekolah_7];
lyr_BatasKecamatan_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'JmlhSD': 'JmlhSD', 'JmlhSMP': 'JmlhSMP', 'JmlhSekolah': 'JmlhSekolah', });
lyr_BatasDesa_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'DESKEL': 'DESKEL', 'JmlhSD': 'JmlhSD', 'JmlhSMP': 'JmlhSMP', 'JmlhSekolah': 'JmlhSekolah', });
lyr_Titik_SarKes_6.set('fieldAliases', {'fid': 'fid', 'Nama_SarKes': 'Nama_SarKes', });
lyr_Titik_Sekolah_7.set('fieldAliases', {'fid': 'fid', 'Nama_Sekolah': 'Nama Sekolah', 'NPSN': 'NPSN', 'Nama_KepSek': 'Nama_KepSek', 'Alamat_Sekolah': 'Alamat_Sekolah', 'Tahun_Berdiri': 'Tahun_Berdiri', 'Status_Akreditasi': 'Status_Akreditasi', 'Ruang_Guru': 'Ruang_Guru', 'Ruang_Pimpinan': 'Ruang_Pimpinan', 'Lab_IPA': 'Lab_IPA', 'Perpus': 'Perpus', 'UKS': 'UKS', 'Ruang_AdminTU': 'Ruang_AdminTU', 'Ruang_Sirkulasi': 'Ruang_Sirkulasi', 'Ruang_Ibadah': 'Ruang_Ibadah', 'Jamban_WC': 'Jamban_WC', 'Area_Olahraga': 'Area_Olahraga', 'Gudang': 'Gudang', 'Kantin': 'Kantin', 'Tempat_Parkir': 'Tempat_Parkir', 'Ruang_Kelas': 'Ruang_Kelas', 'Lemari': 'Lemari', 'Papan_Pajang': 'Papan_Pajang', 'Papan_Tulis': 'Papan_Tulis', 'Tempat_Sampah': 'Tempat_Sampah', 'Tempat_Cuci_Tangan': 'Tempat_Cuci_Tangan', 'Jam_Dinding': 'Jam_Dinding', 'Kotak_Kontak': 'Kotak_Kontak', 'Meteran_Listrik': 'Meteran_Listrik', 'Rumah_Dinas_Guru': 'Rumah_Dinas_Guru', 'Pagar_Keliling': 'Pagar_Keliling', 'Lapangan_Upacara': 'Lapangan_Upacara', 'Jumlah_Kursi_Siswa': 'Jumlah_Kursi_Siswa', 'Jumlah_Meja_Siswa': 'Jumlah_Meja_Siswa', 'Jumlah_Siswa': 'Jumlah Siswa', 'Jumlah_Kursi_Guru': 'Jumlah_Kursi_Guru', 'Jumlah_Meja_Guru': 'Jumlah_Meja_Guru', 'Jumlah_Guru': 'Jumlah Pengajar', 'GuruAgamaBP_SMA': 'GuruAgamaBP_SMA', 'GuruAgamaBP_D1': 'GuruAgamaBP_D1', 'GuruAgamaBP_D2': 'GuruAgamaBP_D2', 'GuruAgamaBP_D3': 'GuruAgamaBP_D3', 'GuruAgamaBP_S1': 'GuruAgamaBP_S1', 'GuruAgamaBP_S2': 'GuruAgamaBP_S2', 'GuruPPKN_SMA': 'GuruPPKN_SMA', 'GuruPPKN_D1': 'GuruPPKN_D1', 'GuruPPKN_D2': 'GuruPPKN_D2', 'GuruPPKN_D3': 'GuruPPKN_D3', 'GuruPPKN_S1': 'GuruPPKN_S1', 'GuruPPKN_S2': 'GuruPPKN_S2', 'GuruIndo_SMA': 'GuruIndo_SMA', 'GuruIndo_D1': 'GuruIndo_D1', 'GuruIndo_D2': 'GuruIndo_D2', 'GuruIndo_D3': 'GuruIndo_D3', 'GuruIndo_S1': 'GuruIndo_S1', 'GuruIndo_S2': 'GuruIndo_S2', 'GuruMTK_SMA': 'GuruMTK_SMA', 'GuruMTK_D1': 'GuruMTK_D1', 'GuruMTK_D2': 'GuruMTK_D2', 'GuruMTK_D3': 'GuruMTK_D3', 'GuruMTK_S1': 'GuruMTK_S1', 'GuruMTK_S2': 'GuruMTK_S2', 'GuruIPA_SMA': 'GuruIPA_SMA', 'GuruIPA_D1': 'GuruIPA_D1', 'GuruIPA_D2': 'GuruIPA_D2', 'GuruIPA_D3': 'GuruIPA_D3', 'GuruIPA_S1': 'GuruIPA_S1', 'GuruIPA_S2': 'GuruIPA_S2', 'GuruIPS_SMA': 'GuruIPS_SMA', 'GuruIPS_D1': 'GuruIPS_D1', 'GuruIPS_D2': 'GuruIPS_D2', 'GuruIPS_D3': 'GuruIPS_D3', 'GuruIPS_S1': 'GuruIPS_S1', 'GuruIPS_S2': 'GuruIPS_S2', 'GuruIng_SMA': 'GuruIng_SMA', 'GuruIng_D1': 'GuruIng_D1', 'GuruIng_D2': 'GuruIng_D2', 'GuruIng_D3': 'GuruIng_D3', 'GuruIng_S1': 'GuruIng_S1', 'GuruIng_S2': 'GuruIng_S2', 'GuruSeni_SMA': 'GuruSeni_SMA', 'GuruSeni_D1': 'GuruSeni_D1', 'GuruSeni_D2': 'GuruSeni_D2', 'GuruSeni_D3': 'GuruSeni_D3', 'GuruSeni_S1': 'GuruSeni_S1', 'GuruSeni_S2': 'GuruSeni_S2', 'GuruPJS_SMA': 'GuruPJS_SMA', 'GuruPJS_D1': 'GuruPJS_D1', 'GuruPJS_D2': 'GuruPJS_D2', 'GuruPJS_D3': 'GuruPJS_D3', 'GuruPJS_S1': 'GuruPJS_S1', 'GuruPJS_S2': 'GuruPJS_S2', 'GuruPraKarya_SMA': 'GuruPraKarya_SMA', 'GuruPraKarya_D1': 'GuruPraKarya_D1', 'GuruPraKarya_D2': 'GuruPraKarya_D2', 'GuruPraKarya_D3': 'GuruPraKarya_D3', 'GuruPraKarya_S1': 'GuruPraKarya_S1', 'GuruPraKarya_S2': 'GuruPraKarya_S2', 'GuruLain_SMA': 'GuruLain_SMA', 'GuruLain_D1': 'GuruLain_D1', 'GuruLain_D2': 'GuruLain_D2', 'GuruLain_D3': 'GuruLain_D3', 'GuruLain_S1': 'GuruLain_S1', 'GuruLain_S2': 'GuruLain_S2', 'Jenjang_Pendidikan': 'Jenjang', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'FotoA': 'FotoA', 'FotoB': 'FotoB', 'FotoC': 'FotoC', });
lyr_BatasKecamatan_4.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'JmlhSD': 'TextEdit', 'JmlhSMP': 'TextEdit', 'JmlhSekolah': 'TextEdit', });
lyr_BatasDesa_5.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'DESKEL': 'Hidden', 'JmlhSD': 'TextEdit', 'JmlhSMP': 'TextEdit', 'JmlhSekolah': 'TextEdit', });
lyr_Titik_SarKes_6.set('fieldImages', {'fid': '', 'Nama_SarKes': '', });
lyr_Titik_Sekolah_7.set('fieldImages', {'fid': 'Hidden', 'Nama_Sekolah': 'TextEdit', 'NPSN': 'TextEdit', 'Nama_KepSek': 'TextEdit', 'Alamat_Sekolah': 'TextEdit', 'Tahun_Berdiri': 'DateTime', 'Status_Akreditasi': 'ValueMap', 'Ruang_Guru': 'Hidden', 'Ruang_Pimpinan': 'Hidden', 'Lab_IPA': 'Hidden', 'Perpus': 'Hidden', 'UKS': 'Hidden', 'Ruang_AdminTU': 'Hidden', 'Ruang_Sirkulasi': 'Hidden', 'Ruang_Ibadah': 'Hidden', 'Jamban_WC': 'Hidden', 'Area_Olahraga': 'Hidden', 'Gudang': 'Hidden', 'Kantin': 'Hidden', 'Tempat_Parkir': 'Hidden', 'Ruang_Kelas': 'Hidden', 'Lemari': 'Hidden', 'Papan_Pajang': 'Hidden', 'Papan_Tulis': 'Hidden', 'Tempat_Sampah': 'Hidden', 'Tempat_Cuci_Tangan': 'Hidden', 'Jam_Dinding': 'Hidden', 'Kotak_Kontak': 'Hidden', 'Meteran_Listrik': 'Hidden', 'Rumah_Dinas_Guru': 'Hidden', 'Pagar_Keliling': 'Hidden', 'Lapangan_Upacara': 'Hidden', 'Jumlah_Kursi_Siswa': 'Hidden', 'Jumlah_Meja_Siswa': 'Hidden', 'Jumlah_Siswa': 'TextEdit', 'Jumlah_Kursi_Guru': 'Hidden', 'Jumlah_Meja_Guru': 'Hidden', 'Jumlah_Guru': 'TextEdit', 'GuruAgamaBP_SMA': 'Hidden', 'GuruAgamaBP_D1': 'Hidden', 'GuruAgamaBP_D2': 'Hidden', 'GuruAgamaBP_D3': 'Hidden', 'GuruAgamaBP_S1': 'Hidden', 'GuruAgamaBP_S2': 'Hidden', 'GuruPPKN_SMA': 'Hidden', 'GuruPPKN_D1': 'Hidden', 'GuruPPKN_D2': 'Hidden', 'GuruPPKN_D3': 'Hidden', 'GuruPPKN_S1': 'Hidden', 'GuruPPKN_S2': 'Hidden', 'GuruIndo_SMA': 'Hidden', 'GuruIndo_D1': 'Hidden', 'GuruIndo_D2': 'Hidden', 'GuruIndo_D3': 'Hidden', 'GuruIndo_S1': 'Hidden', 'GuruIndo_S2': 'Hidden', 'GuruMTK_SMA': 'Hidden', 'GuruMTK_D1': 'Hidden', 'GuruMTK_D2': 'Hidden', 'GuruMTK_D3': 'Hidden', 'GuruMTK_S1': 'Hidden', 'GuruMTK_S2': 'Hidden', 'GuruIPA_SMA': 'Hidden', 'GuruIPA_D1': 'Hidden', 'GuruIPA_D2': 'Hidden', 'GuruIPA_D3': 'Hidden', 'GuruIPA_S1': 'Hidden', 'GuruIPA_S2': 'Hidden', 'GuruIPS_SMA': 'Hidden', 'GuruIPS_D1': 'Hidden', 'GuruIPS_D2': 'Hidden', 'GuruIPS_D3': 'Hidden', 'GuruIPS_S1': 'Hidden', 'GuruIPS_S2': 'Hidden', 'GuruIng_SMA': 'Hidden', 'GuruIng_D1': 'Hidden', 'GuruIng_D2': 'Hidden', 'GuruIng_D3': 'Hidden', 'GuruIng_S1': 'Hidden', 'GuruIng_S2': 'Hidden', 'GuruSeni_SMA': 'Hidden', 'GuruSeni_D1': 'Hidden', 'GuruSeni_D2': 'Hidden', 'GuruSeni_D3': 'Hidden', 'GuruSeni_S1': 'Hidden', 'GuruSeni_S2': 'Hidden', 'GuruPJS_SMA': 'Hidden', 'GuruPJS_D1': 'Hidden', 'GuruPJS_D2': 'Hidden', 'GuruPJS_D3': 'Hidden', 'GuruPJS_S1': 'Hidden', 'GuruPJS_S2': 'Hidden', 'GuruPraKarya_SMA': 'Hidden', 'GuruPraKarya_D1': 'Hidden', 'GuruPraKarya_D2': 'Hidden', 'GuruPraKarya_D3': 'Hidden', 'GuruPraKarya_S1': 'Hidden', 'GuruPraKarya_S2': 'Hidden', 'GuruLain_SMA': 'Hidden', 'GuruLain_D1': 'Hidden', 'GuruLain_D2': 'Hidden', 'GuruLain_D3': 'Hidden', 'GuruLain_S1': 'Hidden', 'GuruLain_S2': 'Hidden', 'Jenjang_Pendidikan': 'ValueMap', 'Desa': 'ValueRelation', 'Kecamatan': 'TextEdit', 'FotoA': 'ExternalResource', 'FotoB': 'ExternalResource', 'FotoC': 'ExternalResource', });
lyr_BatasKecamatan_4.set('fieldLabels', {'WADMKC': 'no label', 'JmlhSD': 'inline label', 'JmlhSMP': 'inline label', 'JmlhSekolah': 'header label', });
lyr_BatasDesa_5.set('fieldLabels', {'WADMKC': 'no label', 'WADMKD': 'no label', 'JmlhSD': 'inline label', 'JmlhSMP': 'inline label', 'JmlhSekolah': 'header label', });
lyr_Titik_SarKes_6.set('fieldLabels', {'fid': 'no label', 'Nama_SarKes': 'no label', });
lyr_Titik_Sekolah_7.set('fieldLabels', {'fid': 'no label', 'Nama_Sekolah': 'header label', 'NPSN': 'no label', 'Nama_KepSek': 'no label', 'Alamat_Sekolah': 'inline label', 'Tahun_Berdiri': 'no label', 'Status_Akreditasi': 'no label', 'Ruang_Guru': 'no label', 'Ruang_Pimpinan': 'no label', 'Lab_IPA': 'no label', 'Perpus': 'no label', 'UKS': 'no label', 'Ruang_AdminTU': 'no label', 'Ruang_Sirkulasi': 'no label', 'Ruang_Ibadah': 'no label', 'Jamban_WC': 'no label', 'Area_Olahraga': 'no label', 'Gudang': 'no label', 'Kantin': 'no label', 'Tempat_Parkir': 'no label', 'Ruang_Kelas': 'no label', 'Lemari': 'no label', 'Papan_Pajang': 'no label', 'Papan_Tulis': 'no label', 'Tempat_Sampah': 'no label', 'Tempat_Cuci_Tangan': 'no label', 'Jam_Dinding': 'no label', 'Kotak_Kontak': 'no label', 'Meteran_Listrik': 'no label', 'Rumah_Dinas_Guru': 'no label', 'Pagar_Keliling': 'no label', 'Lapangan_Upacara': 'no label', 'Jumlah_Kursi_Siswa': 'no label', 'Jumlah_Meja_Siswa': 'no label', 'Jumlah_Siswa': 'no label', 'Jumlah_Kursi_Guru': 'no label', 'Jumlah_Meja_Guru': 'no label', 'Jumlah_Guru': 'no label', 'GuruAgamaBP_SMA': 'no label', 'GuruAgamaBP_D1': 'no label', 'GuruAgamaBP_D2': 'no label', 'GuruAgamaBP_D3': 'no label', 'GuruAgamaBP_S1': 'no label', 'GuruAgamaBP_S2': 'no label', 'GuruPPKN_SMA': 'no label', 'GuruPPKN_D1': 'no label', 'GuruPPKN_D2': 'no label', 'GuruPPKN_D3': 'no label', 'GuruPPKN_S1': 'no label', 'GuruPPKN_S2': 'no label', 'GuruIndo_SMA': 'no label', 'GuruIndo_D1': 'no label', 'GuruIndo_D2': 'no label', 'GuruIndo_D3': 'no label', 'GuruIndo_S1': 'no label', 'GuruIndo_S2': 'no label', 'GuruMTK_SMA': 'no label', 'GuruMTK_D1': 'no label', 'GuruMTK_D2': 'no label', 'GuruMTK_D3': 'no label', 'GuruMTK_S1': 'no label', 'GuruMTK_S2': 'no label', 'GuruIPA_SMA': 'no label', 'GuruIPA_D1': 'no label', 'GuruIPA_D2': 'no label', 'GuruIPA_D3': 'no label', 'GuruIPA_S1': 'no label', 'GuruIPA_S2': 'no label', 'GuruIPS_SMA': 'no label', 'GuruIPS_D1': 'no label', 'GuruIPS_D2': 'no label', 'GuruIPS_D3': 'no label', 'GuruIPS_S1': 'no label', 'GuruIPS_S2': 'no label', 'GuruIng_SMA': 'no label', 'GuruIng_D1': 'no label', 'GuruIng_D2': 'no label', 'GuruIng_D3': 'no label', 'GuruIng_S1': 'no label', 'GuruIng_S2': 'no label', 'GuruSeni_SMA': 'no label', 'GuruSeni_D1': 'no label', 'GuruSeni_D2': 'no label', 'GuruSeni_D3': 'no label', 'GuruSeni_S1': 'no label', 'GuruSeni_S2': 'no label', 'GuruPJS_SMA': 'no label', 'GuruPJS_D1': 'no label', 'GuruPJS_D2': 'no label', 'GuruPJS_D3': 'no label', 'GuruPJS_S1': 'no label', 'GuruPJS_S2': 'no label', 'GuruPraKarya_SMA': 'no label', 'GuruPraKarya_D1': 'no label', 'GuruPraKarya_D2': 'no label', 'GuruPraKarya_D3': 'no label', 'GuruPraKarya_S1': 'no label', 'GuruPraKarya_S2': 'no label', 'GuruLain_SMA': 'no label', 'GuruLain_D1': 'no label', 'GuruLain_D2': 'no label', 'GuruLain_D3': 'no label', 'GuruLain_S1': 'no label', 'GuruLain_S2': 'no label', 'Jenjang_Pendidikan': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'FotoA': 'no label', 'FotoB': 'no label', 'FotoC': 'no label', });
lyr_Titik_Sekolah_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});