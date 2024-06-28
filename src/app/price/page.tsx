import Image from "next/image";

export default function Pricing() {
  return (
    <main className="bg-slate-500">
      <section className="flex flex-col gap-8 md:flex-row items-center w-screen h-screen justify-center text-white px-8">
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
          <button className="px-4 py-2 bg-green-400 rounded-xl text-white">
            Login
          </button>
        </div>
        <Image
          src={
            "https://images.unsplash.com/photo-1492294112339-ea831887e5d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={400}
          height={400}
          alt="pricing"
        />
      </section>
    </main>
  );
}
