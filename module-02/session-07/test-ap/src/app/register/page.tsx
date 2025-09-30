"use client";

import { Formik, Form, FormikProps } from "formik"; //for forms
import * as Yup from "yup"; //for validation

interface IRegister {
  email: string;
  password: string;
}

const RegisterSchema = Yup.object({
    //email harus string, trim = ga boleh spasi blakang or depan, harus email, dan harus diisi. di dalam kurung itu message if wrong.
    email: Yup.string().trim().email("Format email salah").required("email harus diisi"),
    //password harus string, trim = ga boleh spasi blakang or depan, minimal 5 characters, dan harus diisi. di dalam kurung itu message if wrong.
    password: Yup.string().trim().min(5, "Password minimal 5 karakter").required("email harus diisi")
})

export default function Register() {
  const initialValues: IRegister /* tipe IRegister */ = { email: "", password: "" }; 
  //object biasa, isinya email dan value kosong (value awal)

  const register = async (values: IRegister) =>{
    try{
        // const req = await fetch
        // instance dimana kamu ga perlu tau apa responsenya backend, gausa di masukin ke variable or parse, pakai await fetch aja
        await fetch(
            "https://wealthyworm-us.backendless.app/api/data/user", {
                method: "POST",
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            }
        ); // requested from backendless url
        // first argument from fetch itu URL nya, argumen kedua itu object.
        // pertama method, kedua body untuk kirim data (json kita).
        // kita harus ubah body nya jadi json format to be able to send to backendless or other backend.
        //isi body harus sama kayak penerima request, which is backendless, yang adanya property email and password sekarang.
        
        /*const res = await req.json();*/ // response dr backenless ini harus kita balikin dr json file to normal object biar bisa dibaca program ini.
        
        // instance dimana kamu ga perlu tau apa responsenya backend, pakai alert aja, gausa pake yang diatas
        alert("Register Success");
    } catch(err : any){
        if (err instanceof Error){
            console.log(err.message)
        }else{
            console.log("Unknown Error", err);
        }
        // const error = err as any;
        // alert(error.message);

    }//kalo pake async await, pake try catch to handle error
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[80px] gap-6">
        <div className="text-4xl">REGISTER PAGE</div>
      <Formik<IRegister> //ini ngasih tau frmik bahwa ada IRegister sebagai generic type, biar formik tau ada value email and password
        initialValues={initialValues}// ngasih tau emailnya kosong and passwordnya kosong
        validationSchema={RegisterSchema} // submit gaakan jalan kalo gagal validation
        onSubmit={(values) => register/*function register*/(values)} //apa yang terjadi if submitted. in this case bakal nglakuin function, no need useState or ref krna di handle formik
      >
        {(formik: FormikProps<IRegister> /* nerima property which is formik, typenya formikprops, lalu kita kasih IRegister (artinya valuenya 2 aja, email and password)*/) => {
          return (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  className="border border-black dark:border-white p-2 rounded-sm w-[400px]"
                  type="text"
                  name="email"
                  value={formik.values.email} //formik punya value, and value nya email karena dr IRegister ada email and initialnya skrg kosong. 
                  // dia nge teigi dr this input email dr "name = email"
                  onChange={formik.handleChange} //dia akan melakukan perubahan perubahan formik value, no need useState etc.
                ></input>
                {formik.touched.email  && formik.errors.email && (
                    <span className="text-red-500 text-[12px]">
                        *{formik.errors.email}
                    </span>
                    //kalo pernah disentuh emailnya, dan email gagal validasi, tampilkan error message
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  className="border border-black dark:border-white p-2 rounded-sm w-[400px]"
                  type="text"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange} //merubah value password sesuai input kita
                ></input>
                {formik.touched.password  && formik.errors.password && (
                    <span className="text-red-500 text-[12px]">
                        *{formik.errors.password}
                    </span>
                    //kalo pernah disentuh password, dan password gagal validasi, tampilkan error message
                )}
              </div>
              <button
                className="border border-black dark:border-white p-2 rounded-sm"
                type="submit"
              >
                Submit
              </button>
              {/* button submit di pencet, lalu onsubmit yang di paling atas jalan with out inputted value */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
