/* ═══════════════════════════════════════════════
   AI Travel Planner — style.css
   Powered by Groq API (Free)
═══════════════════════════════════════════════ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:   #0a0f1e;
  --gold:   #f59e0b;
  --gold2:  #fbbf24;
  --card:   #111827;
  --slate:  #1e293b;
  --slate2: #273548;
  --muted:  #94a3b8;
  --light:  #f1f5f9;
  --green:  #10b981;
  --red:    #ef4444;
  --border: rgba(255,255,255,0.07);
}

html { scroll-behavior: smooth; }

body {
  background: var(--navy);
  color: var(--light);
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Background */
.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 60% 50% at 15% 10%, rgba(245,158,11,.07) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 85% 90%, rgba(16,185,129,.05) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 50% 50%, rgba(245,158,11,.02) 0%, transparent 80%);
}

.bg-layer::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,.35) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,.20) 0%, transparent 100%),
    radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,.30) 0%, transparent 100%),
    radial-gradient(1px 1px at 75% 60%, rgba(255,255,255,.25) 0%, transparent 100%),
    radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,.20) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,.30) 0%, transparent 100%),
    radial-gradient(1px 1px at 65% 90%, rgba(255,255,255,.20) 0%, transparent 100%),
    radial-gradient(1px 1px at  5% 70%, rgba(255,255,255,.25) 0%, transparent 100%),
    radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,.30) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,.20) 0%, transparent 100%);
}

/* Layout */
.wrap {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* Header */
.header {
  text-align: center;
  padding: 2rem 0 2.5rem;
  animation: fadeUp .7s ease both;
}

.header-plane {
  font-size: 3rem;
  display: inline-block;
  margin-bottom: .6rem;
  animation: float 3.5s ease-in-out infinite;
}

.header h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: -1.5px;
  line-height: 1.1;
}

.header p {
  color: var(--muted);
  font-size: .95rem;
  margin-top: .5rem;
  font-weight: 300;
}

.header-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 1rem auto 0;
  border-radius: 2px;
}

/* Cards */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.75rem;
  margin-bottom: 1.25rem;
}

.card-anim-1 { animation: fadeUp .7s .08s ease both; opacity: 0; }
.card-anim-2 { animation: fadeUp .7s .16s ease both; opacity: 0; }
.card-anim-3 { animation: fadeUp .7s .24s ease both; opacity: 0; }
.card-anim-4 { animation: fadeUp .7s .32s ease both; opacity: 0; }

/* Form */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}

@media (max-width: 580px) {
  .form-grid { grid-template-columns: 1fr; }
}

.field-full { grid-column: 1 / -1; }

.field label {
  display: block;
  font-size: .72rem;
  font-weight: 500;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .09em;
  margin-bottom: .45rem;
}

.input-wrap { position: relative; }

.input-icon {
  position: absolute;
  right: .9rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  opacity: .7;
}

.field input,
.field select {
  width: 100%;
  padding: .72rem 1rem;
  background: var(--slate);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 9px;
  color: var(--light);
  font-size: .95rem;
  font-family: 'DM Sans', sans-serif;
  transition: border-color .2s, box-shadow .2s, background .2s;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

.field select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  cursor: pointer;
}

.field input:focus,
.field select:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(245,158,11,.15);
  background: var(--slate2);
}

.field input::placeholder { color: rgba(148,163,184,.5); }
.field select option { background: #1e293b; color: var(--light); }

/* Chips */
.chips-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.chips-label {
  font-size: .72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .07em;
  font-weight: 500;
  white-space: nowrap;
}

.chip {
  padding: .32rem .85rem;
  background: rgba(245,158,11,.08);
  border: 1px solid rgba(245,158,11,.2);
  border-radius: 20px;
  color: var(--gold);
  font-size: .8rem;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: background .18s, transform .15s, border-color .18s;
  white-space: nowrap;
}

.chip:hover {
  background: rgba(245,158,11,.18);
  border-color: var(--gold);
  transform: translateY(-1px);
}

/* Tabs */
.tabs {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tab-btn {
  padding: .48rem 1.15rem;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.1);
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: .85rem;
  font-family: 'DM Sans', sans-serif;
  transition: all .2s;
  white-space: nowrap;
}

.tab-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(245,158,11,.05);
}

