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
  // State to hold the currently clicked image for the lightbox
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Close lightbox on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-32">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500"></span>
          <span className="w-12 h-px bg-zinc-800"></span>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">2026 - present</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-zinc-100 tracking-tighter leading-[1.1] mb-10">
          Respawn Nation
        </h1>
        
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed font-light mb-6">
              A high-performance esports and media-streaming platform built to digitize complex event logistics. 
              Engineered to handle real-time tournament brackets, live broadcast feeds, and automated, ACID-compliant financial payouts.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-light">
              This architecture completely replaces manual event administration with a robust Django state machine, marrying a secure PostgreSQL financial ledger with low-latency WebSockets for an uncompromised live competitive experience.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end gap-3 text-xs font-medium uppercase tracking-widest text-zinc-600">
            <span>Role: Creator</span>
            <span>Frontend: React / JavaScript</span>
            <span>Backend: Django / PostgreSQL</span>
          </div>
        </div>
        
        <div className="w-full rounded-xl overflow-hidden bg-[#121214] border border-zinc-800/50 group relative">
          <img 
            src={browsePage} 
            alt="Respawn Nation Browse Page" 
            className="w-full h-auto block cursor-zoom-in transition-opacity hover:opacity-80"
            onClick={() => setLightboxImg(browsePage)}
          />
        </div>
      </header>

      <div className="space-y-32 md:space-y-48">

        {/* --- SECTION 1: THE TOURNAMENT ENGINE --- */}
        <section>
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
            <div className="md:col-span-5 relative md:sticky md:top-32">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 block">01 / State Management</span>
              <h2 className="text-4xl sm:text-5xl font-serif text-zinc-100 mb-6 tracking-tight">Automated Match Engine</h2>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Managing physical tournament logistics requires a strict, zero-margin-for-error approach. Manual bracket administration is prone to delays and scheduling conflicts. To resolve this, I translated operational event discipline into a dynamic Django state machine that completely automates the transition from group stages to knockout rounds.
                </p>
                <p>
                  The engine utilizes Python's built-in <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">itertools.combinations</code> for algorithmic round-robin scheduling. Once group stages conclude, the system dynamically seeds the knockout phases. 
                </p>
                <p>
                  By reverse-engineering the elimination brackets using recursive <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">next_match</code> foreign keys, the platform evaluates match results and autonomously routes winning players through the tournament tree, completely eliminating the need for manual admin intervention.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col gap-8">
              <img 
                src={tournamentList} 
                alt="Tournament List" 
                className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(tournamentList)}
              />
              <img 
                src={gamePage} 
                alt="Game Details Page" 
                className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(gamePage)}
              />
              
              <div className="bg-[#080809] rounded-xl border border-zinc-800/50 p-6 sm:p-8 mt-4 shadow-2xl shadow-black">
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-600 mb-6 pb-4 border-b border-zinc-800/50">
                  tournaments/engines/world_cup.py
                </div>
                <pre className="text-sm font-mono text-zinc-400 overflow-x-auto leading-relaxed">
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
sf2 = FootballMatch.objects.create(stage='KNOCKOUT', round_name='Semi-Final', next_match=final)

