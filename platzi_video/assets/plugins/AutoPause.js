class AutoPause {
    constructor(){
        this.threshold = 0.25;
        this.handlerIntersectionObserver = this.handlerIntersectionObserver.bind(this); // Para redefinir el contexto de this a la clase AutoPause.
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this); // Para redefinir el contexto de this a la clase AutoPause.
    }

    run(player)
    {
        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersectionObserver, {
            threshold: this.threshold
        }); //Se redefine this arriba con bind ya que acá toma como this al objeto IntersectionObserver.

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange); //Se redefine this arriba con bind ya que acá toma como this al objeto addEventListener.
    }
    
    handlerIntersectionObserver(entries)
    {
        const entry = entries[0];
        console.log(entry);
        
        if(entry.isIntersecting)
        {
            this.player.play();
        }
        else
        {
            this.player.pause();
        }
    }

    handlerVisibilityChange()
    {
        document.visibilityState === 'hidden' ? this.player.pause() : this.player.play();
        console.log(document.visibilityState);
    }
}

export default AutoPause;