.tab-btn.active {
  background: var(--gold);
  color: #000;
  border-color: var(--gold);
  font-weight: 500;
}

/* Generate Button */
.gen-btn {
  width: 100%;
  padding: .95rem;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold2) 100%);
  color: #000;
  border: none;
  border-radius: 11px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  letter-spacing: .03em;
  transition: transform .15s, opacity .2s, box-shadow .2s;
  box-shadow: 0 4px 24px rgba(245,158,11,.25);
  margin-bottom: 1.25rem;
}

.gen-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(245,158,11,.35);
}

.gen-btn:active:not(:disabled) { transform: translateY(0); }

.gen-btn:disabled {
  opacity: .45;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Output */
.output-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  gap: .5rem;
}

.output-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: var(--gold);
}

.output-actions { display: flex; gap: .5rem; }

.action-btn {
  padding: .35rem .9rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 7px;
  color: var(--muted);
  font-size: .78rem;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all .2s;
}

.action-btn:hover { border-color: var(--gold); color: var(--gold); }
.action-btn.copied { border-color: var(--green); color: var(--green); }

.output-body {
  color: var(--light);
  font-size: .93rem;
  line-height: 1.85;
  white-space: pre-wrap;
  word-break: break-word;
}

.placeholder {
  color: var(--muted);
  font-style: italic;
  font-size: .9rem;
  text-align: center;
  padding: 2.5rem 0;
  opacity: .7;
}

/* Loading */
.loading {
  display: flex;
  align-items: center;
  gap: .9rem;
  padding: 1.8rem 0;
  justify-content: center;
}

.loading-dots { display: flex; gap: 5px; align-items: center; }

.loading-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  display: inline-block;
  animation: bounce 1.2s ease infinite;
}

.loading-dots span:nth-child(2) { animation-delay: .2s; }
.loading-dots span:nth-child(3) { animation-delay: .4s; }

.loading-text { color: var(--muted); font-size: .9rem; font-style: italic; }

/* Error */
.error-box {
  background: rgba(239,68,68,.08);
  border: 1px solid rgba(239,68,68,.25);
  border-radius: 9px;
  padding: 1rem 1.1rem;
  color: #fca5a5;
  font-size: .88rem;
  line-height: 1.6;
}

.error-box strong { color: #f87171; }

/* API Notice */
.api-notice {
  background: rgba(245,158,11,.06);
  border: 1px solid rgba(245,158,11,.2);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.25rem;
  font-size: .85rem;
  color: var(--muted);
  line-height: 1.6;
}

.api-notice strong { color: var(--gold); }

.api-notice a {
  color: var(--gold);
  text-decoration: none;
  border-bottom: 1px solid rgba(245,158,11,.4);
  transition: border-color .2s;
}

.api-notice a:hover { border-color: var(--gold); }

.api-key-row {
  display: flex;
  gap: .6rem;
  margin-top: .75rem;
  align-items: center;
}

.api-key-row input {
  flex: 1;
  padding: .6rem .9rem;
  background: var(--slate);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 8px;
  color: var(--light);
  font-size: .85rem;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  transition: border-color .2s;
}

.api-key-row input:focus { border-color: var(--gold); }
.api-key-row input::placeholder { color: rgba(148,163,184,.4); font-size: .8rem; }

.save-key-btn {
  padding: .6rem 1.1rem;
  background: var(--gold);
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: .82rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity .2s;
}

.save-key-btn:hover { opacity: .85; }

.key-status { font-size: .75rem; margin-top: .4rem; }
.key-status.ok     { color: var(--green); }
.key-status.missing { color: var(--muted); }

/* Footer */
.footer {
  text-align: center;
  margin-top: 2.5rem;
  color: rgba(148,163,184,.4);
  font-size: .78rem;
  letter-spacing: .04em;
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-8px) rotate(5deg); }
}

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-8px); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.result-appear { animation: fadeIn .5s ease both; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track  { background: var(--navy); }
::-webkit-scrollbar-thumb  { background: var(--slate); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--slate2); }