# Cross-Seeding Group Winners
FootballMatch.objects.create(player_1=GroupA[0], player_2=GroupB[0], next_match=sf1)`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PAYMENT ARCHITECTURE --- */}
        <section>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 block">02 / Financial Logistics</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-zinc-100 mb-6 tracking-tight">Razorpay Integration</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
              Processing tournament entry fees and prize pools requires absolute cryptographic certainty. I engineered a multi-step Razorpay integration that strictly isolates the React frontend UI from the backend validation logic.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              The architecture mandates that the frontend only handles the initiation token. The actual validation relies on an HMAC SHA256 signature generated by the gateway, which is verified exclusively on the Django backend. This mathematical separation ensures that cross-payment tampering, packet interception, and cheap-order swapping exploits are structurally impossible.
            </p>
          </div>
          
          <div className="w-full bg-[#121214] p-6 sm:p-12 rounded-xl border border-zinc-800/50 shadow-2xl shadow-black flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(tournamentRegistration)}>
            <img 
              src={tournamentRegistration} 
              alt="Razorpay Registration Flowchart" 
              className="w-full h-auto rounded"
            />
          </div>
        </section>

        {/* --- SECTION 3: THE INTERNAL WALLET LEDGER --- */}
        <section>
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="md:col-span-7 order-2 md:order-1 flex flex-col gap-8">
              <div className="w-full bg-[#121214] p-6 sm:p-12 rounded-xl border border-zinc-800/50 shadow-2xl shadow-black flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(walletRegistration)}>
                <img 
                  src={walletRegistration} 
                  alt="Database Row Lock Architecture" 
                  className="w-full h-auto rounded"
                />
              </div>

              <div className="bg-[#080809] rounded-xl border border-zinc-800/50 p-6 sm:p-8 shadow-2xl shadow-black">
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-600 mb-6 pb-4 border-b border-zinc-800/50">
                  views.py / Atomic Concurrency
                </div>
                <pre className="text-xs font-mono text-zinc-400 overflow-x-auto leading-relaxed">
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
        profile.save()
        
        WalletTransaction.objects.create(...)`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="md:col-span-5 relative md:sticky md:top-32 order-1 md:order-2">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 block">03 / Concurrency</span>
              <h2 className="text-4xl sm:text-5xl font-serif text-zinc-100 mb-6 tracking-tight">ACID-Compliant Ledger</h2>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light mb-10">
                <p>
                  To bypass repetitive payment gateway charges and reduce friction, users can deposit funds into an internal platform wallet. However, in high-frequency environments, virtual wallets are highly susceptible to database race conditions—such as a user attempting a "double-spend" exploit by hitting the registration endpoint simultaneously on two separate devices.
                </p>
                <p>
                  To guarantee absolute ACID compliance, the registration endpoint enforces strict database concurrency controls utilizing a <strong className="text-zinc-200 font-medium">Double Lock</strong> within a PostgreSQL atomic transaction.
                </p>
                <p>
                  The system first requests a row-level lock on the tournament capacity using <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">select_for_update()</code>, ensuring it isn't overbooked. Immediately after, it secures a lock on the user's financial profile. If the tournament fills up or the wallet balance evaluates to insufficient during this microsecond window, the entire database block rolls back cleanly, leaving the ledger untouched.
                </p>
              </div>

              <img 
                src={userProfile} 
                alt="User Profile Wallet" 
                className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] shadow-2xl shadow-black cursor-zoom-in transition-opacity hover:opacity-80" 
                onClick={() => setLightboxImg(userProfile)}
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 4: STREAMING & INFRASTRUCTURE --- */}
        <section className="border-t border-zinc-900 pt-24">
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 block">04 / Video Delivery</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-zinc-100 mb-6 tracking-tight">Live Broadcasting & WebSockets</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
              The platform required a low-latency live feed capable of ingesting RTMP streams directly from mobile devices. After an initial toolset proved unsuitable for mobile screen-sharing, I pivoted the infrastructure to utilize Cloudflare Stream, meticulously tuning the low-latency testing parameters to optimize cloud billing overhead without sacrificing the real-time viewer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <img 
              src={streamerStudio} 
              alt="Streamer Studio" 
              className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80" 
              onClick={() => setLightboxImg(streamerStudio)}
            />
            <img 
              src={watchingLive} 
              alt="Live Viewing Experience" 
              className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80" 
              onClick={() => setLightboxImg(watchingLive)}
            />
            <img 
              src={chatView} 
              alt="Live Chat View" 
              className="w-full rounded-xl border border-zinc-800/50 bg-[#121214] cursor-zoom-in transition-opacity hover:opacity-80" 
              onClick={() => setLightboxImg(chatView)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-zinc-100 mb-4">Cloudflare Pipeline</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">
                The backend automates the API provisioning of secure, ephemeral stream keys and channel creation for tournament participants, mapping the incoming RTMP feed to a scalable HLS output for the frontend player.
              </p>
              <div className="w-full bg-[#121214] p-6 rounded-xl border border-zinc-800/50 flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(cloudflareStream)}>
                <img src={cloudflareStream} alt="Cloudflare Stream Logic" className="w-full h-auto rounded" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-zinc-100 mb-4">ASGI Middleware Orchestration</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">
                Integrating persistent WebSocket connections alongside standard synchronous HTTP requests created complex ASGI pipeline constraints. Resolving deep middleware ordering conflicts—specifically in the installed applications list—was required to fix persistent visual rendering and CSS loading failures in the Django admin panel under concurrent loads.
              </p>
              <div className="w-full bg-[#121214] p-6 rounded-xl border border-zinc-800/50 flex items-center justify-center cursor-zoom-in transition-colors hover:bg-[#1a1a1c]" onClick={() => setLightboxImg(cloudflareStreamChannel)}>
                <img src={cloudflareStreamChannel} alt="Channel Creation Detail" className="w-full h-auto rounded" />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0d]/95 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center">
            <img 
              src={lightboxImg} 
              alt="Zoomed Architecture" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-zinc-800 shadow-2xl"
            />
            {/* Optional: Close Button for clarity */}
            <button 
              className="absolute top-4 right-4 sm:-top-12 sm:-right-0 text-zinc-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full sm:bg-transparent sm:p-0"
              onClick={() => setLightboxImg(null)}
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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