import React from 'react'
import { Link } from 'react-router-dom'

const DataList = ({ blogs, title }) => {
    return (
        <div className="w-full mt-4 mb-10">
            <h2 className="font-bold text-3xl text-[#000000] text-left">{title}</h2>
            <div className='mt-10 w-28 h-10 bg-blue-500 text-center px-1 py-2 hover:bg-blue-400 text-white cursor-pointer text-sm rounded-lg font-bold'> <Link to='/create'>Tambah Data</Link></div>
            <table className='mx-auto border-collapse border-spacing-8 border-slate-500 bg-slate-100 mt-10'>
                <thead>
                    <tr>
                        <th className="px-20 border border-slate-600">Nama Balita</th>
                        <th className="px-20 border border-slate-600">NIK</th>
                        <th className="px-5 border border-slate-600">Jenis Kelamin</th>
                        <th className="px-20 border border-slate-600">Umur</th>
                        <th className="px-5 border border-slate-600">Puskesmas Asal</th>
                        <th className="px-5 border border-slate-600">Kelurahan</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => {
                        const umur = new Date(blog.born);
                        const tglNow = new Date();
                        const selisihTahun = tglNow.getFullYear() - umur.getFullYear();
                        const selisihBulan = tglNow.getMonth() - umur.getMonth();
                        const selisihHari = tglNow.getDate() - umur.getDate();

                        let umurText = "";
                        if(selisihTahun > 0){
                            umurText += `${selisihTahun} tahun `;
                        }
                        if(selisihBulan > 0){
                            umurText += `${selisihBulan} bulan `;
                        }
                        if(selisihHari > 0){
                            umurText += `${selisihHari} hari `;
                        }
                        console.log(blog);
                        // if(selisihBulan < 0 || (selisihBulan === 0 && selisihHari < 0 )){
                        //     return selisihTahun - 1;
                        // }
                        return (
                            
                            <tr key={blog.id}>
                                <td className="px-2 border border-slate-700">{blog.nama}</td>
                                <td className="border text-center border-slate-700">{blog.nika}</td>
                                <td className="border text-center border-slate-700">{blog.gender}</td>
                                <td className="border text-center border-slate-700">{umurText}</td>
                                <td className="border text-center border-slate-700">{blog.puskesmas}</td>
                                <td className="border text-center border-slate-700">{blog.kelurahan}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </div>
    )
}

export default DataList