import { workProcess } from "../data/services";

export function WorkProcess() {
  return (
    <div className="rounded-lg border bg-card p-8 mb-16">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">Comment je travaille</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Une approche méthodique pour garantir le succès de votre projet
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {workProcess.map((step) => (
          <div key={step.step} className="flex flex-col items-center text-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {step.step}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Ajout d'un élément de confiance */}
      <div className="mt-12 p-4 md:p-6 bg-muted/50 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="text-xl font-bold mb-2">Une méthodologie éprouvée</h3>
            <p className="text-muted-foreground">
              Cette approche structurée a permis de livrer avec succès plus de 50 projets, 
              en respectant les délais et les budgets.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
            <div className="text-center px-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Satisfaction client</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projets livrés</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">92%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Dans les délais</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 