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
        options: ["I_A ⊆ R always", "R ∩ R⁻¹ ⊆ I_A iff R is antisymmetric", "R∘R ⊇ R iff R is transitive", "R = R⁻¹ iff R is reflexive"],
        answer: 1,
        explanation: "Key theorem: R is antisymmetric ⟺ R ∩ R⁻¹ ⊆ I_A."
      },
      {
        q: "The identity relation I_A on set A is:",
        options: ["Equivalence relation only", "Partial order only", "Both equivalence relation and partial order", "Neither"],
        answer: 2,
        explanation: "I_A is reflexive, symmetric, transitive (equivalence) AND reflexive, antisymmetric, transitive (partial order). Both simultaneously."
      },
      {
        q: "The universal relation on a non-empty set A is:",
        options: ["Always a partial order", "Always an equivalence relation", "Antisymmetric", "Irreflexive"],
        answer: 1,
        explanation: "A×A is reflexive, symmetric, transitive — hence an equivalence relation. Not antisymmetric (both (a,b) and (b,a) are in it for a≠b)."
      },
      {
        q: "If R is both symmetric and antisymmetric on A, then:",
        options: ["R = ∅", "R ⊆ I_A", "R = A×A", "R = I_A"],
        answer: 1,
        explanation: "If aRb (symmetric ⟹ bRa) and antisymmetric (aRb ∧ bRa ⟹ a=b), then R can only contain pairs (a,a). So R ⊆ I_A."
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
];
