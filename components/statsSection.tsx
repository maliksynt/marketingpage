import { UserCheck, Search, TrendingUp } from "lucide-react";
import { inter } from "@/app/fonts";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="mt-20 flex w-full justify-center py-14 md:py-24"
    >
      <article className="flex w-11/12 flex-col gap-20 md:w-9/12 md:gap-48">
        <div>
          <h2 className="text-3xl font-bold uppercase md:text-8xl">
            Boostez votre visibilité en ligne avec Google Ads
          </h2>
        </div>
        <div className="flex w-full flex-col justify-between gap-24 md:flex-row">
          <div className="flex min-h-52 w-full flex-col lg:w-2/12">
            <div className="mb-6">
              <UserCheck className="from-copper-100 to-copper-300 h-16 w-16 rotate-6 rounded-md border-2 border-b-4 border-black bg-gradient-to-r p-3" />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              90%
            </h3>
            <p className="pb-2 text-lg font-bold ">de part de marché</p>
            <p className="text-sm">
              50 millions d'utilisateurs chaque mois en France
            </p>
          </div>
          <div className="flex min-h-52 w-full flex-col lg:w-2/12">
            <div className="mb-6">
              <Search className="from-copper-100 to-copper-300 h-16 w-16 rotate-[-4deg] rounded-md border-2 border-b-4 border-black bg-gradient-to-l p-3 " />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              63%
            </h3>
            <p className="pb-2 text-lg font-bold ">D'utilisateur satisfait</p>
            <p className="text-sm">
              Dans leur recherche nagitationelle, commerciale et
              transactionnelle
            </p>
          </div>
          <div className="flex min-h-52 w-full flex-col lg:w-2/12">
            <div className="mb-6">
              <TrendingUp className="from-copper-100 to-copper-300 h-16 w-16 rotate-3 rounded-md border-2 border-b-4 border-black bg-gradient-to-r p-3 " />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              7%
            </h3>
            <p className="pb-2 text-lg font-bold ">de part de marché</p>
            <p className="text-sm">
              Choisir Google Ads c’est maximiser vos chances de toucher un
              public qualifié
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
