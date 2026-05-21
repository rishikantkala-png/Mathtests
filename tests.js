const TESTS = [
  {
    id: "dm-test-1",
    title: "Discrete Mathematics — Test 1",
    topics: "Relations · Posets · Lattices · Graphs · Logic · Boolean Algebra",
    duration: 60,
    questions: [
      {
        q: "The number of reflexive relations on a set with n elements is:",
        options: ["$2^{n^2}$", "$2^{n^2-n}$", "$2^{n(n+1)/2}$", "n!"],
        answer: 1,
        explanation: "Reflexive relations must include all n diagonal pairs (a,a). The remaining $n^2-n$ pairs are free. Answer: $2^{n^2-n}$."
      },
      {
        q: "The number of symmetric relations on a set with n elements is:",
        options: ["$2^{n^2-n}$", "$2^{n(n-1)/2}$", "$2^{n(n+1)/2}$", "$3^{n(n-1)/2}$"],
        answer: 2,
        explanation: "The $n$ diagonal pairs are free, and each of the $n(n-1)/2$ off-diagonal pairs must be chosen together. Total: $2^n \\cdot 2^{n(n-1)/2} = 2^{n(n+1)/2}$."
      },
      {
        q: "The number of antisymmetric relations on a set with n elements is:",
        options: ["$2^{n^2-n}$", "$2^n \\cdot 3^{n(n-1)/2}$", "$3^{n(n-1)/2}$", "$2^{n^2}$"],
        answer: 1,
        explanation: "Diagonal pairs: $2^n$ choices. Each off-diagonal pair has 3 choices: $(a,b)$ only, $(b,a)$ only, or neither. Total: $2^n \\cdot 3^{n(n-1)/2}$."
      },
      {
        q: "The number of equivalence relations on {1, 2, 3, 4} is:",
        options: ["5", "10", "15", "14"],
        answer: 2,
        explanation: "Number of equivalence relations = Bell number B₄ = 15."
      },
      {
        q: "The number of equivalence relations on {1, 2, 3, 4, 5} is:",
        options: ["15", "42", "52", "62"],
        answer: 2,
        explanation: "Bell numbers: B₁=1, B₂=2, B₃=5, B₄=15, B₅=52."
      },
      {
        q: "The number of reflexive and symmetric relations on an n-element set is:",
        options: ["$2^{n^2-n}$", "$2^{n(n-1)/2}$", "$2^{n(n+1)/2}$", "$3^{n(n-1)/2}$"],
        answer: 1,
        explanation: "All n diagonal pairs must be in. Each of the n(n−1)/2 off-diagonal pairs is free (chosen together). Total: $2^{n(n-1)/2}$."
      },
      {
        q: "The number of reflexive and antisymmetric relations on an n-element set is:",
        options: ["$2^n \\cdot 3^{n(n-1)/2}$", "$3^{n(n-1)/2}$", "$2^{n(n-1)/2}$", "$2^{n^2-n}$"],
        answer: 1,
        explanation: "All n diagonal pairs are forced in. Each of the n(n−1)/2 off-diagonal pairs has 3 choices. Total: $3^{n(n-1)/2}$."
      },
      {
        q: "Let A = {1,2,3} and R = {(1,2),(2,3),(1,3)}. The relation R is:",
        options: ["Reflexive and transitive", "Transitive but not reflexive", "Symmetric and transitive", "Equivalence relation"],
        answer: 1,
        explanation: "Not reflexive (no (1,1) etc.). Not symmetric ((1,2)∈R but (2,1)∉R). Transitive: (1,2),(2,3)⟹(1,3)∈R ✓."
      },
      {
        q: "The relation R on ℝ defined by aRb ⟺ |a−b| ≤ 1 is:",
        options: ["Equivalence relation", "Reflexive and symmetric but not transitive", "Reflexive and transitive but not symmetric", "Partial order"],
        answer: 1,
        explanation: "Reflexive ✓. Symmetric ✓. Not transitive: 1R2 and 2R3 but |1−3|=2>1, so 1 ∤ R 3."
      },
      {
        q: "Let R be a relation on ℤ defined by aRb ⟺ 3|(a−b). Which is TRUE?",
        options: ["R is a partial order", "R partitions ℤ into 3 equivalence classes", "R is antisymmetric", "R is not transitive"],
        answer: 1,
        explanation: "Congruence mod 3 is an equivalence relation, partitioning ℤ into exactly 3 classes: [0],[1],[2]."
      },
      {
        q: "If R = {(1,2),(2,1),(2,3),(3,2)} on A = {1,2,3}, then R is:",
        options: ["Symmetric but not transitive", "Transitive but not symmetric", "Equivalence relation", "Partial order"],
        answer: 0,
        explanation: "Symmetric ✓. But (1,2),(2,3)∈R yet (1,3)∉R: not transitive."
      },
      {
        q: "Which of the following is always TRUE about relations?",
        options: ["I<sub>A</sub> ⊆ R always", "R ∩ R⁻¹ ⊆ I<sub>A</sub> iff R is antisymmetric", "R∘R ⊇ R iff R is transitive", "R = R⁻¹ iff R is reflexive"],
        answer: 1,
        explanation: "Key theorem: R is antisymmetric ⟺ R ∩ R⁻¹ ⊆ I<sub>A</sub>."
      },
      {
        q: "The identity relation I<sub>A</sub> on set A is:",
        options: ["Equivalence relation only", "Partial order only", "Both equivalence relation and partial order", "Neither"],
        answer: 2,
        explanation: "I<sub>A</sub> is reflexive, symmetric, transitive (equivalence) AND reflexive, antisymmetric, transitive (partial order). Both simultaneously."
      },
      {
        q: "The universal relation on a non-empty set A is:",
        options: ["Always a partial order", "Always an equivalence relation", "Antisymmetric", "Irreflexive"],
        answer: 1,
        explanation: "A×A is reflexive, symmetric, transitive — hence an equivalence relation. Not antisymmetric (both (a,b) and (b,a) are in it for a≠b)."
      },
      {
        q: "If R is both symmetric and antisymmetric on A, then:",
        options: ["R = ∅", "R ⊆ I<sub>A</sub>", "R = A×A", "R = I<sub>A</sub>"],
        answer: 1,
        explanation: "If aRb (symmetric ⟹ bRa) and antisymmetric (aRb ∧ bRa ⟹ a=b), then R can only contain pairs (a,a). So R ⊆ I<sub>A</sub>."
      },
      {
        q: "The relation 'x divides y' on ℤ (including negatives) is:",
        options: ["A partial order", "Symmetric", "An equivalence relation", "Not reflexive"],
        answer: 0,
        explanation: "On ℤ⁺, divisibility is a partial order. On ℤ with negatives: (−2)|2 and 2|(−2) but −2≠2, so antisymmetry fails. On ℤ⁺ it is a partial order."
      },
      {
        q: "In the poset (D₃₆, |) where D₃₆ = divisors of 36, how many elements does it have?",
        options: ["7", "8", "9", "6"],
        answer: 2,
        explanation: "36 = 2²·3². Divisors: {1,2,3,4,6,9,12,18,36}. Count = (2+1)(2+1) = 9."
      },
      {
        q: "In a divisibility poset, the LUB of two elements a and b equals:",
        options: ["a + b", "gcd(a,b)", "lcm(a,b)", "a · b"],
        answer: 2,
        explanation: "In any divisibility poset, LUB = LCM (least common multiple) and GLB = GCD."
      },
      {
        q: "A poset of size mn+1 must contain a chain of size n+1 OR an antichain of size:",
        options: ["n+1", "mn", "m+1", "m"],
        answer: 2,
        explanation: "Erdős–Szekeres / Dilworth corollary: a poset of size mn+1 has a chain of size n+1 or an antichain of size m+1."
      },
      {
        q: "Which of the following is NOT a lattice?",
        options: ["(D₁₂, |)", "(𝒫(S), ⊆)", "({2,3,4,6}, |)", "(D₃₀, |)"],
        answer: 2,
        explanation: "{2,3,4,6} under |: lcm(4,6)=12∉{2,3,4,6}. The pair {4,6} has no join in the set. Not a lattice."
      },
      {
        q: "A complete lattice is one in which:",
        options: ["Every pair has a join and meet", "Every subset has a LUB and GLB", "Every element has a complement", "It is finite and bounded"],
        answer: 1,
        explanation: "A complete lattice requires every subset (not just pairs) to have LUB and GLB."
      },
      {
        q: "The dual of a lattice is obtained by:",
        options: ["Complementing all elements", "Reversing the partial order (≤ becomes ≥)", "Removing the top element", "Adding a new greatest element"],
        answer: 1,
        explanation: "Dual: reverse the partial order (≤ becomes ≥). The Hasse diagram is flipped upside down. Join becomes meet and vice versa."
      },
      {
        q: "In a Boolean lattice with 4 atoms, the total number of elements is:",
        options: ["4", "8", "16", "32"],
        answer: 2,
        explanation: "A Boolean lattice with n atoms ≅ 𝒫({1,…,n}), which has 2ⁿ elements. For 4 atoms: 2⁴ = 16."
      },
      {
        q: "Which of the following is always a distributive lattice?",
        options: ["Any modular lattice", "(𝒫(S), ⊆) for any set S", "Any complemented lattice", "Any chain of length > 3"],
        answer: 1,
        explanation: "𝒫(S) under ⊆ is the canonical distributive lattice (join=∪, meet=∩, distributive law always holds)."
      },
      {
        q: "In the Hasse diagram of (D₃₀, |), how many elements are at the top level (maximal)?",
        options: ["1", "2", "3", "5"],
        answer: 0,
        explanation: "D₃₀ = {1,2,3,5,6,10,15,30}. Greatest element = 30 (unique). Only 1 element at the top."
      },
      {
        q: "A bounded lattice has:",
        options: ["All elements comparable", "A greatest and a least element", "All elements with complements", "Finite number of elements only"],
        answer: 1,
        explanation: "A bounded lattice has a greatest element (top, 1) and a least element (bottom, 0)."
      },
      {
        q: "Every finite lattice is:",
        options: ["Distributive", "Complemented", "Complete and bounded", "A Boolean algebra"],
        answer: 2,
        explanation: "Every finite lattice has a join of all elements (greatest) and meet of all elements (least) — so bounded. Since finite, every subset has LUB/GLB — so complete."
      },
      {
        q: "Which correctly states the Principle of Duality for lattices?",
        options: ["Every theorem holds with variables complemented", "Every theorem holds when ∨ and ∧ are swapped", "Every lattice is isomorphic to its dual", "Dual of a distributive lattice is complemented"],
        answer: 1,
        explanation: "Principle of Duality: swap ∨↔∧ (equivalently, reverse the order). Variables are NOT complemented."
      },
      {
        q: "The number of edges in the complete bipartite graph K₄,₅ is:",
        options: ["9", "20", "16", "25"],
        answer: 1,
        explanation: "K_{m,n} has m×n edges. K₄,₅ = 4×5 = 20."
      },
      {
        q: "A graph G has 10 vertices each of degree 4. The number of edges is:",
        options: ["40", "20", "24", "16"],
        answer: 1,
        explanation: "Handshaking lemma: Σdeg = 10×4 = 40 = 2|E|. So |E| = 20."
      },
      {
        q: "The number of spanning trees of K₅ is:",
        options: ["25", "64", "125", "16"],
        answer: 2,
        explanation: "Cayley's formula: spanning trees of Kₙ = n^(n−2). For K₅: 5^3 = 125."
      },
      {
        q: "A connected graph with 8 vertices and 7 edges must be a:",
        options: ["Complete graph", "Tree", "Bipartite graph", "Eulerian graph"],
        answer: 1,
        explanation: "Connected graph with n vertices and n−1 edges with no cycles = tree. 8 vertices, 7 edges = tree."
      },
      {
        q: "For a connected planar graph with V=8 and E=14, the number of regions R is:",
        options: ["6", "8", "7", "9"],
        answer: 1,
        explanation: "Euler's formula: V−E+R=2. 8−14+R=2 ⟹ R=8."
      },
      {
        q: "Which pair of graphs are both non-planar?",
        options: ["K₄ and K₂,₃", "K₅ and K₃,₃", "K₃ and K₂,₂", "K₄ and K₃,₂"],
        answer: 1,
        explanation: "K₅ and K₃,₃ are the two fundamental non-planar graphs (Kuratowski's theorem)."
      },
      {
        q: "The Petersen graph has 10 vertices and 15 edges. Using E ≤ 3V−6, is it planar?",
        options: ["Yes, since 15 ≤ 3(10)−6 = 24", "No — the inequality is necessary but not sufficient; Petersen graph is non-planar", "Yes, since it is 3-colourable", "Cannot be determined"],
        answer: 1,
        explanation: "15 ≤ 24 satisfies the inequality, but this is only a necessary condition. The Petersen graph is actually non-planar (contains K₃,₃ subdivision)."
      },
      {
        q: "Does K₃,₃ have an Eulerian circuit?",
        options: ["Yes, because it is bipartite", "No — all 6 vertices have degree 3 (odd), so no Eulerian circuit exists", "Yes, because all vertices have even degree", "Yes, because it is connected"],
        answer: 1,
        explanation: "K₃,₃: every vertex has degree 3 (odd). Eulerian circuit requires all even degrees. Since all degrees are odd, no Eulerian circuit exists."
      },
      {
        q: "A tree with 12 vertices has how many edges?",
        options: ["12", "10", "11", "13"],
        answer: 2,
        explanation: "Tree with n vertices has exactly n−1 edges. 12 vertices ⟹ 11 edges."
      },
      {
        q: "Which of the following is TRUE about every tree?",
        options: ["It has an Eulerian circuit", "It is bipartite and planar", "Its chromatic number is 3", "It has at least one cycle"],
        answer: 1,
        explanation: "Every tree is bipartite (no odd cycles) and planar. Chromatic number = 2. Trees have no cycles by definition."
      },
      {
        q: "Which of the following is a tautology?",
        options: ["p ∧ ¬p", "p → (p ∨ q)", "p ∨ q", "(p → q) → p"],
        answer: 1,
        explanation: "p → (p ∨ q): If p is true, p∨q is certainly true. If p is false, implication is vacuously true. Always true — tautology (Addition rule)."
      },
      {
        q: "Which of the following is a contradiction?",
        options: ["p ∨ ¬p", "(p → q) ∧ ¬q", "(p ∧ q) ∧ (¬p ∨ ¬q)", "p → p"],
        answer: 2,
        explanation: "(p∧q) ∧ (¬p∨¬q) = (p∧q) ∧ ¬(p∧q) = always false. Contradiction."
      },
      {
        q: "Which of the following is NOT a tautology?",
        options: ["p ∨ ¬p", "(p ∧ q) → p", "p → (q → p)", "p → (p ∧ q)"],
        answer: 3,
        explanation: "p → (p∧q): Take p=T, q=F: T→(T∧F)=T→F=F. Not always true. Not a tautology."
      },
      {
        q: "¬(p → q) is logically equivalent to:",
        options: ["¬p ∨ q", "p ∧ ¬q", "¬p ∧ q", "p ∨ ¬q"],
        answer: 1,
        explanation: "¬(p→q) ≡ ¬(¬p∨q) ≡ p∧¬q. The only way an implication is false: true hypothesis, false conclusion."
      },
      {
        q: "Which of the following pairs are logically equivalent?",
        options: ["p→q and q→p", "¬(p∧q) and ¬p∧¬q", "(p→q)∧(q→p) and p↔q", "p∨q and p∧q"],
        answer: 2,
        explanation: "(p→q)∧(q→p) ≡ p↔q by definition of biconditional."
      },
      {
        q: "(p → q) ∧ (p → r) is logically equivalent to:",
        options: ["p → (q ∨ r)", "p → (q ∧ r)", "(p ∨ q) → r", "p ∧ (q → r)"],
        answer: 1,
        explanation: "(p→q)∧(p→r) ≡ (¬p∨q)∧(¬p∨r) ≡ ¬p∨(q∧r) ≡ p→(q∧r)."
      },
      {
        q: "Which is the contrapositive of 'If it rains, the match is cancelled'?",
        options: ["If the match is cancelled, it rains", "If it does not rain, the match is not cancelled", "If the match is not cancelled, it does not rain", "If the match is cancelled, it does not rain"],
        answer: 2,
        explanation: "Original: p→q. Contrapositive: ¬q→¬p = 'If match is NOT cancelled, it did NOT rain'."
      },
      {
        q: "The Boolean expression ab + ab' simplifies to:",
        options: ["b", "a + b", "a", "a'"],
        answer: 2,
        explanation: "ab + ab' = a(b+b') = a·1 = a. Factoring out a and using complement law."
      },
      {
        q: "Which Boolean identity is De Morgan's law?",
        options: ["a + ab = a", "(a+b)' = a'·b'", "a + a' = 1", "a·(b+c) = ab + ac"],
        answer: 1,
        explanation: "De Morgan: (a+b)' = a'·b' and (ab)' = a'+b'."
      },
      {
        q: "The number of Boolean functions of 3 variables is:",
        options: ["8", "16", "64", "256"],
        answer: 3,
        explanation: "Boolean functions of n variables: 2^(2^n). For n=3: 2^(2³) = 2^8 = 256."
      },
      {
        q: "A NOR gate followed by a NOT gate (single input a) gives:",
        options: ["a'", "a", "0", "1"],
        answer: 1,
        explanation: "NOR(a,a) = (a+a)' = a'. Then NOT(a') = (a')' = a. So NOR→NOT on same input returns original signal."
      },
      {
        q: "Which of the following correctly identifies both universal gates?",
        options: ["AND and OR", "NAND and NOR", "NOT and XOR", "OR and NOR"],
        answer: 1,
        explanation: "NAND and NOR are both universal gates — any Boolean function can be built using only NAND or only NOR gates."
      }
    ]
  }
  
  // ... existing tests ...
  {
    id: "unit2-ode-pde-1",
    title: "Unit 2: ODE & PDE — Test 1",
    topics: "Laplace Transform · Inverse Laplace · Series Solutions · Bessel & Legendre Functions",
    duration: 60,
    questions: [
      // ── LAPLACE TRANSFORM ──────────────────────────────────────────────
      {
        q: "The Laplace transform is defined as $F(p) = \\int_0^\\infty e^{-px} f(x)\\,dx$, provided the integral converges for:",
        options: ["$p < \\gamma$", "$p > \\gamma$", "$p = 0$", "all real $p$"],
        answer: 1,
        explanation: "If $f(x)$ is of exponential order $\\gamma$, the Laplace integral converges for $p > \\gamma$."
      },
      {
        q: "Which of the following functions does NOT have a Laplace transform?",
        options: ["$e^{x^2}$", "$\\sin x$", "$e^{2x}$", "$x^3$"],
        answer: 0,
        explanation: "$e^{x^2}$ grows faster than any exponential $e^{\\gamma x}$, so it is not of exponential order and has no Laplace transform."
      },
      {
        q: "The Laplace transform $\\mathcal{L}\\{x^n\\}$ equals:",
        options: ["$\\dfrac{n!}{p^n}$", "$\\dfrac{n!}{p^{n+1}}$", "$\\dfrac{(n-1)!}{p^n}$", "$\\dfrac{\\Gamma(n)}{p^n}$"],
        answer: 1,
        explanation: "$\\mathcal{L}\\{x^n\\} = \\dfrac{n!}{p^{n+1}}$ for $n = 0,1,2,\\ldots$ using the Gamma function with $\\Gamma(n+1)=n!$."
      },
      {
        q: "The value of $\\mathcal{L}\\{e^{ax}\\}$ is:",
        options: ["$\\dfrac{1}{p+a}$", "$\\dfrac{1}{p-a}$", "$\\dfrac{a}{p^2-a^2}$", "$\\dfrac{p}{p^2-a^2}$"],
        answer: 1,
        explanation: "$\\mathcal{L}\\{e^{ax}\\} = \\int_0^\\infty e^{-(p-a)x}dx = \\dfrac{1}{p-a}$, valid for $p > a$."
      },
      {
        q: "$\\mathcal{L}\\{\\sin ax\\}$ equals:",
        options: ["$\\dfrac{p}{p^2+a^2}$", "$\\dfrac{a}{p^2-a^2}$", "$\\dfrac{a}{p^2+a^2}$", "$\\dfrac{p}{p^2-a^2}$"],
        answer: 2,
        explanation: "$\\mathcal{L}\\{\\sin ax\\} = \\dfrac{a}{p^2+a^2}$. Remember: $\\sin$ gives $a$ in numerator, $\\cos$ gives $p$."
      },
      {
        q: "$\\mathcal{L}\\{\\cosh ax\\}$ equals:",
        options: ["$\\dfrac{a}{p^2-a^2}$", "$\\dfrac{p}{p^2+a^2}$", "$\\dfrac{a}{p^2+a^2}$", "$\\dfrac{p}{p^2-a^2}$"],
        answer: 3,
        explanation: "$\\mathcal{L}\\{\\cosh ax\\} = \\dfrac{p}{p^2-a^2}$. Hyperbolic functions use $p^2-a^2$; $\\cosh$ gives $p$ in numerator."
      },
      {
        q: "By the first shifting theorem (p-shifting), $\\mathcal{L}\\{e^{2x}\\sin 3x\\}$ equals:",
        options: ["$\\dfrac{3}{(p+2)^2+9}$", "$\\dfrac{3}{(p-2)^2+9}$", "$\\dfrac{p-2}{(p-2)^2+9}$", "$\\dfrac{3}{p^2+9}e^{-2p}$"],
        answer: 1,
        explanation: "p-shifting: multiply by $e^{ax}$ replaces $p$ by $p-a$. Here $a=2$: $\\dfrac{3}{(p-2)^2+9}$."
      },
      {
        q: "The Laplace transform of $f'(x)$ is:",
        options: ["$pF(p) + f(0)$", "$pF(p) - f(0)$", "$p^2F(p) - pf(0)$", "$F(p)/p$"],
        answer: 1,
        explanation: "$\\mathcal{L}\\{f'(x)\\} = pF(p) - f(0)$. Initial condition $f(0)$ appears automatically."
      },
      {
        q: "$\\mathcal{L}\\left\\{\\int_0^x f(t)\\,dt\\right\\}$ equals:",
        options: ["$pF(p)$", "$F(p) - f(0)/p$", "$F(p)/p$", "$F'(p)$"],
        answer: 2,
        explanation: "Integrating in $x$-domain divides by $p$ in $p$-domain: $\\mathcal{L}\\left\\{\\int_0^x f(t)dt\\right\\} = F(p)/p$."
      },
      {
        q: "$\\mathcal{L}\\{x f(x)\\}$ equals:",
        options: ["$F'(p)$", "$-F'(p)$", "$F(p)/p$", "$pF(p)$"],
        answer: 1,
        explanation: "Multiplying by $x$ in $x$-domain differentiates and negates in $p$-domain: $\\mathcal{L}\\{xf(x)\\} = -F'(p)$."
      },
      {
        q: "$\\mathcal{L}\\left\\{\\dfrac{\\sin x}{x}\\right\\}$ equals:",
        options: ["$\\arctan p$", "$\\dfrac{\\pi}{2} + \\arctan p$", "$\\dfrac{\\pi}{2} - \\arctan p$", "$\\ln(p^2+1)$"],
        answer: 2,
        explanation: "Using division by $x$: $\\int_p^\\infty \\dfrac{du}{u^2+1} = \\dfrac{\\pi}{2} - \\arctan p$. Setting $p=0$ gives the Dirichlet integral $\\pi/2$."
      },
      {
        q: "The Dirichlet integral $\\displaystyle\\int_0^\\infty \\dfrac{\\sin x}{x}\\,dx$ equals:",
        options: ["$0$", "$1$", "$\\dfrac{\\pi}{4}$", "$\\dfrac{\\pi}{2}$"],
        answer: 3,
        explanation: "From $\\mathcal{L}\\{\\sin x/x\\} = \\pi/2 - \\arctan p$, putting $p=0$: integral $= \\pi/2$."
      },
      {
        q: "The initial value theorem states $\\lim_{x \\to 0^+} f(x)$ equals:",
        options: ["$\\lim_{p\\to 0} F(p)$", "$\\lim_{p\\to\\infty} pF(p)$", "$\\lim_{p\\to 0} pF(p)$", "$\\lim_{p\\to\\infty} F(p)$"],
        answer: 1,
        explanation: "Initial value theorem: $f(0^+) = \\lim_{p\\to\\infty} pF(p)$. Large $p$ corresponds to small $x$ (initial behaviour)."
      },
      {
        q: "The final value theorem $\\lim_{x\\to\\infty}f(x) = \\lim_{p\\to 0}pF(p)$ is valid when:",
        options: ["$F(p)$ has poles on imaginary axis", "$f(x)$ has a finite limit as $x\\to\\infty$", "$f(x) = \\sin x$", "always valid"],
        answer: 1,
        explanation: "Final value theorem requires $f(x)$ to actually converge as $x\\to\\infty$. It fails for oscillating functions like $\\sin x$."
      },
      {
        q: "$\\mathcal{L}\\{x\\sin ax\\}$ equals:",
        options: ["$\\dfrac{a}{(p^2+a^2)^2}$", "$\\dfrac{p^2-a^2}{(p^2+a^2)^2}$", "$\\dfrac{2ap}{(p^2+a^2)^2}$", "$\\dfrac{2a}{(p^2+a^2)^2}$"],
        answer: 2,
        explanation: "$\\mathcal{L}\\{x\\sin ax\\} = -\\dfrac{d}{dp}\\left(\\dfrac{a}{p^2+a^2}\\right) = \\dfrac{2ap}{(p^2+a^2)^2}$."
      },
      {
        q: "Which of the following does NOT have a Laplace transform using the division by $x$ formula?",
        options: ["$\\dfrac{\\sin ax}{x}$", "$\\dfrac{1-e^{-x}}{x}$", "$\\dfrac{\\cos ax}{x}$", "$\\dfrac{e^{ax}-e^{bx}}{x}$"],
        answer: 2,
        explanation: "$\\lim_{x\\to 0^+}\\dfrac{\\cos ax}{x} = \\infty$, so the limit condition fails. The formula requires $\\lim_{x\\to 0^+}f(x)/x$ to be finite."
      },
      // ── INVERSE LAPLACE ────────────────────────────────────────────────
      {
        q: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{p^4}\\right\\}$ equals:",
        options: ["$x^3$", "$\\dfrac{x^3}{6}$", "$\\dfrac{x^4}{24}$", "$3x^2$"],
        answer: 1,
        explanation: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{p^{n+1}}\\right\\} = \\dfrac{x^n}{n!}$. Here $n=3$: $\\dfrac{x^3}{3!} = \\dfrac{x^3}{6}$."
      },
      {
        q: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{(p-2)^3}\\right\\}$ equals:",
        options: ["$x^2 e^{2x}$", "$\\dfrac{x^2 e^{2x}}{2}$", "$2xe^{2x}$", "$\\dfrac{x e^{2x}}{2}$"],
        answer: 1,
        explanation: "p-shifting: $\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{p^3}\\right\\} = \\dfrac{x^2}{2}$, then replace $p\\to p-2$: multiply by $e^{2x}$. Answer: $\\dfrac{x^2 e^{2x}}{2}$."
      },
      {
        q: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{p+1}{(p+1)^2+4}\\right\\}$ equals:",
        options: ["$\\cos 2x$", "$e^{-x}\\sin 2x$", "$e^{x}\\cos 2x$", "$e^{-x}\\cos 2x$"],
        answer: 3,
        explanation: "Recognise pattern $\\dfrac{p-a}{(p-a)^2+b^2} = e^{ax}\\cos bx$. Here $a=-1$, $b=2$: $e^{-x}\\cos 2x$."
      },
      {
        q: "Using Heaviside's formula, $\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{(p-1)(p-2)}\\right\\}$ equals:",
        options: ["$e^x + e^{2x}$", "$e^x - e^{2x}$", "$e^{2x} - e^x$", "$-e^x + 2e^{2x}$"],
        answer: 2,
        explanation: "Residue at $p=1$: $\\dfrac{e^x}{1-2} = -e^x$. Residue at $p=2$: $\\dfrac{e^{2x}}{2-1} = e^{2x}$. Sum: $e^{2x}-e^x$."
      },
      {
        q: "The convolution of $f(x)$ and $g(x)$ is defined as:",
        options: ["$f(x)\\cdot g(x)$", "$\\displaystyle\\int_{-\\infty}^{\\infty}f(t)g(x-t)\\,dt$", "$\\displaystyle\\int_0^x f(t)g(x-t)\\,dt$", "$f(g(x))$"],
        answer: 2,
        explanation: "Convolution for Laplace: $(f*g)(x) = \\int_0^x f(t)g(x-t)\\,dt$ (lower limit 0, not $-\\infty$)."
      },
      {
        q: "By the convolution theorem, $\\mathcal{L}^{-1}\\{F(p)\\cdot G(p)\\}$ equals:",
        options: ["$f(x)\\cdot g(x)$", "$f(x) + g(x)$", "$\\displaystyle\\int_0^x f(t)g(x-t)\\,dt$", "$f(x-t)g(t)$"],
        answer: 2,
        explanation: "Convolution theorem: $\\mathcal{L}^{-1}\\{F\\cdot G\\} = \\int_0^x f(t)g(x-t)\\,dt = f*g$."
      },
      {
        q: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{(p^2+1)^2}\\right\\}$ equals:",
        options: ["$\\dfrac{\\sin x - x\\cos x}{2}$", "$\\dfrac{x\\sin x}{2}$", "$\\sin x\\cos x$", "$\\dfrac{\\cos x - x\\sin x}{2}$"],
        answer: 0,
        explanation: "Using convolution with $f=g=\\sin x$: $\\int_0^x \\sin t\\sin(x-t)\\,dt = \\dfrac{\\sin x - x\\cos x}{2}$."
      },
      {
        q: "$\\mathcal{L}^{-1}\\left\\{\\dfrac{e^{-2p}}{p^2+1}\\right\\}$ equals:",
        options: ["$\\sin(x-2)$", "$e^{-2x}\\sin x$", "$\\sin(x-2)\\cdot u(x-2)$", "$u(x-2)\\sin x$"],
        answer: 2,
        explanation: "x-shifting: factor $e^{-ap}$ delays by $a$. Here $a=2$: $\\mathcal{L}^{-1}\\{1/(p^2+1)\\} = \\sin x$, so result is $\\sin(x-2)\\cdot u(x-2)$."
      },
      // ── SERIES SOLUTIONS ───────────────────────────────────────────────
      {
        q: "For the ODE $y'' + P(x)y' + Q(x)y = 0$, a point $x=x_0$ is ordinary if:",
        options: ["$P(x_0) = 0$", "$P(x)$ and $Q(x)$ are analytic at $x_0$", "$P(x_0)$ is undefined", "$Q(x_0) = \\infty$"],
        answer: 1,
        explanation: "$x_0$ is an ordinary point if both $P(x)$ and $Q(x)$ are analytic (have convergent power series) at $x_0$."
      },
      {
        q: "The point $x=0$ for Bessel's equation $x^2y''+xy'+(x^2-n^2)y=0$ is:",
        options: ["Ordinary point", "Irregular singular point", "Regular singular point", "Not a singular point"],
        answer: 2,
        explanation: "$P(x)=1/x$ fails at $x=0$, but $xP(x)=1$ and $x^2Q(x)=x^2-n^2$ are both analytic. So $x=0$ is a regular singular point."
      },
      {
        q: "In the Frobenius method, the solution is assumed of the form:",
        options: ["$y = \\sum_{n=0}^\\infty a_n x^n$", "$y = e^{rx}\\sum_{n=0}^\\infty a_n x^n$", "$y = x^r\\sum_{n=0}^\\infty a_n x^n$", "$y = \\ln x \\sum_{n=0}^\\infty a_n x^n$"],
        answer: 2,
        explanation: "Frobenius method assumes $y = x^r\\sum_{n=0}^\\infty a_n x^n$ where $r$ is determined by the indicial equation."
      },
      {
        q: "The indicial equation for $2xy''+y'+xy=0$ at $x=0$ is:",
        options: ["$r^2 - r = 0$", "$r(r-\\frac{1}{2}) = 0$", "$r^2 + r = 0$", "$2r^2 - r = 0$"],
        answer: 1,
        explanation: "$p_0 = 1/2$, $q_0=0$. Indicial eq: $r(r-1)+\\frac{1}{2}r+0=0 \\Rightarrow r^2-\\frac{r}{2}=0 \\Rightarrow r(r-\\frac{1}{2})=0$."
      },
      {
        q: "If the roots of the indicial equation differ by an integer, the second solution:",
        options: ["Is always a pure Frobenius series", "May contain a $\\ln x$ term", "Does not exist", "Is always a polynomial"],
        answer: 1,
        explanation: "When roots differ by an integer, the second Frobenius solution may involve $\\ln x$. Equal roots always give $\\ln x$."
      },
      {
        q: "The power series solution converges at least up to:",
        options: ["$x = \\infty$", "The nearest singular point from the centre", "$x = 1$", "The origin always"],
        answer: 1,
        explanation: "The radius of convergence of the power series solution extends at least to the nearest singular point of the ODE from the centre of expansion."
      },
      // ── PDE CLASSIFICATION ────────────────────────────────────────────
      {
        q: "For $Au_{xx}+Bu_{xy}+Cu_{yy}=0$, the PDE is hyperbolic when:",
        options: ["$B^2-4AC < 0$", "$B^2-4AC = 0$", "$B^2-4AC > 0$", "$B^2+4AC > 0$"],
        answer: 2,
        explanation: "Discriminant $\\Delta = B^2-4AC$: $>0$ hyperbolic, $=0$ parabolic, $<0$ elliptic. Same sign rule as conic sections."
      },
      {
        q: "The heat equation $u_t = ku_{xx}$ is classified as:",
        options: ["Elliptic", "Hyperbolic", "Parabolic", "None of these"],
        answer: 2,
        explanation: "Heat equation: $A=k, B=0, C=0$. $\\Delta = 0-0 = 0$. Parabolic."
      },
      {
        q: "Classify $u_{xx}+4u_{xy}+4u_{yy}=0$:",
        options: ["Elliptic", "Parabolic", "Hyperbolic", "Cannot be classified"],
        answer: 1,
        explanation: "$A=1,B=4,C=4$. $\\Delta = 16-16=0$. Parabolic."
      },
      {
        q: "The Laplace equation $u_{xx}+u_{yy}=0$ is:",
        options: ["Parabolic", "Hyperbolic", "Elliptic", "Mixed type"],
        answer: 2,
        explanation: "$A=1,B=0,C=1$. $\\Delta=0-4=-4<0$. Elliptic. Models steady-state phenomena."
      },
      {
        q: "The wave equation $u_{tt} = c^2 u_{xx}$ is:",
        options: ["Parabolic", "Elliptic", "Hyperbolic", "Parabolic for $c>1$ only"],
        answer: 2,
        explanation: "$A=c^2,B=0,C=-1$. $\\Delta = 0-4(c^2)(-1)=4c^2>0$. Hyperbolic for all $c\\neq 0$."
      },
      {
        q: "Classify $u_{xx}-2u_{xy}+u_{yy}=0$:",
        options: ["Elliptic", "Parabolic", "Hyperbolic", "Depends on $x,y$"],
        answer: 1,
        explanation: "$A=1,B=-2,C=1$. $\\Delta=4-4=0$. Parabolic."
      },
      {
        q: "The standard solution of the heat equation $u_t=ku_{xx}$ on $[0,L]$ with $u(0,t)=u(L,t)=0$ is:",
        options: ["$\\sum A_n\\cos\\frac{n\\pi x}{L}e^{-k(n\\pi/L)^2t}$", "$\\sum B_n\\sin\\frac{n\\pi x}{L}e^{-k(n\\pi/L)^2t}$", "$\\sum B_n e^{n\\pi x/L}e^{-kt}$", "$\\sum A_n\\sin\\frac{n\\pi t}{L}e^{-kx}$"],
        answer: 1,
        explanation: "Separation of variables with zero Dirichlet BCs gives $\\sin$ eigenfunctions and exponential decay in $t$."
      },
      {
        q: "The wave equation on a finite string requires how many initial conditions?",
        options: ["None", "One ($u$ at $t=0$)", "Two ($u$ and $u_t$ at $t=0$)", "Three"],
        answer: 2,
        explanation: "Wave equation is second order in $t$, so needs two initial conditions: $u(x,0)=f(x)$ and $u_t(x,0)=g(x)$."
      },
      {
        q: "The maximum principle for the Laplace equation states:",
        options: ["Maximum occurs at an interior point", "Maximum occurs on the boundary", "Maximum is always zero", "Maximum occurs at origin"],
        answer: 1,
        explanation: "A harmonic function ($\\nabla^2 u=0$) attains its maximum and minimum values on the boundary, not in the interior."
      },
      // ── BESSEL FUNCTIONS ──────────────────────────────────────────────
      {
        q: "$J_0(0)$ equals:",
        options: ["$0$", "$1$", "$\\infty$", "$1/2$"],
        answer: 1,
        explanation: "$J_0(0)=1$ is the only Bessel function of the first kind that is non-zero at the origin."
      },
      {
        q: "$J_n(0)$ for $n \\geq 1$ equals:",
        options: ["$1$", "$n$", "$0$", "$\\infty$"],
        answer: 2,
        explanation: "From the series: $J_n(0) = 0$ for all $n\\geq 1$ since the lowest power is $x^n$."
      },
      {
        q: "$J_{1/2}(x)$ equals:",
        options: ["$\\sqrt{\\dfrac{2}{\\pi x}}\\cos x$", "$\\sqrt{\\dfrac{\\pi}{2x}}\\sin x$", "$\\sqrt{\\dfrac{2}{\\pi x}}\\sin x$", "$\\sqrt{\\dfrac{2}{\\pi x}}\\tan x$"],
        answer: 2,
        explanation: "$J_{1/2}(x) = \\sqrt{\\dfrac{2}{\\pi x}}\\sin x$. Similarly $J_{-1/2}(x) = \\sqrt{\\dfrac{2}{\\pi x}}\\cos x$."
      },
      {
        q: "The recurrence relation for Bessel functions is:",
        options: ["$J_{n+1} - J_{n-1} = \\dfrac{2n}{x}J_n$", "$J_{n-1} + J_{n+1} = \\dfrac{2n}{x}J_n$", "$J_{n-1}\\cdot J_{n+1} = J_n^2$", "$J_{n+1} = J_n - J_{n-1}$"],
        answer: 1,
        explanation: "$J_{n-1}(x)+J_{n+1}(x) = \\dfrac{2n}{x}J_n(x)$ is the standard recurrence. Used to find $J_{3/2}$ from $J_{1/2}$ and $J_{-1/2}$."
      },
      {
        q: "$J_0'(x)$ equals:",
        options: ["$J_1(x)$", "$-J_1(x)$", "$J_{-1}(x)$", "$-J_0(x)$"],
        answer: 1,
        explanation: "$\\dfrac{d}{dx}[J_0(x)] = -J_1(x)$. This is from recurrence relation (3) with $n=0$: $\\dfrac{d}{dx}[J_0] = -J_1$."
      },
      {
        q: "$J_{-n}(x)$ for integer $n$ equals:",
        options: ["$J_n(x)$", "$-J_n(x)$", "$(-1)^n J_n(x)$", "$(-1)^{n+1}J_n(x)$"],
        answer: 2,
        explanation: "$J_{-n}(x) = (-1)^n J_n(x)$ for integer $n$. So $J_{-1} = -J_1$, $J_{-2} = J_2$, etc."
      },
      {
        q: "The first zero of $J_0(x)$ occurs at approximately:",
        options: ["$1.202$", "$2.405$", "$3.832$", "$5.520$"],
        answer: 1,
        explanation: "First zero of $J_0 \\approx 2.405$, second $\\approx 5.520$. First zero of $J_1 \\approx 3.832$."
      },
      {
        q: "$\\mathcal{L}\\{J_0(x)\\}$ equals:",
        options: ["$\\dfrac{1}{p^2+1}$", "$\\dfrac{1}{\\sqrt{p^2+1}}$", "$\\dfrac{p}{p^2+1}$", "$\\dfrac{1}{p\\sqrt{p^2+1}}$"],
        answer: 1,
        explanation: "$\\mathcal{L}\\{J_0(x)\\} = \\dfrac{1}{\\sqrt{p^2+1}}$. More generally $\\mathcal{L}\\{J_0(ax)\\} = \\dfrac{1}{\\sqrt{p^2+a^2}}$."
      },
      {
        q: "Using $J_0'(x) = -J_1(x)$, $\\mathcal{L}\\{J_1(x)\\}$ equals:",
        options: ["$\\dfrac{1}{\\sqrt{p^2+1}}$", "$\\dfrac{p}{\\sqrt{p^2+1}}$", "$1 - \\dfrac{p}{\\sqrt{p^2+1}}$", "$\\dfrac{p}{\\sqrt{p^2+1}} - 1$"],
        answer: 2,
        explanation: "$\\mathcal{L}\\{J_0'\\} = p\\cdot\\dfrac{1}{\\sqrt{p^2+1}}-1$. Since $J_1=-J_0'$: $\\mathcal{L}\\{J_1\\}=1-\\dfrac{p}{\\sqrt{p^2+1}}$."
      },
      {
        q: "The integral representation of $J_n(x)$ for integer $n$ is:",
        options: ["$\\dfrac{1}{2\\pi}\\int_0^{2\\pi}e^{inx}d\\theta$", "$\\dfrac{1}{\\pi}\\int_0^\\pi\\cos(n\\theta-x\\sin\\theta)\\,d\\theta$", "$\\dfrac{1}{\\pi}\\int_0^\\pi\\sin(n\\theta)\\,d\\theta$", "$\\dfrac{1}{2}\\int_{-1}^1 e^{ixt}dt$"],
        answer: 1,
        explanation: "$J_n(x) = \\dfrac{1}{\\pi}\\int_0^\\pi\\cos(n\\theta-x\\sin\\theta)\\,d\\theta$. For $n=0$: $J_0(x)=\\dfrac{1}{\\pi}\\int_0^\\pi\\cos(x\\sin\\theta)\\,d\\theta$."
      },
      // ── LEGENDRE POLYNOMIALS ──────────────────────────────────────────
      {
        q: "The Legendre polynomial $P_2(x)$ equals:",
        options: ["$x^2$", "$\\dfrac{3x^2+1}{2}$", "$\\dfrac{3x^2-1}{2}$", "$\\dfrac{x^2-1}{2}$"],
        answer: 2,
        explanation: "$P_2(x) = \\dfrac{1}{2}(3x^2-1)$. Verify: $P_2(1)=1$ ✓, $P_2(-1)=1=(-1)^2$ ✓."
      },
      {
        q: "$P_n(1)$ equals:",
        options: ["$0$", "$n$", "$(-1)^n$", "$1$"],
        answer: 3,
        explanation: "$P_n(1) = 1$ for all $n \\geq 0$. This is a direct consequence of the generating function evaluated at $x=1$."
      },
      {
        q: "$P_n(-1)$ equals:",
        options: ["$1$", "$-1$", "$(-1)^n$", "$(-1)^{n+1}$"],
        answer: 2,
        explanation: "$P_n(-1) = (-1)^n$. Even order: $P_n(-1)=1$; odd order: $P_n(-1)=-1$."
      },
      {
        q: "Rodrigues' formula for Legendre polynomials is:",
        options: ["$P_n(x) = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$", "$P_n(x) = \\dfrac{1}{2^n n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$", "$P_n(x) = \\dfrac{1}{2^n}\\dfrac{d^n}{dx^n}x^n$", "$P_n(x) = \\dfrac{(-1)^n}{2^n n!}\\dfrac{d^n}{dx^n}(1-x^2)^n$"],
        answer: 1,
        explanation: "$P_n(x) = \\dfrac{1}{2^n n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$. The factor $2^n n!$ ensures $P_n(1)=1$."
      },
      {
        q: "Bonnet's recurrence relation is:",
        options: ["$P_{n+1} = xP_n - P_{n-1}$", "$(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$", "$nP_{n+1} = (2n-1)xP_n - (n-1)P_{n-1}$", "$P_{n+1} = 2xP_n - P_{n-1}$"],
        answer: 1,
        explanation: "Bonnet's formula: $(n+1)P_{n+1}(x) = (2n+1)xP_n(x) - nP_{n-1}(x)$. Used to compute higher $P_n$ from lower ones."
      },
      {
        q: "$\\displaystyle\\int_{-1}^1 P_m(x)P_n(x)\\,dx$ when $m \\neq n$ equals:",
        options: ["$1$", "$\\dfrac{2}{2n+1}$", "$0$", "$\\dfrac{1}{n+m}$"],
        answer: 2,
        explanation: "Orthogonality of Legendre polynomials: $\\int_{-1}^1 P_m P_n\\,dx = 0$ when $m\\neq n$."
      },
      {
        q: "$\\displaystyle\\int_{-1}^1 [P_n(x)]^2\\,dx$ equals:",
        options: ["$1$", "$\\dfrac{1}{2n+1}$", "$\\dfrac{2}{2n+1}$", "$\\dfrac{2n+1}{2}$"],
        answer: 2,
        explanation: "$\\int_{-1}^1[P_n]^2\\,dx = \\dfrac{2}{2n+1}$. So $\\|P_n\\| = \\sqrt{\\dfrac{2}{2n+1}}$."
      },
      {
        q: "In the Fourier-Legendre expansion $f(x)=\\sum c_n P_n(x)$, the coefficient $c_n$ is:",
        options: ["$\\displaystyle\\int_{-1}^1 f(x)P_n(x)\\,dx$", "$\\dfrac{2n+1}{2}\\displaystyle\\int_{-1}^1 f(x)P_n(x)\\,dx$", "$\\dfrac{1}{2}\\displaystyle\\int_{-1}^1 f(x)P_n(x)\\,dx$", "$n\\displaystyle\\int_{-1}^1 f(x)P_n(x)\\,dx$"],
        answer: 1,
        explanation: "$c_n = \\dfrac{2n+1}{2}\\int_{-1}^1 f(x)P_n(x)\\,dx$. The factor $\\dfrac{2n+1}{2} = \\dfrac{1}{\\|P_n\\|^2}$ comes from orthogonality."
      },
      {
        q: "The Fourier-Legendre expansion of $f(x) = x^2$ is:",
        options: ["$P_2(x)$", "$P_0(x)+P_2(x)$", "$\\dfrac{1}{3}P_0(x)+\\dfrac{2}{3}P_2(x)$", "$\\dfrac{2}{3}P_0(x)+\\dfrac{1}{3}P_2(x)$"],
        answer: 2,
        explanation: "$x^2 = \\dfrac{1}{3}P_0+\\dfrac{2}{3}P_2$. Verify: $\\dfrac{1}{3}+\\dfrac{2}{3}\\cdot\\dfrac{3x^2-1}{2} = \\dfrac{1}{3}+x^2-\\dfrac{1}{3} = x^2$ ✓"
      }
    ]
  }
];

