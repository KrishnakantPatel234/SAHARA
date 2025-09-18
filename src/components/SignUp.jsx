import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, form.email, form.password);

      // Firestore me role ke sath save
      await setDoc(doc(db, "users", res.user.uid), {
        name: form.name,
        email: form.email,
        role: role,
      });

      alert(`Signed up as ${role}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow rounded-lg">
      <div className="flex gap-4 mb-4">
        <button onClick={() => setRole("user")} className={role === "user" ? "bg-green-600 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"}>User</button>
        <button onClick={() => setRole("sahayak")} className={role === "sahayak" ? "bg-green-600 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"}>Sahayak</button>
      </div>

      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border p-2 rounded"/>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border p-2 rounded"/>
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="border p-2 rounded"/>
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Signup as {role}</button>
      </form>
    </div>
  );
}

export default SignUp;
