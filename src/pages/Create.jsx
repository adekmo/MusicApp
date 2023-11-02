import axios from 'axios';
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [formData, setFormData] = useState({
        nika: '',
        nikk: '',
        nama: '',
        gender: 'Laki-Laki',
        born: null,
        provinsi: 'Banten',
        kota: 'Tangerang Kota',
        kecamatan: 'Cibodas',
        kelurahan: 'Cibodas Baru',
        rt: '',
        alamat: '',
        puskesmas: 'Jalan Baja',
        anakke: '',
        berat: '',
        panjang: '',
        imd: 'Ya',
        kms: 'Ya',
        asieks: 'Umur 0 Bulan',
        vitamina: 'Feb',
        penyerta: 'Ya',
        cacingan: 'Ya',
        kia: '',
        nikot: '',
        nokk: '',
        namaot: '',
        nohp: '',
        asuransi: 'BPJS/JKN',
        airbersih: 'Ya',
        jamban: 'Ya',
        imunisasi: 'Ya',
        merokok: 'Ya',
        kehamilan: 'KEK',
        foto: null,
    });

    // const [nika, setNika] = useState('');
    // const [nikk, setNikk] = useState('');
    // const [nama, setNama] = useState('');
    // const [gender, setGender] = useState('Laki-Laki');
    // const [born, setBorn] = useState(null);
    // const [provinsi, setProvinsi] = useState('Banten');
    // const [kota, setKota] = useState('Tangerang Kota');
    // const [kecamatan, setKecamatan] = useState('Cibodas');
    // const [kelurahan, setKelurahan] = useState('Cibodas Baru');
    // const [rt, setRt] = useState('');
    // const [alamat, setAlamat] = useState('');
    // const [puskesmas, setPuskesmas] = useState('Jalan Baja');
    // const [anakke, setAnakke] = useState('');
    // const [berat, setBerat] = useState('');
    // const [panjang, setPanjang] = useState('');
    // const [imd, setImd] = useState('Ya');
    // const [kms, setKms] = useState('Ya');
    // const [asieks, setAsieks] = useState('Umur 0 Bulan');
    // const [vitamina, setVitamina] = useState('Feb');
    // const [penyerta, setPenyerta] = useState('Ya');
    // const [cacingan, setCacingan] = useState('Ya');
    // const [kia, setKia] = useState('');
    // const [foto, setFoto] = useState(null);
    // const [nikot, setNikot] = useState('');
    // const [nokk, setNokk] = useState('');
    // const [namaot, setNamaot] = useState('');
    // const [nohp, setNohp] = useState('');
    // const [asuransi, setAsuransi] = useState('BPJS/JKN');
    // const [airbersih, setAribersih] = useState('Ya');
    // const [jamban, setJamban] = useState('Ya');
    // const [imunisasi, setImunisasi] = useState('Ya');
    // const [merokok, setMerokok] = useState('Ya');
    // const [kehamilan, setKehamilan] = useState('KEK');
    // const [isPending, setIsPending] = useState(false);
    // const [error, setError] = useState('');

    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    // const handleDateChane = (date) => {
    //     setBorn(date);
    // }

    const handleDateChane = (date) => {
        setFormData({ ...formData, born: date });
    };

    // 

    const handleChangeFile = (event) => {
        const file = event.target.files[0];

        if (file) {
            const allowFormats = ['image/jpeg', 'image/png'];
            const maxSize = 5 * 1024 * 1024;

            if (allowFormats.includes(file.type) && file.size <= maxSize) {
                setFormData({ ...formData, foto: file });
                setError('');
            } else {
                setFormData({ ...formData, foto: null });
                setError('File harus berformat JPG atau PNG dan ukuran maksimal 5MB.');
            }
        } else {
            setFormData({ ...formData, foto: null });
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // const formDataToSend = new FormData();
        // formDataToSend.append('foto', foto); // Menambahkan foto ke formData
        // formDataToSend.append('formData', JSON.stringify(formData)); // Menambahkan data JSON sebagai string

        setIsPending(true);
        fetch('http://localhost:8000/laksa', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(() => {
            console.log('Data Ditambahkan');
            setIsPending(false);
            navigate("/");
        })

        // try {
        //     const response = await axios.post('http://localhost:8000/laksa', formDataToSend, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data', // Wajib set header ini
        //         },
        //     });

        //     if (response.status === 200) {
        //         alert('Data berhasil disimpan');
        //         navigate('/');
        //     } else {
        //         console.error('Unexpected response:', response);
        //         alert('Terjadi kesalahan saat menyimpan data');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('Terjadi kesalahan saat menyimpan data');
        // }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsPending(true);

    //     const formDataToSend = new FormData();
    //     for (const key in formData) {
    //         if (key === 'foto') {
    //             formDataToSend.append('foto', formData[key]);
    //         } else {
    //             formDataToSend.append(key, formData[key]);
    //         }
    //     }

    //     try {
    //         const response = await axios.post('http://localhost:8000/laksa', formDataToSend, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });

    //         if (response.status === 200) {
    //             alert('Data berhasil disimpan');
    //             navigate('/');
    //         } else {
    //             console.error('Unexpected response:', response);
    //             alert('Terjadi kesalahan saat menyimpan data');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Terjadi kesalahan saat menyimpan data');
    //     } finally {
    //         setIsPending(false);
    //     }
    // };

    return (
        <div className="w-full mt-4 mb-10 bg-slate-100 p-10">
            <h2 className="font-bold text-3xl text-[#000000] text-left">Tambah Data Anak</h2>
            <form onSubmit={handleSubmit} className="bg-white p-5">

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">NIK Anak</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text"
                                required
                                value={formData.nika}
                                onChange={(e) => setFormData({...formData, nika : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900" />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">NIK KK</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.nikk}
                                onChange={(e) => setFormData({...formData, nikk : e.target.value})}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-lg text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">Nama Lengkap</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.nama}
                                onChange={(e) => setFormData({...formData, nama : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Jenis Kelamin</label>
                        <select
                            value={formData.gender}
                            onChange={(e) => setFormData({...formData, gender : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                        <DatePicker
                            selected={formData.born}
                            onChange={handleDateChane}
                            dateFormat="dd/MM/yyyy"
                            className="block flex-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-transparent cursor-pointer py-1.5 pl-1"
                        />
                    </div>
                    <div className="sm:col-span-1">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Provinsi</label>
                        <select
                            value={formData.provinsi}
                            onChange={(e) => setFormData({...formData, provinsi : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Banten">Banten</option>
                        </select>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Kota</label>
                        <select
                            value={formData.kota}
                            onChange={(e) => setFormData({...formData, kota : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Tangerang Kota">Tangerang Kota</option>
                        </select>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Kecamatan</label>
                        <select
                            value={formData.kecamatan}
                            onChange={(e) => setFormData({...formData, kecamatan : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Cibodas">Cibodas</option>
                        </select>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Kelurahan</label>
                        <select
                            value={formData.kelurahan}
                            onChange={(e) => setFormData({...formData, kelurahan : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Cibodas Baru">Cibodas Baru</option>
                            <option value="Jatiuwung">Jatiuwung</option>
                            <option value="Uwungjaya">Uwungjaya</option>
                        </select>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">RT/RW</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.rt}
                                onChange={(e) => setFormData({...formData, rt : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">Alamat</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.alamat}
                                onChange={(e) => setFormData({...formData, alamat : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Puskesmas</label>
                        <select
                            value={formData.puskesmas}
                            onChange={(e) => setFormData({...formData, puskesmas : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Jalan Baja">Jalan Baja</option>
                        </select>
                    </div>

                    <div className="sm:col-span-4">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">Anak-ke</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.anakke}
                                onChange={(e) => setFormData({...formData, anakke : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">BB Lahir (gram)</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.berat}
                                onChange={(e) => setFormData({...formData, berat : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">PB Lahir (cm)</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.panjang}
                                onChange={(e) => setFormData({...formData, panjang : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">IMD</label>
                        <select
                            value={formData.imd}
                            onChange={(e) => setFormData({...formData, imd : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">KMS</label>
                        <select
                            value={formData.kms}
                            onChange={(e) => setFormData({...formData, kms : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Riwayat Asi Ekslusif</label>
                        <select
                            value={formData.asieks}
                            onChange={(e) => setFormData({...formData, asieks : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Umur 0 Bulan">Umur 0 Bulan</option>
                            <option value="Umur 1 Bulan">Umur 1 Bulan</option>
                            <option value="Umur 2 Bulan">Umur 2 Bulan</option>
                            <option value="Umur 3 Bulan">Umur 3 Bulan</option>
                            <option value="Umur 4 Bulan">Umur 4 Bulan</option>
                            <option value="Umur 5 Bulan">Umur 5 Bulan</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Vitamin A</label>
                        <select
                            value={formData.vitamina}
                            onChange={(e) => setFormData({...formData, vitamina : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Feb">Feb</option>
                            <option value="Agustus">Agustus</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Penyakit Penyerta</label>
                        <select
                            value={formData.penyerta}
                            onChange={(e) => setFormData({...formData, penyerta : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Cacingan</label>
                        <select
                            value={formData.cacingan}
                            onChange={(e) => setFormData({...formData, cacingan : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Perkembangan KIA</label>
                        <select
                            value={formData.kia}
                            onChange={(e) => setFormData({...formData, kia : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>

                    {/* Foto */}
                    <div className="col-span-full">
                        <label for="cover-photo" className="block text-lg font-medium leading-6 text-gray-900">Foto</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <input
                                type="file"
                                accept='image/jpeg, image/png'
                                onChange={handleChangeFile}
                            />
                            {error && <p>{error}</p>}
                            {formData.foto && (
                                <div>
                                    <p>Gambar yang akan diunggah: </p>
                                    <img src={URL.createObjectURL(formData.foto)} alt="gambar" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <h2 className="text-lg font-bold text-gray-900">Identitas Orang Tua</h2>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">NIK Orang Tua</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.nikot}
                                onChange={(e) => setFormData({...formData, nikot : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900" />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">No KK</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.nokk}
                                onChange={(e) => setFormData({...formData, nokk : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900" />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">Nama Orang Tua</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.namaot}
                                onChange={(e) => setFormData({...formData, namaot : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900" />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <label for="username" className="block text-lg font-medium leading-6 text-gray-900">No HP Orang Tua</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                required
                                value={formData.nohp}
                                onChange={(e) => setFormData({...formData, nohp : e.target.value})}
                                className="block flex-1 border-0 bg-transparent text-lg py-1.5 pl-1 text-gray-900" />
                        </div>
                    </div>
                    <div className="sm:col-span-6">
                        <h2 className="text-base font-bold text-gray-900">Determinan</h2>
                    </div>
                    <div className="sm:col-span-3">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Asuransi</label>
                        <select
                            value={formData.asuransi}
                            onChange={(e) => setFormData({...formData, asuransi : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="BPJS/JKN">BPJS/JKN</option>
                            <option value="Mandiri">Mandiri</option>
                            <option value="Tidak Punya">Tidak Punya</option>
                        </select>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Air Bersih</label>
                        <select
                            value={formData.airbersih}
                            onChange={(e) => setFormData({...formData, airbersih : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Jamban Sehat</label>
                        <select
                            value={formData.jamban}
                            onChange={(e) => setFormData({...formData, jamban : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Imunisasi Sesuai Usia</label>
                        <select
                            value={formData.imunisasi}
                            onChange={(e) => setFormData({...formData, imunisasi : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Anggota Keluarga Merokok</label>
                        <select
                            value={formData.merokok}
                            onChange={(e) => setFormData({...formData, merokok : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="country" className="block text-lg font-medium leading-6 text-gray-900">Riwayat Kehamilan Ibu</label>
                        <select
                            value={formData.kehamilan}
                            onChange={(e) => setFormData({...formData, kehamilan : e.target.value})}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                            <option value="KEK">KEK</option>
                            <option value="Non KEK">Non KEK</option>
                        </select>
                    </div>
                </div>

                {!isPending && <button className=" mt-10 w-28 h-12 rounded-md text-white bg-blue-500">Add</button>}
                {isPending && <button disabled>Adding ...</button>}

            </form>
        </div>
    )
}

export default Create