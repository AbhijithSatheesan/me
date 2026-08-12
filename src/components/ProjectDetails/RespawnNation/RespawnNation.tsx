import React, { useState, useEffect } from "react";

// --- UI Screenshots ---
import browsePage from "./images/BrowsePage.png";
import gamePage from "./images/GamePage.png";
import tournamentList from "./images/TournamentList.png";
import userProfile from "./images/UserProfile.png";
import chatView from "./images/ChatView.png";
import streamerStudio from "./images/StreamerStudio.png";
import watchingLive from "./images/WatchingLive.png";

// --- Infrastructure & Architecture Diagrams ---
import cloudflareStream from "./images/CloudflareStream.png";
import cloudflareStreamChannel from "./images/CloudflareStreamChannelCreation.png";
import tournamentRegistration from "./images/TournamentRegistraion.png";
import walletRegistration from "./images/WalletTournamentRegistraion.png";

const RespawnNation: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    // Added overflow-x-hidden at the absolute root to act as a safety net against horizontal scrolling
    <div className="py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto font-sans overflow-x-hidden w-full">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-20 md:mb-32 w-full">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500"></span>
          <span className="w-8 md:w-12 h-px bg-zinc-800"></span>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">2026 - present</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-zinc-100 tracking-tighter leading-[1.1] mb-8 md:mb-10 break-words">
          Respawn Nation
        </h1>
        
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-8">
            <p className="text-lg sm:text-2xl text-zinc-400 leading-relaxed font-light mb-6">
              A high-performance esports and media-streaming platform built to digitize complex event logistics. 
              Engineered to handle real-time tournament brackets, live broadcast feeds, and automated, ACID-compliant financial payouts.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-light">
              This architecture completely replaces manual event administration with a robust Django state machine, marrying a secure PostgreSQL financial ledger with low-latency WebSockets for an uncompromised live competitive experience.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-start md:justify-end gap-3 text-xs font-medium uppercase tracking-widest text-zinc-600">
            <span>Role: Creator</span>
            <span>Frontend: React / JavaScript</span>
            <span>Backend: Django / PostgreSQL</span>
          </div>
        </div>
        
        <div className="w-full max-w-full rounded-xl overflow-hidden bg-[#121214] border border-zinc-800/50 group relative">
          <img 
            src={browsePage} 
            alt="Respawn Nation Browse Page" 
            className="w-full h-auto object-cover block cursor-zoom-in transition-opacity hover:opacity-80"
            onClick={() => setLightboxImg(browsePage)}
          />
        </div>
      </header>

      <div className="space-y-20 md:space-y-48 w-full">

        {/* --- SECTION 1: THE TOURNAMENT ENGINE --- */}
        <section className="w-full">
          {/* min-w-0 prevents grid children from expanding past their container */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start mb-12 md:mb-16 min-w-0">
            <div className="md:col-span-5 relative md:sticky md:top-32 w-full">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 md:mb-6 block">01 / State Management</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-100 mb-4 md:mb-6 tracking-tight">Automated Match Engine</h2>
              
              <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Managing physical tournament logistics requires a strict, zero-margin-for-error approach. Manual bracket administration is prone to delays and scheduling conflicts. To resolve this, I translated operational event discipline into a dynamic Django state machine that completely automates the transition from group stages to knockout rounds.
                </p>
                <p>
                  The engine utilizes Python's built-in <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs md:text-sm break-all">itertools.combinations</code> for algorithmic round-robin scheduling.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col gap-6 md:gap-8 w-full min-w-0">
              <img 
                src={tournamentList} 
                alt="Tournament List" 
                className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(tournamentList)}
              />
              <img 
                src={gamePage} 
                alt="Game Details Page" 
                className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(gamePage)}
              />
              
              {/* STRICT CODE BLOCK CONTAINER */}
              <div className="bg-[#080809] rounded-xl border border-zinc-800/50 p-4 md:p-6 lg:p-8 mt-2 md:mt-4 shadow-2xl shadow-black w-full overflow-hidden">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-zinc-600 mb-4 pb-3 md:mb-6 md:pb-4 border-b border-zinc-800/50 break-words">
                  tournaments/engines/world_cup.py
                </div>
                {/* Forced overflow-x-auto directly on the pre tag */}
                <pre className="text-[10px] md:text-xs font-mono text-zinc-400 leading-relaxed overflow-x-auto w-full max-w-full whitespace-pre">
                  <code>
{`# 1. GENERATE GROUP STAGE
for group_name, members in groups.items():
    pairings = list(combinations(members, 2)) 
    
    for player1, player2 in pairings:
        FootballMatch.objects.create(
            tournament=self.tournament,
            stage='GROUP',
            player_1=player1,
            player_2=player2
        )

# 2. SEEDING THE KNOCKOUTS (Recursive Trees)
final = FootballMatch.objects.create(stage='KNOCKOUT', round_name='Final')
sf1 = FootballMatch.objects.create(stage='KNOCKOUT', round_name='Semi-Final', next_match=final)
sf2 = FootballMatch.objects.create(stage='KNOCKOUT', round_name='Semi-Final', next_match=final)`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PAYMENT ARCHITECTURE --- */}
        <section className="w-full">
          <div className="max-w-4xl mx-auto text-left md:text-center mb-10 md:mb-16 w-full px-2 sm:px-0">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 md:mb-6 block">02 / Financial Logistics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-100 mb-4 md:mb-6 tracking-tight">Razorpay Integration</h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-4 md:mb-6">
              Processing tournament entry fees and prize pools requires absolute cryptographic certainty. I engineered a multi-step Razorpay integration that strictly isolates the React frontend UI from the backend validation logic.
            </p>
          </div>
          
          <div className="w-full max-w-full bg-[#121214] p-4 sm:p-6 md:p-12 rounded-xl border border-zinc-800/50 shadow-2xl shadow-black flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c] overflow-hidden" onClick={() => setLightboxImg(tournamentRegistration)}>
            <img 
              src={tournamentRegistration} 
              alt="Razorpay Registration Flowchart" 
              className="w-full max-w-full h-auto object-contain rounded"
            />
          </div>
        </section>

        {/* --- SECTION 3: THE INTERNAL WALLET LEDGER --- */}
        <section className="w-full">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start min-w-0">
            
            <div className="md:col-span-7 order-2 md:order-1 flex flex-col gap-6 md:gap-8 w-full min-w-0">
              <div className="w-full max-w-full bg-[#121214] p-4 sm:p-6 md:p-12 rounded-xl border border-zinc-800/50 shadow-2xl shadow-black flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c] overflow-hidden" onClick={() => setLightboxImg(walletRegistration)}>
                <img 
                  src={walletRegistration} 
                  alt="Database Row Lock Architecture" 
                  className="w-full max-w-full h-auto object-contain rounded"
                />
              </div>

              {/* STRICT CODE BLOCK CONTAINER */}
              <div className="bg-[#080809] rounded-xl border border-zinc-800/50 p-4 md:p-6 lg:p-8 shadow-2xl shadow-black w-full overflow-hidden">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-zinc-600 mb-4 pb-3 md:mb-6 md:pb-4 border-b border-zinc-800/50 break-words">
                  views.py / Atomic Concurrency
                </div>
                {/* Forced overflow-x-auto directly on the pre tag */}
                <pre className="text-[10px] md:text-xs font-mono text-zinc-400 leading-relaxed overflow-x-auto w-full max-w-full whitespace-pre">
                  <code>
{`@transaction.atomic
def post(self, request, pk):
    # Lock 1: Secure Tournament Capacity
    tournament = get_object_or_404(
        Tournament.objects.select_for_update(), pk=pk
    )

    if payment_method == 'WALLET':
        # Lock 2: Secure User Financial Data
        profile = get_object_or_404(
            UserProfile.objects.select_for_update(), 
            user=request.user
        )

        if profile.wallet_balance < tournament.entry_fee:
            raise InsufficientFunds()

        # Write Immutable Ledger Receipt
        profile.wallet_balance -= tournament.entry_fee
        profile.save()`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="md:col-span-5 relative md:sticky md:top-32 order-1 md:order-2 w-full">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 md:mb-6 block">03 / Concurrency</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-100 mb-4 md:mb-6 tracking-tight">ACID-Compliant Ledger</h2>
              
              <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-10">
                <p>
                  To guarantee absolute ACID compliance, the registration endpoint enforces strict database concurrency controls utilizing a <strong className="text-zinc-200 font-medium">Double Lock</strong> within a PostgreSQL atomic transaction.
                </p>
                <p>
                  The system first requests a row-level lock using <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs md:text-sm break-all">select_for_update()</code>, ensuring it isn't overbooked. If the tournament fills up or the wallet balance evaluates to insufficient during this microsecond window, the entire database block rolls back cleanly.
                </p>
              </div>

              <img 
                src={userProfile} 
                alt="User Profile Wallet" 
                className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(userProfile)}
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 4: STREAMING & INFRASTRUCTURE --- */}
        <section className="border-t border-zinc-900 pt-16 md:pt-24 w-full">
          <div className="max-w-4xl mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 md:mb-6 block">04 / Video Delivery</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-100 mb-4 md:mb-6 tracking-tight">Live Broadcasting & WebSockets</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 w-full">
            <img 
              src={streamerStudio} 
              alt="Streamer Studio" 
              className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80 object-cover" 
              onClick={() => setLightboxImg(streamerStudio)}
            />
            <img 
              src={watchingLive} 
              alt="Live Viewing Experience" 
              className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80 object-cover" 
              onClick={() => setLightboxImg(watchingLive)}
            />
            <img 
              src={chatView} 
              alt="Live Chat View" 
              className="w-full max-w-full h-auto rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80 object-cover" 
              onClick={() => setLightboxImg(chatView)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 w-full min-w-0">
            <div className="w-full min-w-0">
              <h3 className="text-xl md:text-2xl font-serif text-zinc-100 mb-3 md:mb-4">Cloudflare Pipeline</h3>
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                The backend automates the API provisioning of secure, ephemeral stream keys and channel creation for tournament participants, mapping the incoming RTMP feed to a scalable HLS output for the frontend player.
              </p>
              <div className="w-full max-w-full overflow-hidden bg-[#121214] p-4 md:p-6 rounded-xl border border-zinc-800/50 flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(cloudflareStream)}>
                <img src={cloudflareStream} alt="Cloudflare Stream Logic" className="w-full max-w-full h-auto object-contain rounded" />
              </div>
            </div>
            
            <div className="w-full min-w-0">
              <h3 className="text-xl md:text-2xl font-serif text-zinc-100 mb-3 md:mb-4">ASGI Middleware Orchestration</h3>
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                Integrating persistent WebSocket connections alongside standard synchronous HTTP requests created complex ASGI pipeline constraints. Resolving deep middleware ordering conflicts was required to fix persistent visual rendering.
              </p>
              <div className="w-full max-w-full overflow-hidden bg-[#121214] p-4 md:p-6 rounded-xl border border-zinc-800/50 flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(cloudflareStreamChannel)}>
                <img src={cloudflareStreamChannel} alt="Channel Creation Detail" className="w-full max-w-full h-auto object-contain rounded" />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0d]/95 backdrop-blur-sm p-2 sm:p-4 md:p-8 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative w-full max-w-7xl max-h-full flex items-center justify-center">
            {/* Added max-w-[95vw] to ensure lightbox image doesn't overflow mobile screen */}
            <img 
              src={lightboxImg} 
              alt="Zoomed Architecture" 
              className="max-w-[95vw] md:max-w-full max-h-[90vh] object-contain rounded-xl border border-zinc-800 shadow-2xl"
            />
            <button 
              className="absolute top-2 right-2 md:-top-12 md:-right-0 text-zinc-200 hover:text-white transition-colors bg-black/60 md:bg-transparent p-2 md:p-0 rounded-full"
              onClick={() => setLightboxImg(null)}
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default RespawnNation;