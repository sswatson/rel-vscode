type DocEntry = {
  type: string;
  name: string;
  docstring: string;
  code: string;
  children: any[];
};

const docEntries: DocEntry[] = [
  {
    type: "definition",
    name: "nullary_relation",
    docstring:
      "    nullary_relation(∼)\n\n`true` if `∼` is a relation of 0-arity.\n\nNote:\nIn case of `∼` is a operator, use space after `∼` as temporary workaround. eg., `nullary_relation(= )`",
    code: "@inline\ndef nullary_relation( ∼ ) = equal(arity[∼], 0)",
    children: [],
  },
  {
    type: "definition",
    name: "unary_relation",
    docstring:
      "    unary_relation(∼)\n\n`true` if `∼` is a unary relation.\n\nNote:\nIn case of `∼` is a operator, use space after `∼` as temporary workaround. eg., `unary_relation(= )`\n",
    code: "@inline\ndef unary_relation( ∼ ) = equal(arity[∼], 1)",
    children: [],
  },
  {
    type: "definition",
    name: "binary_relation",
    docstring:
      "    binary_relation(∼)\n\n`true` if `∼` is a binary relation.\n\nNote:\nIn case of `∼` is a operator, use space after `∼` as temporary workaround. eg., `binary_relation(= )`",
    code: "@inline\ndef binary_relation( ∼ ) = equal(arity[∼], 2)",
    children: [],
  },
  {
    type: "definition",
    name: "ternary_relation",
    docstring:
      "    ternary_relation(∼)\n\n`true` if `∼` is a ternary relation.\n\nNote:\nIn case of `∼` is a operator, use space after `∼` as temporary workaround. eg., `ternary_relation(= )`",
    code: "@inline\ndef ternary_relation( ∼ ) = equal(arity[∼], 3)",
    children: [],
  },
  {
    type: "definition",
    name: "irreflexive",
    docstring:
      "    irreflexive(D, ∼)\n\nA binary relation is irreflexive if `a ∼ a` is never true for all `a` in `D`.",
    code: "@inline\ndef irreflexive(D, ∼) =\n    binary_relation(∼ ) and\n    forall(a ∈ D: ¬(a ∼ a))",
    children: [],
  },
  {
    type: "definition",
    name: "reflexive",
    docstring:
      "    reflexive(D, ∼)\n\nA binary relation is reflexive if `a ∼ a` is always true for all `a` in `D`.",
    code: "@inline\ndef reflexive(D, ∼) =\n    binary_relation(∼ ) and\n    forall(a ∈ D: a ∼ a)",
    children: [],
  },
  {
    type: "definition",
    name: "symmetric",
    docstring:
      "    symmetric(D, ∼)\n\nA binary relation is symmetric if for all `a` and `b` in `D`, whenever `a ∼ b` is true,\nthen also `b ∼ a` is also true.",
    code: "@inline\ndef symmetric(D, ∼) =\n    binary_relation(∼ ) and\n    forall(a ∈ D, b ∈ D: a ∼ b ≡ b ∼ a)",
    children: [],
  },
  {
    type: "definition",
    name: "antisymmetric",
    docstring:
      "    antisymmetric(D, ∼)\n\nA binary relation is antisymmetric if for all `a` and `b` in `D`, whenever `a ∼ b` and\n`b ∼ a` are true, then `b = a`.",
    code: "@inline\ndef antisymmetric(D, ∼) =\n    binary_relation(∼ ) and\n    binary_relation_substitution_laws(D, ∼, =) and\n    forall(a ∈ D, b ∈ D: ((a ∼ b) and (b ∼ a)) ⇒ a = b)",
    children: [],
  },
  {
    type: "definition",
    name: "transitive",
    docstring:
      "    transitive(D, ∼)\n\nA binary relation is transitive if for all `a`, `b` and `c` in `D`, whenever `a ∼ b` and\n`b ∼ c` are true, then also `a ∼ c` is true.",
    code: "@inline\ndef transitive(D, ∼) =\n    binary_relation(∼ ) and\n    forall(a ∈ D, b ∈ D, c ∈ D: a ∼ b and b ∼ c implies a ∼ c)",
    children: [],
  },
  {
    type: "definition",
    name: "equivalence_relation",
    docstring:
      "    equivalence_relation(D, ∼)\n\nA binary relation is an equivalence_relation if it is reflexive, symmetric, and transitive",
    code: "@inline\ndef equivalence_relation(D, ∼) =\n    reflexive(D, ∼) and symmetric(D, ∼) and transitive(D, ∼)",
    children: [],
  },
  {
    type: "definition",
    name: "unary_relation_substitution_laws",
    docstring:
      "    unary_relation_substitution_laws(D, R, ≈)\n\nA unary relation obeys substitution laws if the relation `R` produces the same results when\nvalues are substituted according to the binary relation `≈`.\n\nFor example, `unary_relation_substitution_laws({1; 2}, {1; 2}, (1, 2))` is true because\nthe result of `R(1)` remains true when `1` is replaced by `2`.",
    code: "@inline\ndef unary_relation_substitution_laws(D, R, ≈) =\n    unary_relation(R) and binary_relation(≈ ) and\n    forall(a ∈ D, b ∈ D: (a ≈ b) ⇒ (R(a) ≡ R(b)))",
    children: [],
  },
  {
    type: "definition",
    name: "binary_relation_substitution_laws",
    docstring:
      "    binary_relation_substitution_laws(D, R, ≈)\n\nA binary relation obeys substitution laws if the relation `R` produces the same results\nwhen values are substituted according to the binary relation `≈`.",
    code: "@inline\ndef binary_relation_substitution_laws(D, ∼, ≈) =\n    binary_relation(∼ ) and binary_relation(≈ ) and\n    forall(a1 ∈ D, a2 ∈ D: a1 ≈ a2 ⇒ forall(b ∈ D: a1 ∼ b ≡ a2 ∼ b)) and\n    forall(b1 ∈ D, b2 ∈ D: b1 ≈ b2 ⇒ forall(a ∈ D: a ∼ b1 ≡ a ∼ b2))",
    children: [],
  },
  {
    type: "definition",
    name: "preorder",
    docstring:
      "    preorder(D, ≼)\n\nA binary relation `≼` is a preorder if it is reflexive and transitive.",
    code: "@inline\ndef preorder(D, ≼) =\n    reflexive(D, ≼) and transitive(D, ≼)",
    children: [],
  },
  {
    type: "definition",
    name: "partial_order",
    docstring:
      "    partial_order(D, ≼)\n\nA binary relation `≼` is a partial order if it is reflexive, antisymmetric, and transitive.",
    code: "@inline\ndef partial_order(D, ≼) =\n    reflexive(D, ≼) and antisymmetric(D, ≼) and transitive(D, ≼)",
    children: [],
  },
  {
    type: "definition",
    name: "strict_partial_order",
    docstring:
      "    strict_partial_order(D, ≺)\n\nA binary relation `≺` is a strict partial order if it is irreflexive, antisymmetric, and\ntransitive. This is similar to a partial order, but is irreflexive rather than reflexive.",
    code: "@inline\ndef strict_partial_order(D, ≺) =\n    irreflexive(D, ≺) and antisymmetric(D, ≺) and transitive(D, ≺)",
    children: [],
  },
  {
    type: "definition",
    name: "comparable",
    docstring:
      "    comparable(a, b, ≼)\n\nTwo elements `a` and `b` are comparable if either `a ≼ b` or `b ≼ a`.",
    code: "@inline\ndef comparable(a, b, ≼) =\n    (a ≼ b) ∨ (b ≼ a)",
    children: [],
  },
  {
    type: "definition",
    name: "total_order",
    docstring:
      "    total_order(D, ≼)\n\nA binary relation `≼` is a total order if it is a partial order, and every element in `D`\nis comparable with every other element in `D` with respect to the partial order.",
    code: "@inline\ndef total_order(D, ≼) =\n    partial_order(D, ≼) and\n    forall(a ∈ D, b ∈ D: comparable(a, b, ≼))",
    children: [],
  },
  {
    type: "definition",
    name: "strict_total_order",
    docstring:
      "    strict_total_order(D, ≺)\n\nA binary relation `≺` is a strict total order if it is a strict partial order, and every\nelement in `D` is either comparable or equal to another element in `D`.",
    code: "@inline\ndef strict_total_order(D, ≺) =\n    strict_partial_order(D, ≺) and\n    forall(a ∈ D, b ∈ D: comparable(a, b, ≺) ∨ (b = a))",
    children: [],
  },
  {
    type: "definition",
    name: "maximal_element",
    docstring:
      "    maximal_element[D, ≼]\n\nThe maximal element of a partial order `≼` is an element which is greater than all other\nelements in `D`.",
    code: "@inline\ndef maximal_element[D, ≼] =\n    max_elem: D(max_elem) and\n    partial_order(D, ≼) and\n    forall(a ∈ D: a ≼ max_elem)",
    children: [],
  },
  {
    type: "definition",
    name: "has_maximal_element",
    docstring:
      "    has_maximal_element(D, ≼)\n\n`true` if the partial order `≼` contains a maximal element.",
    code: "@inline\ndef has_maximal_element(D, ≼) =\n    partial_order(D, ≼) and\n    exists(max_elem ∈ D: forall(a ∈ D: a ≼ max_elem))",
    children: [],
  },
  {
    type: "definition",
    name: "minimal_element",
    docstring:
      "    minimal_element[D, ≼]\n\nThe minimal element of a partial order `≼` is an element which is less than all other\nelements in `D`.",
    code: "@inline\ndef minimal_element[D, ≼] =\n    min_elem: D(min_elem) and\n    partial_order(D, ≼) and\n    forall(a ∈ D: min_elem ≼ a)",
    children: [],
  },
  {
    type: "definition",
    name: "has_minimal_element",
    docstring:
      "    has_minimal_element(D, ≼)\n\n`true` if the partial order `≼` contains a minimal element.",
    code: "@inline\ndef has_minimal_element(D, ≼) =\n    partial_order(D, ≼) and\n    exists(min_elem ∈ D: forall(a ∈ D: min_elem ≼ a))",
    children: [],
  },
  {
    type: "definition",
    name: "unary_operator",
    docstring:
      "    unary_operator(D, ⊙)\n\nA unary operator takes one argument and returns another argument of the same type, i.e.,\nit can be represented as a binary relation.",
    code: "@inline\ndef unary_operator(D, ⊙) =\n    equal(arity[⊙], 2)",
    children: [],
  },
  {
    type: "definition",
    name: "binary_operator",
    docstring:
      "    binary_operator(D, ⊙)\n\nA binary operator takes two arguments and returns another argument of the same type, i.e.,\nit can be represented as a relation of arity 3.",
    code: "@inline\ndef binary_operator(D, ⊙) =\n    equal(arity[⊙], 3)",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_commutative",
    docstring:
      "    approximately_commutative(D, ⊙, ≈)\n\nA binary operator `⊙` is approximately commutative if `a ⊙ b` is approximately equal to\n`b ⊙ a` for all `a` and `b` in `D`, where approximately equal is defined by the binary\nrelation `≈`.",
    code: "@inline\ndef approximately_commutative(D, ⊙, ≈) =\n    binary_operator(D, ⊙) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    forall(a ∈ D, b ∈ D: (a ⊙ b) ≈ (b ⊙ a))",
    children: [],
  },
  {
    type: "definition",
    name: "commutative",
    docstring:
      "    commutative(D, ⊙)\n\nA binary operator `⊙` is commutative if `a ⊙ b` is equal to `b ⊙ a` for all `a` and `b` in\n`D`.",
    code: "@inline\ndef commutative(D, ⊙) =\n    approximately_commutative(D, ⊙, =)",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_associative",
    docstring:
      "    approximately_associative(D, ⊙, ≈)\n\nA binary operator `⊙` is approximately associative if `(a ⊙ b) ⊙ c` is approximately equal\nto `a ⊙ (b ⊙ c)` for all `a`, `b` and `c` in `D`, where approximately equal is defined by\nthe binary relation `≈`.",
    code: "@inline\ndef approximately_associative(D, ⊙, ≈) =\n    binary_operator(D, ⊙) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    forall(a ∈ D, b ∈ D, c ∈ D: ((a ⊙ b) ⊙ c) ≈ (a ⊙ (b ⊙ c)))",
    children: [],
  },
  {
    type: "definition",
    name: "associative",
    docstring:
      "    associative(D, ⊙)\n\nA binary operator `⊙` is associative if `(a ⊙ b) ⊙ c` is equal to `a ⊙ (b ⊙ c)` for all\n`a`, `b` and `c` in `D`.",
    code: "@inline\ndef associative(D, ⊙) =\n    approximately_associative(D, ⊙, =)",
    children: [],
  },
  {
    type: "definition",
    name: "idempotent",
    docstring:
      "    idempotent(D, ⊙, ≈)\n\nA binary operator `⊙` is idempotent if `a ⊙ a = a` for all `a` in `D`.",
    code: "@inline\ndef idempotent(D, ⊙) =\n    binary_operator(D, ⊙) and\n    forall(a ∈ D: (a ⊙ a) = a)",
    children: [],
  },
  {
    type: "definition",
    name: "left_identity",
    docstring:
      "    left_identity[D, ⊙]\n\nA left identity of a binary operator `⊙` is an element `i` such that `i ⊙ a = a` for all\n`a` in `D`.",
    code: "@inline\ndef left_identity[D, ⊙] =\n    ident: D(ident) and\n    forall(a ∈ D: ((ident ⊙ a) = a)) and\n    binary_operator(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "has_left_identity",
    docstring:
      "    has_left_identity(D, ⊙)\n\n`true` if `⊙` has a left identity.",
    code: "@inline\ndef has_left_identity(D, ⊙) =\n    binary_operator(D, ⊙) and\n    equivalence_relation(D, =) and\n    // TODO: ideally we could do\n    // exists(ident ∈ D: left_identity[D, ⊙](ident))\n    // however this doesn't terminate\n    exists(ident ∈ D: forall(a ∈ D: ((ident ⊙ a) = a)))",
    children: [],
  },
  {
    type: "definition",
    name: "right_identity",
    docstring:
      "    right_identity[D, ⊙]\n\nA right identity of a binary operator `⊙` is an element `i` such that `a ⊙ i = a` for all\n`a` in `D`.",
    code: "@inline\ndef right_identity[D, ⊙] =\n    ident: D(ident) and\n    forall(a ∈ D: ((a ⊙ ident) = a)) and\n    binary_operator(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "has_right_identity",
    docstring:
      "    has_right_identity(D, ⊙)\n\n`true` if `⊙` has a right identity.",
    code: "@inline\ndef has_right_identity(D, ⊙) =\n    binary_operator(D, ⊙) and\n    exists(ident ∈ D: forall(a ∈ D: ((a ⊙ ident) = a)))",
    children: [],
  },
  {
    type: "definition",
    name: "identity",
    docstring:
      "    identity[D, ⊙]\n\nAn identity of a binary operator `⊙` is both a left and right identity.",
    code: "@inline\ndef identity[D, ⊙] =\n    ident: D(ident) and\n    left_identity[D, ⊙](ident) and right_identity[D, ⊙](ident)",
    children: [],
  },
  {
    type: "definition",
    name: "has_identity",
    docstring: "    has_identity(D, ⊙)\n\n`true` if `⊙` has an identity.",
    code: "@inline\ndef has_identity(D, ⊙) =\n    binary_operator(D, ⊙) and\n    exists(ident ∈ D: forall(a ∈ D: (a ⊙ ident) = a and (ident ⊙ a) = a))",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_has_inverse",
    docstring:
      "    approximately_has_inverse(D, ⊙, N, ≈)\n\nFor a binary relation `⊙`, an inverse of an element `a` is an element `b` such that `a ⊙ b`\nis approximately equal to the identity element. For `approximately_has_inverse`, the\ninverse operator is given as `N`, so the inverse of `a` is `N[a]`, and approximately equal\nto is defined by `≈`.",
    code: "@inline\ndef approximately_has_inverse(D, ⊙, N, ≈) =\n    binary_operator(D, ⊙) and\n    has_identity(D, ⊙) and\n    unary_operator(D, N) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    forall(a, i: D(a) and identity[D, ⊙](i) implies ((a ⊙ N[a]) ≈ i) and ((N[a] ⊙ a) ≈ i))",
    children: [],
  },
  {
    type: "definition",
    name: "left_zero",
    docstring:
      "    left_zero[D, ⊙]\n\nA left zero of a binary operator `⊙` is an element `z` such that `z ⊙ a = z` for all `a` in\n`D`.",
    code: "@inline\ndef left_zero[D, ⊙] =\n    zero: D(zero) and\n    forall(a ∈ D: ((zero ⊙ a) = zero)) and\n    binary_operator(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "has_left_zero",
    docstring: "    has_left_zero(D, ⊙)\n\n`true` if `⊙` has a left zero.",
    code: "@inline\ndef has_left_zero(D, ⊙) =\n    binary_operator(D, ⊙) and\n    exists(zero ∈ D: forall(a ∈ D: ((zero ⊙ a) = zero)))",
    children: [],
  },
  {
    type: "definition",
    name: "right_zero",
    docstring:
      "    right_zero[D, ⊙]\n\nA right zero of a binary operator `⊙` is an element `z` such that `z ⊙ a = z` for all `a`\nin `D`.",
    code: "@inline\ndef right_zero[D, ⊙] =\n    zero: D(zero) and\n    forall(a ∈ D: ((a ⊙ zero) = zero)) and\n    binary_operator(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "has_right_zero",
    docstring: "    has_right_zero(D, ⊙)\n\n`true` if `⊙` has a right zero.",
    code: "@inline\ndef has_right_zero(D, ⊙) =\n    binary_operator(D, ⊙) and\n    exists(zero ∈ D: forall(a ∈ D: ((a ⊙ zero) = zero)))",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_left_distributive",
    docstring:
      "    approximately_left_distributive(D, ⊗, ⊕, ≈)\n\nA binary operator `⊗` is approximately left distributive over another binary operator `⊕`\nif `a ⊗ (b ⊕ c)` is approximately equal to `(a ⊗ b) ⊕ (a ⊗ c)` for all `a`, `b` and `c` in\n`D`.",
    code: "@inline\ndef approximately_left_distributive(D, ⊗, ⊕, ≈) =\n    binary_operator(D, ⊗) and\n    binary_operator(D, ⊕) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    forall(a ∈ D, b ∈ D, c ∈ D: (a ⊗ (b ⊕ c)) ≈ ((a ⊗ b) ⊕ (a ⊗ c)))",
    children: [],
  },
  {
    type: "definition",
    name: "left_distributive",
    docstring:
      "    left_distributive(D, ⊗, ⊕)\n\nA binary operator `⊗` is left distributive over another binary operator `⊕` if\n`a ⊗ (b ⊕ c)` is equal to `(a ⊗ b) ⊕ (a ⊗ c)` for all `a`, `b` and `c` in `D`.",
    code: "@inline\ndef left_distributive(D, ⊗, ⊕) =\n    approximately_left_distributive(D, ⊗, ⊕, =)",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_right_distributive",
    docstring:
      "    approximately_right_distributive(D, ⊗, ⊕, ≈)\n\nA binary operator `⊗` is approximately right distributive over another binary operator `⊕`\nif `(a ⊕ b) ⊗ c` is approximately equal to `(a ⊗ c) ⊕ (b ⊗ c)` for all `a`, `b` and `c` in\n`D`.",
    code: "@inline\ndef approximately_right_distributive(D, ⊗, ⊕, ≈) =\n    binary_operator(D, ⊗) and\n    binary_operator(D, ⊕) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    forall(a ∈ D, b ∈ D, c ∈ D: ((a ⊕ b) ⊗ c) ≈ ((a ⊗ c) ⊕ (b ⊗ c)))",
    children: [],
  },
  {
    type: "definition",
    name: "right_distributive",
    docstring:
      "    right_distributive(D, ⊗, ⊕, ≈)\n\nA binary operator `⊗` is right distributive over another binary operator `⊕` if\n`(a ⊕ b) ⊗ c` is equal to `(a ⊗ c) ⊕ (b ⊗ c)` for all `a`, `b` and `c` in `D`.",
    code: "@inline\ndef right_distributive(D, ⊗, ⊕) =\n    approximately_right_distributive(D, ⊗, ⊕, =)",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_distributive",
    docstring:
      "    approximately_distributive(D, ⊗, ⊕, ≈)\n\nA binary operator `⊗` is approximately distributive over another binary operator `⊕` if it\nis approximately both left and right distributive.",
    code: "@inline\ndef approximately_distributive(D, ⊗, ⊕, ≈) =\n    approximately_left_distributive(D, ⊗, ⊕, ≈) and\n    approximately_right_distributive(D, ⊗, ⊕, ≈)",
    children: [],
  },
  {
    type: "definition",
    name: "distributive",
    docstring:
      "    distributive(D, ⊗, ⊕)\n\nA binary operator `⊗` is distributive over another binary operator `⊕` if it is both left\nand right distributive.",
    code: "@inline\ndef distributive(D, ⊗, ⊕) =\n    approximately_distributive(D, ⊗, ⊕, =)",
    children: [],
  },
  {
    type: "definition",
    name: "absorption_laws",
    docstring:
      "    absorption_laws(D, ⊓, ⊔)\n\nBinary operator `⊓` and `⊔` obey absorption laws if `a ⊔ (a ⊓ b) = a = a ⊓ (a ⊔ b)` for all\n`a` and `b` in `D`. The absorption laws are one of the defining characteristics of the meet\nand join operations of a lattice.",
    code: "@inline\ndef absorption_laws(D, ⊓, ⊔) =\n    binary_operator(D, ⊓) and\n    binary_operator(D, ⊔) and\n    forall(a ∈ D, b ∈ D: (a ⊔ (a ⊓ b)) = a = (a ⊓ (a ⊔ b)))",
    children: [],
  },
  {
    type: "definition",
    name: "approximately_zero_annihilation",
    docstring:
      "    approximately_zero_annihilation(D, ⊙, ≈)\n\nA binary relation `⊙` obeys approximate zero annihilation if there exists an element that\nis approximately both a left and right zero.",
    code: "@inline\ndef approximately_zero_annihilation(D, ⊙, ≈) =\n    binary_operator(D, ⊙) and\n    reflexive(D, ≈) and\n    symmetric(D, ≈) and\n    exists(zero ∈ D: forall(a ∈ D: ((a ⊙ zero) ≈ zero) and ((zero ⊙ a) ≈ zero)))",
    children: [],
  },
  {
    type: "definition",
    name: "zero_of_operator",
    docstring:
      "    zero_of_operator[D, ⊙]\n\nA zero of a binary operator `⊙` is an element that is both a left and right zero.",
    code: "@inline\ndef zero_of_operator[D, ⊙] =\n    zero: D(zero) and\n    left_zero[D, ⊙](zero) and\n    right_zero[D, ⊙](zero)",
    children: [],
  },
  {
    type: "definition",
    name: "zero_annihilation",
    docstring:
      "    zero_annihilation(D, ⊙)\n\nA binary relation `⊙` obeys zero annihilation if there exists an element that is both a\nleft and right zero.",
    code: "@inline\ndef zero_annihilation(D, ⊙) =\n    approximately_zero_annihilation(D, ⊙, =)",
    children: [],
  },
  {
    type: "definition",
    name: "semilattice",
    docstring:
      "    semilattice(D, ⊓)\n\nA semilattice is a set `D`, with an operator `⊓`, such that `⊓` is commutative,\nassociative, and idempotent. The classic example of a semilattice is a set of subsets with\nthe intersection operator.",
    code: "@inline\ndef semilattice(D, ⊓) =\n    commutative(D, ⊓) and\n    associative(D, ⊓) and\n    idempotent(D, ⊓)",
    children: [],
  },
  {
    type: "definition",
    name: "bounded_semilattice",
    docstring:
      "    bounded_semilattice(D, ⊓)\n\nA bounded semilattice is a semilattice with a maximal element. Equivalently, a semilattice\nis bounded if it is an idempotent commutative monoid.",
    code: "@inline\ndef bounded_semilattice(D, ⊓) =\n    semilattice(D, ⊓) and\n    commutative_monoid(D, ⊓) and\n    has_identity(D, ⊓)",
    children: [],
  },
  {
    type: "definition",
    name: "lattice",
    docstring:
      "    lattice(D, ⊓, ⊔)\n\nA lattice is a set `D` with two operators, `⊓` and `⊔`, usually denoted `join` and `meet`\nrespectively, such that `(D, ⊓)` and `(D, ⊔)` are semilattices, and the operators `⊓` and\n`⊔` obey absorption laws.",
    code: "@inline\ndef lattice(D, ⊓, ⊔) =\n    semilattice(D, ⊓) and\n    semilattice(D, ⊔) and\n    absorption_laws(D, ⊓, ⊔)",
    children: [],
  },
  {
    type: "definition",
    name: "meet_bounded_lattice",
    docstring:
      "    meet_bounded_lattice(D, ⊓, ⊔)\n\nA lattice is meet bounded if the meet operator `⊓` forms a bounded semilattice.",
    code: "@inline\ndef meet_bounded_lattice(D, ⊓, ⊔) =\n    lattice(D, ⊓, ⊔) and\n    bounded_semilattice(D, ⊓)",
    children: [],
  },
  {
    type: "definition",
    name: "join_bounded_lattice",
    docstring:
      "    join_bounded_lattice(D, ⊓, ⊔)\n\nA lattice is join bounded if the join operator `⊔` forms a bounded semilattice.",
    code: "@inline\ndef join_bounded_lattice(D, ⊓, ⊔) =\n    lattice(D, ⊓, ⊔) and\n    bounded_semilattice(D, ⊔)",
    children: [],
  },
  {
    type: "definition",
    name: "bounded_lattice",
    docstring:
      "    bounded_lattice(D, ⊓, ⊔)\n\nA lattice is bounded if both the meet and join operators form bounded semilattices.",
    code: "@inline\ndef bounded_lattice(D, ⊓, ⊔) =\n    meet_bounded_lattice(D, ⊓, ⊔) and\n    join_bounded_lattice(D, ⊓, ⊔)",
    children: [],
  },
  {
    type: "definition",
    name: "partial_order_and_lattice",
    docstring:
      "    partial_order_and_lattice(D, ≼, ⊓, ⊔)\n\nA lattice is partially ordered if it has an operator `≼` defining a partial order, such\nthat `a ≼ b` if and only if `(a ⊓ b) = a`, and `(a ⊔ b) = b`.",
    code: "@inline\ndef partial_order_and_lattice(D, ≼, ⊓, ⊔) =\n    partial_order(D, ≼) and\n    lattice(D, ⊓, ⊔) and\n    forall(a ∈ D, b ∈ D: (a ≼ b) ≡ ((a ⊓ b) = a)) and\n    forall(a ∈ D, b ∈ D: (a ≼ b) ≡ ((a ⊔ b) = b))",
    children: [],
  },
  {
    type: "definition",
    name: "partial_order_and_meet_bounded_lattice",
    docstring:
      "    partial_order_and_meet_bounded_lattice(D, ≼, ⊓, ⊔)\n\nA partially ordered lattice is meet bounded if the meet operator `⊓` forms a bounded\nsemilattice, and the identity of `⊓` is the maximal element of `≼`.",
    code: "@inline\ndef partial_order_and_meet_bounded_lattice(D, ≼, ⊓, ⊔) =\n    partial_order_and_lattice(D, ≼, ⊓, ⊔) and\n    meet_bounded_lattice(D, ⊓, ⊔) and\n    has_minimal_element(D, ≼) and\n    equal(identity[D, ⊓], maximal_element[D, ≼])",
    children: [],
  },
  {
    type: "definition",
    name: "partial_order_and_join_bounded_lattice",
    docstring:
      "    partial_order_and_join_bounded_lattice(D, ≼, ⊓, ⊔)\n\nA partially ordered lattice is join bounded if the join operator `⊔` forms a bounded\nsemilattice, and the identity of `⊔` is the minimal element of `≼`.",
    code: "@inline\ndef partial_order_and_join_bounded_lattice(D, ≼, ⊓, ⊔) =\n    partial_order_and_lattice(D, ≼, ⊓, ⊔) and\n    join_bounded_lattice(D, ⊓, ⊔) and\n    has_maximal_element(D, ≼) and\n    equal(identity[D, ⊔], minimal_element[D, ≼])",
    children: [],
  },
  {
    type: "definition",
    name: "partial_order_and_bounded_lattice",
    docstring:
      "    partial_order_and_bounded_lattice(D, ≼, ⊓, ⊔)\n\nA partially ordered lattice is bounded if is both meet and join bounded.",
    code: "@inline\ndef partial_order_and_bounded_lattice(D, ≼, ⊓, ⊔) =\n    partial_order_and_meet_bounded_lattice(D, ≼, ⊓, ⊔) and\n    partial_order_and_join_bounded_lattice(D, ≼, ⊓, ⊔)",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_monoid",
    docstring:
      "    approximate_monoid(D, ⊙, ≈)\n\nAn approximate monoid is a set `D` with a binary operator `⊙` that is approximately\nassociative and has an identity element.",
    code: "@inline\ndef approximate_monoid(D, ⊙, ≈) =\n    approximately_associative(D, ⊙, ≈) and\n    has_identity(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "monoid",
    docstring:
      "    monoid(D, ⊙)\n\nA monoid is a set `D` with a binary operator `⊙` that is associative and has an identity\nelement.",
    code: "@inline\ndef monoid(D, ⊙) =\n    approximate_monoid(D, ⊙, =) and\n    associative(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_commutative_monoid",
    docstring:
      "    approximate_commutative_monoid(D, ⊙, ≈)\n\nAn approximate commutative monoid is an approximate monoid where the operator `⊙` is\napproximately commutative.",
    code: "@inline\ndef approximate_commutative_monoid(D, ⊙, ≈) =\n    approximate_monoid(D, ⊙, ≈) and\n    approximately_commutative(D, ⊙, ≈)",
    children: [],
  },
  {
    type: "definition",
    name: "commutative_monoid",
    docstring:
      "    commutative_monoid(D, ⊙)\n\nA commutative monoid is a monoid where the operator `⊙` is commutative.",
    code: "@inline\ndef commutative_monoid(D, ⊙) =\n    approximate_commutative_monoid(D, ⊙, =) and\n    commutative(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_group",
    docstring:
      "    approximate_group(D, ⊙, N, ≈)\n\nAn approximate group is an approximate monoid where the operator `⊙` has approximate\ninverses defined by `N`.",
    code: "@inline\ndef approximate_group(D, ⊙, N, ≈) =\n    approximate_monoid(D, ⊙, ≈) and\n    approximately_has_inverse(D, ⊙, N, ≈)",
    children: [],
  },
  {
    type: "definition",
    name: "group",
    docstring:
      "    group(D, ⊙, N)\n\nA group is a monoid where the operator `⊙` has inverses defined by `N`.",
    code: "@inline\ndef group(D, ⊙, N) =\n    approximate_group(D, ⊙, N, =) and\n    monoid(D, ⊙) and\n    approximately_has_inverse(D, ⊙, N, =)",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_abelian_group",
    docstring:
      "    approximate_abelian_group(D, ⊙, N, ≈)\n\nAn approximate abelian group is an approximate commutative monoid where the operator `⊙`\nhas approximate inverses defined by `N`.",
    code: "@inline\ndef approximate_abelian_group(D, ⊙, N, ≈) =\n    approximate_group(D, ⊙, N, ≈) and\n    approximate_commutative_monoid(D, ⊙, ≈)",
    children: [],
  },
  {
    type: "definition",
    name: "abelian_group",
    docstring:
      "    abelian_group(D, ⊙, N)\n\nAn abelian group is a commutative monoid where the operator `⊙` has inverses defined by `N`.",
    code: "@inline\ndef abelian_group(D, ⊙, N) =\n    approximate_abelian_group(D, ⊙, N, =) and\n    group(D, ⊙, N) and\n    commutative_monoid(D, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_semiring",
    docstring:
      "    approximate_semiring(D, ⊕, ⊙, ≈)\n\nAn approximate semiring is a set `D` with two operators, `⊕` and `⊙`, where `⊕` forms an\napproximate commutative monoid, `⊙` forms an approximate monoid and has an approximate zero,\n`⊙` distributes over `⊕`, and the identity of `⊕` is approximately equal to the zero of `⊙`.",
    code: "@inline\ndef approximate_semiring(D, ⊕, ⊙, ≈) =\n    approximate_commutative_monoid(D, ⊕, ≈) and\n    approximate_monoid(D, ⊙, ≈) and\n    approximately_distributive(D, ⊙, ⊕, ≈) and\n    approximately_zero_annihilation(D, ⊙, ≈) and\n    exists(x, y: zero_of_operator[D, ⊙](x) and identity[D, ⊕](y) implies x ≈ y)",
    children: [],
  },
  {
    type: "definition",
    name: "semiring",
    docstring:
      "    semiring(D, ⊕, ⊙)\n\nA semiring is an approximate semiring with equality defined as `=`.",
    code: "@inline\ndef semiring(D, ⊕, ⊙) =\n    approximate_semiring(D, ⊕, ⊙, =) and\n    commutative_monoid(D, ⊕) and\n    monoid(D, ⊙) and\n    distributive(D, ⊙, ⊕) and\n    zero_annihilation(D, ⊙) and\n    equal(zero_of_operator[D, ⊙], identity[D, ⊕])",
    children: [],
  },
  {
    type: "definition",
    name: "approximate_ring",
    docstring:
      "    approximate_ring(D, ⊕, N, ⊙, ≈)\n\nAn approximate ring is an approximate semiring where the `⊕` operator has inverses defined\nby `N`.",
    code: "@inline\ndef approximate_ring(D, ⊕, N, ⊙, ≈) =\n    approximate_abelian_group(D, ⊕, N, ≈) and\n    approximate_semiring(D, ⊕, ⊙, ≈)",
    children: [],
  },
  {
    type: "definition",
    name: "ring",
    docstring:
      "    ring(D, ⊕, N, ⊙)\n\nA ring is a semiring where the `⊕` operator has inverses.",
    code: "@inline\ndef ring(D, ⊕, N, ⊙) =\n    approximate_ring(D, ⊕, N, ⊙, =) and\n    abelian_group(D, ⊕, N) and\n    semiring(D, ⊕, ⊙)",
    children: [],
  },
  {
    type: "definition",
    name: "markdown",
    docstring:
      '    markdown[R]\n\nDisplay the provided relation `R` as *markdown formatted text*, if supported by the\nclient.\n\nIncludes only the `String`-valued tuples from `R`, together with the "text/markdown"\nMIME-type, to be displayed as a Markdown value in the client.\n\n# Example\n```rel\ndef output = markdown[docstring[:load_csv]]\n```',
    code: '@inline\ndef markdown[R] = {\n        :MIME, MIME_MARKDOWN;\n        :text, :markdown, ks..., str\n    }\n    from ks..., str where R(ks..., str) and String(str)\n\n@inline\ndef MIME_MARKDOWN = "text/markdown"',
    children: [],
  },
  {
    type: "definition",
    name: "table",
    docstring:
      '    table[R]\n\nDisplay a structured (overloaded) relation that represents tabular data as a table, if\nit\'s supported by the client.\n\nThe input is expected to be a relation that represents a table *column-wise*, such as the\nresult of importing a CSV file, or i.e. a module. The module provided as input can be\nthought of like a dataframe in other systems. The client will attempt to display a table\nfrom whatever module you pass in, even if the data is sparse, or not all of the same arity.\n\nIncludes the original relation together with a MIME-type indicating the relation represents a\ntable, in order to be rendered on the client.\n\n# Input\n- `R`: an overloaded relation of the following form:\n    `R[:ColName][keys...](value)`\n\n# Examples\n\nDisplaying a loaded CSV:\n```rel\ndef R = load_csv["/path/to/my_csv.csv"]\ndef output = table[R]\n```\n\nDisplaying a table module constructed from several column-relations:\n```rel\ntable[{\n    (:Name , name) ;\n    (:Team , team) ;\n    (:EmployeeId , employeeid) ;\n}]\n```',
    code: '@inline def table[R] = {\n        :MIME, MIME_APPLICATION_TABLE;\n        :table, :data, R\n    }\n\n// Custom MIME type that indicates the relation should be interpreted as a Table.\n@inline\ndef MIME_APPLICATION_TABLE = "application/vnd.rel.relation.table"',
    children: [],
  },
  {
    type: "definition",
    name: "svg",
    docstring:
      '    svg[R]\n\nDisplay the provided relation `R` as *an svg image*, if supported by the\nclient.\n\nIncludes only the tuples from \'R\' where the last value is a String, together with the\n"image/svg+xml" MIME-type, to be displayed as an svg image in the client. The relation\ncan have any arity and cardinality.\n\n# Example\n```rel\ndef output = svg["<svg height=100 width=100><circle r=100 cx=100 cy=100 fill=\'blue\' /></svg>"]\n```\nOutputs the SVG mime type along with the blue circle SVG string.\n\n```rel\ndef output = svg[{\n    :circle, "<svg height=100 width=100><circle r=100 cx=100 cy=100 fill=\'blue\' /></svg>";\n    :square, "<svg height=100 width=100><rect width=100 height=100 /></svg>";\n    :a_number, 1\n  }]\n```\nOutputs the SVG mime type along with the blue circle and rectangle SVG strings (order not\nguaranteed), but not the number 1 as that tuple does not have a String as its last value.',
    code: '@inline\ndef svg[R] = {\n        :MIME, MIME_SVG;\n        :image, :svg, ks..., str\n    }\n    from ks..., str where R(ks..., str) and String(str)\n\n@inline\ndef MIME_SVG = "image/svg+xml"',
    children: [],
  },
  {
    type: "definition",
    name: "html",
    docstring:
      '    html[R]\n\nDisplay the provided relation `R` as *an html document*, if supported by the client.\n\nIncludes only the tuples from \'R\' where the last value is a String, together with the\n"text/html" MIME-type, to be displayed as an HTML document in the client. The relation\ncan have any arity and cardinality.\n\n# Example\n```rel\ndef output = html["<h1>Hello, World</h1>"]\n```\nOutputs the HTML mime type along with the "Hello, World" HTML string.\n\n```rel\ndef output = html[{:key1, "<p>more info</p>"; :key2, "<br/>"; :a_number, 1}]\n```\nOutputs the HTML mime type along with the "more info" and break HTML strings (order not\nguaranteed), but not the number 1 as that tuple does not have a String as its last value.',
    code: '@inline\ndef html[R] = {\n        :MIME, MIME_HTML;\n        :text, :html, ks..., str\n    }\n    from ks..., str where R(ks..., str) and String(str)\n\n@inline\ndef MIME_HTML = "text/html"',
    children: [],
  },
  {
    type: "definition",
    name: "help",
    docstring:
      "    help[:relation_name]\n\nDisplay the docstring for a relation `relation_name`, by richly rendering it as Markdown.\n\nThis is equivalent to `markdown[docstring[:relation_name]]`.\n\n# Example\n```rel\ndef output = help[:sum]\n```\nDisplays the markdown-formatted docstring for load_csv as richly-rendered HTML in the\nfrontend UI, if it is supported by the client.\n\n## See Also:\n- `markdown[R]`\n- `docstring[:relation_name]`",
    code: "@inline\ndef help[relation_name] = markdown[docstring[relation_name]]",
    children: [],
  },
  {
    type: "definition",
    name: "view_json",
    docstring:
      '    view_json[R]\n\nDisplay a structured (overloaded) relation as a JSON Object, if it\'s\nsupported by the client.\n\nTo represent JSON Arrays an explicit array marker, `:[]`, and an index\nspecifying the position in the array are expected.\n\n# Input\n- `R`: an overloaded relation.\n\n# Examples\n\nDisplaying a simple JSON Object:\n```rel\ndef data[:a] = 1\ndef output = view_json[data]\n\n// Expected output:\n// {"a": 1}\n```\n\nDisplaying a nested Array:\n```rel\ndef data[:a, :[], 1, :[], 1, :b] = 1\ndef data[:a, :[], 1, :[], 2, :c] = 2\ndef output = view_json[data]\n\n// Expected output:\n// {"a": [[{"b": 1}, {"c": 2}]]}\n```\n\nDisplaying a cake recipe:\n```rel\ndef document[:id] = "0001"\ndef document[:type] = "donut"\ndef document[:name] = "Cake"\ndef document[:ppu] = 0.55\n\ndef document[:batters, :batter, :[], 1, :id] = "1001"\ndef document[:batters, :batter, :[], 1, :type] = "Regular"\ndef document[:batters, :batter, :[], 2, :id] = "1002"\ndef document[:batters, :batter, :[], 2, :type] = "Chocolate"\ndef document[:batters, :batter, :[], 3, :id] = "1003"\ndef document[:batters, :batter, :[], 3, :type] = "Blueberry"\ndef document[:batters, :batter, :[], 4, :id] = "1004"\ndef document[:batters, :batter, :[], 4, :type] = "Devil\'s Food"\n\ndef output = view_json[document]\n```',
    code: '@inline def view_json[R] = {\n        :MIME, "application/vnd.rel.relation.json";\n        :json, :data, R\n    }',
    children: [],
  },
  {
    type: "definition",
    name: "graphviz",
    docstring:
      '    graphviz[G]\n\nVisualize the provided relation `G` as a graph, using [Graphviz](https://graphviz.org/),\nif supported by the client.\n\n# Input\n\n- `G`: A module containing the following:\n  - `:node`: a unary relation of identifiers (usually strings or integers) to use as node ids.\n  - `:edge`: a binary relation of edges as (`from`, `to`) pairs of node ids.\n  - `:node_attribute`: a ternary relation of node attributes as (`node_id`, `attribute`,\n  `value`), where `node_id` matches an identifier in the `:node` relation.\n  Here, `attribute` must be a string; it cannot be a `RelName`.\n  - `:edge_attribute`: an arity-4 relation of edge attributes as (`from`, `to`, `attribute`,\n  `value`), where (`from`, `to`) matches an identifier pair in the `:edge` relation.\nHere, `attribute` must be a string; it cannot be a `RelName`.\n  - `:attribute:graph`: a binary relation of graph attributes as (`attribute`, `value`).\n  These attributes serve as the default for the graph/subgraphs.\n  - `:attribute:node`: a binary relation of node attributes as (`attribute`, `value`).\n  These attributes serve as the default for all nodes in the graph.\n  - `:attribute:edge`: a binary relation of edge attributes as (`attribute`, `value`).\n  These attributes serve as the default for all edge in the graph.\n  - `:subgraph`: a relation with an identifier followed by a graph definition (`:node`,\n   `:edge`, `:attribute`, `:node_attribute`, `:edge_attribute`) with the following\n   exceptions:\n    - `:directed` is not supported as that applies to the whole graph and not a subgraph\n    - `:clustered` is not supported as that applies to the whole graph and not a subgraph.\n      If you want to only have a subset of the subgraphs be clusters, set the root key\n      `:clustered` to `boolean_false` and prepend `"cluster_"` to the subgraph IDs you would\n      like to be clusters.\n    - `:subgraph` cannot be recursively defined\n    - `:parent` can be added to subgraphs with the value set to the ID of another subgraph.\n     This indicates that this subgraph should nested within that parent subgraph.\n  - `:directed`: a boolean (`boolean_true` or `boolean_false`) indicating whether\n    the graph is directed or undirected. Defaults to true (directed).\n  - `:clustered`: a boolean (`boolean_true` or `boolean_false`) indicating whether the\n    subgraphs in the graph should have their IDs prepended with `cluster_` so that the\n    subgraphs are each rendered in a bounding box. Defaults to true (clustered).\n  - `:layout`: a string indicating the [layout engine](https://graphviz.org/docs/layouts/)\n    to use.  Valid options are:\n    - `"circo"`\n    - `"dot"` (default)\n    - `"fdp"`\n    - `"neato"`\n    - `"osage"`\n    - `"patchwork"`\n    - `"twopi"`\n  - `:width`: the width of the visualization in pixels. Defaults to the width of the\n    container.\n  - `:height`: the height of the visualization in pixels. Defaults to 500 pixels.\n\nAll configuration options are optional. However, a valid graph `G` must define at least `:node` or `:edge` .\n\nSee the [Graphviz documentation](https://graphviz.org/doc/info/attrs.html#h:uses) for the\nfull list of supported attributes and values.\n\n# Examples\n\n## Simple graph\n\n```rel\ndef node = {"A"; "B"; "C"}\ndef edge = {"A", "B"; "A", "C"}\ndef graph = {:node, node; :edge, edge}\n\ndef output = graphviz[graph]\n```\n\nOutputs a directed graph with the nodes `"A"`, `"B"`, and `"C"` with edges\nbetween `"A"` and `"B"`, as well as `"A"` and `"C"`.\n\n## Complex graph\n\n```rel\ndef nodes = {"grandparent"}\n\ndef node_attrs = {\n  "grandparent", "fontname", "Comic Sans MS"\n}\n\ndef edges = {\n  "grandparent", "parent A";\n  "grandparent", "parent B";\n}\n\ndef edge_attrs = {"grandparent", "parent A", "color", "blue"}\n\ndef attribute:graph = {\n  "bgcolor", "lightblue"\n}\ndef attribute:node = {"color", "charcoal"; "fontname", "Impact"}\ndef attribute:edge = {"color", "grey"}\n\ndef subgraphs = {\n  "parents",  {\n    :node, {"parent A"; "parent B"};\n    :edge, "parent B", "child";\n    :attribute, :node, {"color", "lightgrey"; "style", "filled"};\n    :attribute, :graph, "bgcolor", "white";\n  };\n  "children",  {\n    :parent, "parents";\n    :node, "child";\n    :node_attribute, "child", {"color", "red"};\n  };\n}\n\ndef graph = {\n  :node, nodes;\n  :edge, edges;\n  :directed, boolean_false;\n  :node_attribute, node_attrs;\n  :edge_attribute, edge_attrs;\n  :attribute, attribute;\n  :subgraph, subgraphs;\n}\n\ndef output = graphviz[graph]\n```\n\nOutputs an undirected graph with the nodes `"grandparent"`, `"parent A"`, `"parent B"`, and\n`"child"`, which has a light blue background, nodes outlined in charcoal with "Impact" font,\nand grey edges by default.\n\nThe `"grandparent"` node uses `"Comic Sans MS"` as its font instead of `"Impact"`\n\nThe edge from `"grandparent"` to `"parent A"` is blue instead of grey.\n\nThe nodes `"parent A"`, `"parent B"`, and `"child"` are all drawn within a white background\nbounding box.  The nodes within this subgraph are lightgrey and filled, overwriting the\ngraph\'s default. Within that box, `"child"` is also in a bounding box and is red instead of\nlightgrey.',
    code: '@inline\ndef graphviz[G] = {\n    :MIME, MIME_GRAPHVIZ;\n    :graph, :data, G;\n}\n\n@inline\ndef MIME_GRAPHVIZ = "application/vnd.rel.relation.graph.graphviz"',
    children: [],
  },
  {
    type: "module",
    name: "_bucketize_equiwidth",
    docstring: "",
    code: "/******************************************************************************************\n * histogram.rel\n *\n * Definitions of built-in functions for creating histograms in Rel.\n *****************************************************************************************/\n\n@inline\nmodule _bucketize_equiwidth\n    def _buckets_equiwidth[R, n](b, k..., v) =\n        R(k..., v) and l = min[R] and h = max[R] and w = (h - l) / n and\n        b = float_int_convert[minimum[int_float_convert[n], 1.0 + floor[divide[v - l, w]]]]\n        from l, w, h",
    children: [],
  },
  {
    type: "module",
    name: "_sort_on_last_col",
    docstring: "",
    code: "\n@inline\nmodule _sort_on_last_col\n    def _sorted_on_last_col[R] =\n        us..., u1, rank: enumerate[v1, vs...: R(vs..., v1)](rank, u1, us...)",
    children: [],
  },
  {
    type: "module",
    name: "_bucketize_equidepth",
    docstring: "",
    code: "\n@inline\nmodule _bucketize_equidepth\n    with _bucketize_equiwidth use _buckets_equiwidth as Bw\n    with _sort_on_last_col use _sorted_on_last_col\n    def _buckets_equidepth[R, n](b2, k..., v) = Bw[_sorted_on_last_col[R], n](_, k..., v, _)\n            and b2 = min[b: Bw[_sorted_on_last_col[R], n](b, y..., v, _) from y...]",
    children: [],
  },
  {
    type: "module",
    name: "histograms",
    docstring:
      'Contains functions for creating single-column histograms.\nThe histogram is created on the last argument of a given relation and\nstatistics are computed on each bucket of the histogram.\nBy default, min, max, and count statistics are included\nby all the functions of the module.\nThe supported types of histograms are equi-width and equi-depth.\nIn an equi-width histogram, domain values are bucketized on intervals of equal ranges.\nIn an equi-depth histogram, the buckets have equal size\n(in terms of the number of tuples contained in the bucket).\nThe equi-depth histograms are constructed on a best-effort basis and do not\nguarantee an optimal bucketization.\n\nThe module offers functions of 2 types with different interfaces:\n\n### Hardcoded number of statistic functions\n\nHere, the number of requested statistics is part of the function name, e.g.\n    `histogram_equiwidth_2[R, 10, F1, F2]`\nwhere\n- `R` is a relation\n- `10` is the number of buckets\n- `F1` and `F2` are two aggregate statistic functions to be applied to the values of\nthe tuples contained in the bucket, such as `average` or `sum`.\n\nThe output is a relation with arity $4+i$, where $i$ is the number of requested statistics:\n`(bucket_id, min_value, max_value, count, F1_stat, ..., Fi_stat)`\nwhere\n- `bucket_id` is an integer identifier for the bucket starting from 1\n- `min_value` is the minimum value among tuples contained in the bucket\n- `max_value` is the maximum value among tuples contained in the bucket\n- `count` is the number of tuples contained in the bucket\n- The remaining arguments are the values of the requested statistics,\nin the order that they were specified.\n\nThe maximum supported number of statistic functions that\ncan be requested via this interface is 3.\n\n#### Example 1\n\n```rel\ndef T = {1; 2; 3; 4; 6; 11}\n\nwith histograms use histogram_equiwidth_2\n\ndef output = histogram_equiwidth_2[T, 2, average, sum]\n(1, 1, 4, 4, 2.5, 10)\n(2, 6, 11, 2, 8.5, 17)\n```\n\n#### Example 2\n\n```rel\ndef T = {1; 2; 3; 4; 6; 11}\n\nwith histograms use histogram_equidepth_1\n\ndef output = histogram_equidepth_1[T, 2, average]\n(1, 1, 3, 3, 2.0)\n(2, 4, 11, 3, 7.0)\n```\n\n## Arbitrary number of statistic functions given as a module\n\nWith this interface, any number of statistics can be requested,\nby wrapping them inside a module. For example:\n    `histogram_equiwidth[R, 10, STATS]`\nwhere\n- `R` is a relation\n- `10` is the number of buckets\n- `STATS` is a module that contains definitions of statistic functions.\n\nFor example:\n\n```rel\n@inline\nmodule STATS\n    def myAvg[F] = average[F]\n    def mySum[F] = sum[F]\nend\n```\n\nBecause there is no order between the statistic functions of the module,\nthis relation is ternary, with the middle argument specifying the name\nof the statistic function as a string:\n`(bucket_id, stat_name, stat_value)`\nwhere\n- `bucket_id` is an integer identifier for the bucket starting from 1\n- `stat_name` is a string that specifies the statistic function\n- `stat_value` is the value of the statistic function applied on the bucket\n\nNote that min, max, and count are included by default via this interface too,\nidentified by the strings `"min"`, `"max"`, and `"count"` respectively.\n\n#### Example 1\n\n```rel\ndef T = {1; 2; 3; 4; 6; 11}\n\nwith histograms use histogram_equiwidth\n\n@inline\nmodule STATS\n    def myAvg[F] = average[F]\n    def mySum[F] = sum[F]\nend\n\ndef output = histogram_equiwidth[T, 2, STATS]\n(1, "myAvg", 2.5)\n(2, "myAvg", 8.5)\n(1, "max", 4)\n(1, "min", 1)\n(1, "count", 4)\n(1, "mySum", 10)\n(2, "max", 11)\n(2, "min", 6)\n(2, "count", 2)\n(2, "mySum", 17)\n```\n\n#### Example 2\n\n```rel\ndef T = {1; 2; 3; 4; 6; 11}\n\nwith histograms use histogram_equidepth\n\n@inline\nmodule STATS\n    def myAvg[F] = average[F]\nend\n\ndef output = histogram_equidepth[T, 2, STATS]\n(1, "max", 3)\n(1, "min", 1)\n(1, "count", 3)\n(2, "max", 11)\n(2, "min", 4)\n(2, "count", 3)\n(1, "myAvg", 2.0)\n(2, "myAvg", 7.0)\n```',
    code: "@inline\nmodule histograms\n    with _bucketize_equiwidth use _buckets_equiwidth as Bw\n    with _bucketize_equidepth use _buckets_equidepth as Bd",
    children: [
      {
        type: "definition",
        name: "histogram_equiwidth_0",
        docstring:
          "Computes an equi-width histogram on (the last argument of) the relation `R` with `n` buckets.\nmin, max, count are included by default.",
        code: "    def histogram_equiwidth_0[R, n](b, lower, upper, cnt) =\n        lower = min[Bw[R, n][b]] and upper = max[Bw[R, n][b]] and\n        cnt = count[Bw[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equiwidth_1",
        docstring:
          "Computes an equi-width histogram on (the last argument of) the relation `R` with `n` buckets\nand computes 1 statistic function `F1` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equiwidth_1[R, n, F1](b, lower, upper, cnt, f1) =\n        lower = min[Bw[R, n][b]] and upper = max[Bw[R, n][b]] and\n        cnt = count[Bw[R, n][b]] and\n        f1 = F1[Bw[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equiwidth_2",
        docstring:
          "Computes an equi-width histogram on (the last argument of) the relation `R` with `n` buckets\nand computes 2 statistic functions `F1` and `F2` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equiwidth_2[R, n, F1, F2](b, lower, upper, cnt, f1, f2) =\n        lower = min[Bw[R, n][b]] and upper = max[Bw[R, n][b]] and\n        cnt = count[Bw[R, n][b]] and\n        f1 = F1[Bw[R, n][b]] and f2 = F2[Bw[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equiwidth_3",
        docstring:
          "Computes an equi-width histogram on (the last argument of) the relation `R` with `n` buckets\nand computes 3 statistic functions `F1`, `F2`, and `F3` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equiwidth_3[R, n, F1, F2, F3](b, lower, upper, cnt, f1, f2, f3) =\n        lower = min[Bw[R, n][b]] and upper = max[Bw[R, n][b]] and\n        cnt = count[Bw[R, n][b]] and\n        f1 = F1[Bw[R, n][b]] and f2 = F2[Bw[R, n][b]] and f3 = F3[Bw[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equiwidth",
        docstring:
          "Computes an equi-width histogram on the last argument of `R` with `n` buckets\nand computes all the statistic functions contained in the module `A` on each bucket.\nmin, max, count are included by default.",
        code: '    def histogram_equiwidth[R, n, A](b, stat_name, stat_val) =\n        (stat_name = "min" and stat_val = min[Bw[R, n][b]]) or\n        (stat_name = "max" and stat_val = max[Bw[R, n][b]]) or\n        (stat_name = "count" and stat_val = count[Bw[R, n][b]]) or\n        (stat_name = relname_string[stat] and stat_val = A[stat, Bw[R, n][b]] from stat)',
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equidepth_0",
        docstring:
          "Computes an equi-depth histogram on the last argument of `R` with `n` buckets.\nmin, max, count are included by default.",
        code: "    def histogram_equidepth_0[R, n](b, lower, upper, cnt) =\n        lower = min[Bd[R, n][b]] and upper = max[Bd[R, n][b]] and\n        cnt = count[Bd[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equidepth_1",
        docstring:
          "Computes an equi-depth histogram on the last argument of `R` with `n` buckets\nand computes 1 statistic function `F1` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equidepth_1[R, n, F1](b, lower, upper, cnt, f1) =\n        lower = min[Bd[R, n][b]] and upper = max[Bd[R, n][b]] and\n        cnt = count[Bd[R, n][b]] and\n        f1 = F1[Bd[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equidepth_2",
        docstring:
          "Computes an equi-depth histogram on the last argument of `R` with `n` buckets\nand computes 2 statistic functions `F1` and `F2` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equidepth_2[R, n, F1, F2](b, lower, upper, cnt, f1, f2) =\n        lower = min[Bd[R, n][b]] and upper = max[Bd[R, n][b]] and\n        cnt = count[Bd[R, n][b]] and\n        f1 = F1[Bd[R, n][b]] and f2 = F2[Bd[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equidepth_3",
        docstring:
          "Computes an equi-depth histogram on the last argument of `R` with `n` buckets\nand computes 3 statistic functions `F1`, `F2`, and `F3` on each bucket.\nmin, max, count are included by default.",
        code: "    def histogram_equidepth_3[R, n, F1, F2, F3](b, lower, upper, cnt, f1, f2, f3) =\n        lower = min[Bd[R, n][b]] and upper = max[Bd[R, n][b]] and\n        cnt = count[Bd[R, n][b]] and\n        f1 = F1[Bd[R, n][b]] and f2 = F2[Bd[R, n][b]] and f3 = F3[Bd[R, n][b]]",
        children: [],
      },
      {
        type: "definition",
        name: "histogram_equidepth",
        docstring:
          "Computes an equi-depth histogram on the last argument of `R` with `n` buckets\nand computes all the statistic functions contained in the module `A` on each bucket.\nmin, max, count are included by default.",
        code: '    def histogram_equidepth[R, n, A](b, stat_name, stat_val) =\n        (stat_name = "min" and stat_val = min[Bd[R, n][b]]) or\n        (stat_name = "max" and stat_val = max[Bd[R, n][b]]) or\n        (stat_name = "count" and stat_val = count[Bd[R, n][b]]) or\n        (stat_name = relname_string[stat] and stat_val = A[stat, Bd[R, n][b]] from stat)',
        children: [],
      },
    ],
  },
  { type: "unknown", name: "", docstring: "", code: "", children: [] },
  {
    type: "definition",
    name: "Int",
    docstring:
      '  Int(x)\n\nHolds if `x` is a 64-bit signed integer type.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is an Int.\n\n```rel\ndef R = 6\n\nic int_type_check(x in R) {\n    Int(x)\n}\n```\nSchema defined in a relation using `Int`:\n\n```rel\ndef my_relation(x in String, y in Int) {\n    x = "abc" and y = 123\n}\n\ndef output = my_relation\n```',
    code: "@inline\ndef Int = rel_primitive_SignedInt[64]",
    children: [],
  },
  {
    type: "definition",
    name: "UInt",
    docstring:
      "  UInt(x)\n\nHolds if `x` is a 64-bit unsigned integer type.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is a 64-bit unsigned integer:\n\n```rel\ndef R = uint64[2]\n\nic uint_type_check(x in R) {\n    UInt(x)\n}\n```",
    code: "@inline\ndef UInt = rel_primitive_UnsignedInt[64]",
    children: [],
  },
  {
    type: "definition",
    name: "UInt128",
    docstring: "    UInt128\n\n128-bit unsigned integer type.",
    code: "@inline\ndef UInt128 = rel_primitive_UnsignedInt[128]",
    children: [],
  },
  {
    type: "definition",
    name: "Float",
    docstring:
      "  Float(x)\n\nHolds if `x` is a 64-bit floating point number type.\n\nExample:\n\nIntegrity constraint that tests whether `x` is a 64-bit floating point number.\n\n```rel\ndef R = Float[2.0]\n\nic float_type_check(x in R) {\n    Float(x)\n}\n```",
    code: "@inline\ndef Float = rel_primitive_Floating[64]\n\n// Forward declarations of control relations.\n\ndef output = false\ndef abort = false\ndef insert = false\ndef delete = false\ndef export = false\ndef _internal_ic_violation = false",
    children: [],
  },
  {
    type: "module",
    name: "rel:mathopt",
    docstring:
      "    rel:mathopt\n\nIntegration of external mathematical optimization solvers within Rel.\n\nThis module implements a DSL that defines operators which allow for the specification of \nmathematical optimization problems within Rel. Additionally, it defines APIs to execute the\nspecified models using different interpreters, which are different implementations of the \nDSL operators.\n\n## Express an Optimization Model\n\nA mathematical optimization problem should be specified in 3 modules:\n  * a `Data` module defines the underlying data feeding into the problem.\n  * a `Variables` module declares variables to be solved for, usually based on the `Data`.\n  * a `Model` module uses the DSL operators to specify an *objective function* and a set of\n*constraints* that should be satisfied by a solution.\n\nNote that you can use any name for those modules. A very simple (and very artificial)\nexample could be the following:\n\n```rel\nmodule MyData\n  // my data set has only a couple of integers\n  def domain = 5 ; 7\nend\n\n@inline\nmodule MyVariables[Data]\n    with Data use domain\n    // x is an integer variable\n    def x:type = \"integer\"\n    // create a variable for each value in the Data domain\n    def x:keys = (domain)\nend\n\n@inline\nmodule MyModel[Data, Variables, DSL]\n    with Data use domain\n    with Variables use x\n    with DSL use sum, foreach, +, -, *, ≼, ≽, /, ∧, ∨, =\n\n    // we will try to maximize the sum of the variables\n    def objective = sum[x[d] for d in domain]\n    // subject to an artificial constraint limiting their values\n    def subject_to:artificial = foreach[domain, {d : d * x[d] ≼ 20 }]\nend\n```\n\nWith these definitions we can now use one of the interpreters. There are currently 3 \nimplementations: `solve`, `evaluate` and `debug`.\n\n## Solve\n\n`rel:mathopt:solve` uses an implementation that builds a representation of the model and\nsends it to an external, configurable solver. The results can be inspected with a call to \n`rel:mathopt:extract`. For example:\n\n```rel\ndef result = rel:mathopt:solve[{}, MyModel, MyData, MyVariables]\ndef extracted = rel:mathopt:extract[result, MyData, MyVariables]\n```\n\nNote that currently it is necessary to materialize `result`, it cannot be `@inlined`. The \n`extracted` relation contains the objective function value and solution data, as well as\nvarious meta-data about the execution:\n\n```rel\n// the outcome of the execution (see below for possible values)\nic { extracted:outcome = 1 }\n// the termination status of the execution (see below for possible values)\nic { extracted:termination_status = 1 }\n// the time in seconds taken by the external solver to execute\nic { exists extracted:solver_time_seconds }\n// the external solver version\nic { exists extracted:solver_version }\n```\n\nThe returned `outcome` relation contains one of the following values:\n\n  * Model Error (0): some error occurred in the translation from Rel to solver, which\nusually means the model was incorrectly specified.\n  * Success (1): the Rel model was correctly translated into a solver model, the solver was\ninvoked and it returned a termination status that indicated it reached a conclusion, which \ncould be an OK or relaxed result. The termination_status field contains a more detailed value\nfor the outcome.\n  * Solver Limit (2): translation was OK but the solver stopped without reaching a\nconclusion due to some limit imposed on it, such as a time or model size limit.\n  * Solver Error (3): translation was OK but the solver stopped due to some unexpected\nerror.\n\nIf the `outcome` is not Model Error(0), then the `termination_status` contains additional\ninformation. Its value comes from MathOptInterface's [TerminationStatusCode](https://jump.dev/JuMP.jl/stable/moi/reference/models/#MathOptInterface.TerminationStatusCode).\n\n## Evaluate\n\n`rel:mathopt:evaluate` uses a DSL implementation that evaluates the model against a\nproposed solution. This allows us to compute the objective function value for a specific\nsolution, and check whether the constraints would be satisfied.\n\n```rel\nmodule ProposedSolution\n    def x = MyData:domain, 2\nend\ndef evaluated = rel:mathopt:evaluate[MyModel, MyData, ProposedSolution]\n\n// the objective function value using ProposedSolution variable assignments\nic { evaluated:objective = 4 }\n// the artificial constraint exists because it was satisfied by the assignments\nic { exists evaluated:subject_to:artificial }\n```\n\n## Debug\n\nFinally, `rel:mathopt:debug` can be used to compute debug information in the form of strings\nthat contain S-expressions that represent the model's objective function and constraints.\nThis may be useful to understand issues with the specification.\n\n```rel\n// will output debug strings for objective function and constraints\ndef output = rel:mathopt:debug[MyModel, MyData, MyVariables]\n```\n",
    code: "module rel:mathopt",
    children: [
      {
        type: "definition",
        name: "solve",
        docstring:
          "    rel:mathopt:solve[CONFIG, MODEL, DATA, VARS]\n\nCall a mathematical optimization solver to search for a solution to the specified\nproblem.\n\nInputs:\n- `CONFIG`: the relation that contains configuration for the solver. \n`mathopt:SolverConfigDefaults` describes the accepted configuration parameters. The \nempty relation  can be used when the defaults are appropriate, e.g. \n`rel:mathopt:solve[{}, ...]`\n- `MODEL`: the relation that specifies the model to solve. It should contain the \nobjective function, the constraints (under a `subject_to` sub-relation) and must be\nparameterizable with DATA, VARS and SOLVER higher order relations.\n- `DATA`: the relation that contains data to populate the model. It must be first order.\n- `VARS`: the relation that declares the model variables. It must be parametrizable\nwith DATA.\n\nOutput:\n- an opaque binary string containing the result of the solver. Use the \n`rel:mathopt:extract` function to extract detailed information from the result.",
        code: '    @inline\n    def solve[CONFIG, MODEL, DATA, VARS] =\n        rel_primitive_mathopt_solve[\n            (string[_mathopt_solve_config[CONFIG][:sense]]),\n            (string[_mathopt_solve_config[CONFIG][:solver]]),\n            (string[_mathopt_solve_config[CONFIG][:return_file_format]]),\n            _mathopt_solve_attributes_folded[CONFIG],\n            _mathopt_solve_variable_declarations_folded[VARS[DATA]],\n            (_mathopt_solve_model[MODEL, DATA, VARS][_mathopt_solve_config[CONFIG][:objective]] <++ ""),\n            _mathopt_solve_constraints_folded[_mathopt_solve_model[MODEL, DATA, VARS]]\n        ]',
        children: [],
      },
      {
        type: "definition",
        name: "extract",
        docstring:
          "    rel:mathopt:extract[result, DATA, VARS]\n\nExtract detailed information from the result of a call to a mathematical optimization\nsolver. The result must be a materialized relation. This is equivalent to the union of\n`rel:mathopt:extract_info` and `rel:mathopt:extract_solution`; if you are only \ninterested in the solution, using `rel:mathopt:extract_solution` is potentially more \nefficient.\n\nInputs:\n- `result`: a relation that contains the result of a `rel:mathopt:solve` call. It must \nbe materialized.\n- `DATA`: the relation that contains data to populate the model. It must be grounded.\n- `VARS`: the relation that declares the model variables. It must be parametrizable\nwith DATA.\n\nOutput:\n- a function from variable keys to the float value assigned by the solver, if any. The\nkeys depend on the variable specification in VARS.\n\nExample:\n```rel\ndef result = rel:mathopt:solve[{}, Model, Data, Variables]\ndef extracted = rel:mathopt:extract[result, Data, Variables]\n```",
        code: "    @inline\n    def extract[RESULT, DATA, VARS](:solution, name, x..., value) =\n        rel_primitive_mathopt_extract[RESULT](:solution, id, value) and\n        _mathopt_debug_variables[VARS[DATA]](name, x..., id) from id\n\n    @inline\n    def extract[RESULT, DATA, VARS](key, value) =\n        rel_primitive_mathopt_extract[RESULT](key, value) and key != :solution",
        children: [],
      },
      {
        type: "definition",
        name: "extract_info",
        docstring:
          "    rel:mathopt:extract_info[result]\n\nSimilar to `rel:mathopt:extract`, but only extract meta-information, such as termination\nstatus, solver time, etc.",
        code: "    @inline\n    def extract_info[RESULT](key, value) =\n        rel_primitive_mathopt_extract[RESULT](key, value)",
        children: [],
      },
      {
        type: "definition",
        name: "extract_solution",
        docstring:
          "    rel:mathopt:extract_solution[result, DATA, VARS]\n\nSimilar to `rel:mathopt:extract`, but only extract the solution, which contains variable\nassignments.",
        code: "    @inline\n    def extract_solution[RESULT, DATA, VARS](name, x..., value) =\n        rel_primitive_mathopt_extract[RESULT](:solution, id, value) and\n        _mathopt_debug_variables[VARS[DATA]](name, x..., id) from id",
        children: [],
      },
      {
        type: "definition",
        name: "evaluate",
        docstring:
          '    rel:mathopt:evaluate[MODEL, DATA, SOLUTION]\n\nEvaluate a model against a specific solution.\n\nThis function uses the same `MODEL` and `DATA` modules that `rel:mathopt:solve` expects,\nbut instead of searching for a solution, it evaluates the provided solution. This is\nuseful to validate whether a solution satisfied the model constraints and to obtain the\ncorresponding value for the objective function.\n\nExample:\n```rel\nmodule CorrectSolution\ndef xMake = ("bands", 10) ; ("coils", 20)\nend\ndef evaluated_model = rel:mathopt:evaluate[Model, Data, CorrectSolution]\n```',
        code: "    @inline\n    def evaluate[MODEL, DATA, SOLUTION] =\n        MODEL[DATA, SOLUTION, mathopt:Solver:Evaluate]",
        children: [],
      },
      {
        type: "definition",
        name: "debug",
        docstring:
          "    rel:mathopt:debug[MODEL, DATA, VARS]\n\nGet debug information for a mathematical optimization model.\n\nThis function has the same interface as `rel:mathopt:solve`, but returns debug\ninformation in the form of strings that contain S-expressions that represent the model's\nobjective function and constraints.\n\nExample:\n```rel\ndef output = rel:mathopt:debug[Model, Data, Variables]\n```",
        code: "    @inline\n    def debug[MODEL, DATA, VARS] =\n        MODEL[DATA, _mathopt_debug_variables[VARS[DATA]], mathopt:Solver:Debug]",
        children: [],
      },
    ],
  },
  {
    type: "module",
    name: "mathopt:SolverConfigDefaults",
    docstring:
      "Default values for the configuration parameters accepted by `rel:mathopt:solve`.",
    code: "module mathopt:SolverConfigDefaults",
    children: [
      {
        type: "definition",
        name: "sense",
        docstring:
          "Indicates whether the solver should :maximize or :minimize the objective function.",
        code: "    def sense = :maximize",
        children: [],
      },
      {
        type: "definition",
        name: "objective",
        docstring:
          "A symbol with the name of the sub-relation in `MODEL` that contains the \nobjective function definition.",
        code: "    def objective = :objective",
        children: [],
      },
      {
        type: "definition",
        name: "solver",
        docstring:
          "Which solver backend to use. Currently only :CBC is accepted.",
        code: "    def solver = :CBC",
        children: [],
      },
      {
        type: "definition",
        name: "solver_attributes",
        docstring:
          'Key value pairs of solver-specific attributes. These are sent directly to the solver \nbackend. The key must be a string and the value a number.\nExample:\n```rel\n// provide a solution timeout limit to `CBC`.\ndef solver_attributes = {("seconds", 60)}\n```',
        code: "    def solver_attributes = {}",
        children: [],
      },
      {
        type: "definition",
        name: "return_file_format",
        docstring:
          "A symbol specifying the format of the optimization model to be returned as a single \nstring. The available formats are :LP, :MPS, :MOF, and :NL. \n",
        code: "    def return_file_format = :NONE",
        children: [],
      },
    ],
  },
  {
    type: "module",
    name: "mathopt:Solver",
    docstring:
      "Various implementations of a DSL for specifying mathematical optimization problems.",
    code: "@inline\nmodule mathopt:Solver",
    children: [
      {
        type: "module",
        name: "Solve",
        docstring: "  Solve models using a mathematical optimization solver.",
        code: '    module Solve\n        def (+) = rel_primitive_mathopt_operation["ADD"]\n        def (-) = rel_primitive_mathopt_operation["SUBTRACT"]\n        def (*) = rel_primitive_mathopt_operation["MULTIPLY"]\n        def (=) = rel_primitive_mathopt_operation["EQUALS"]\n        def (≼) = rel_primitive_mathopt_operation["LTE"]\n        def (≽) = rel_primitive_mathopt_operation["GTE"]\n        def (/) = rel_primitive_mathopt_operation["DIVIDE"]\n        def (∧) = rel_primitive_mathopt_operation["AND"]\n        def (∨) = rel_primitive_mathopt_operation["OR"]\n        \n        def sum[R] = rel_primitive_reduce_noinit[rel_primitive_mathopt_operation["ADD"], R]\n        \n        def foreach[DOMAIN, EXPR] = rel_primitive_reduce_noinit[\n            rel_primitive_mathopt_operation["AND"], \n            last[{ xs... where DOMAIN(xs...): EXPR[xs...] }]\n        ]\n        // TODO: this is not working; we should create an expression node with the error\n        def foreach[DOMAIN, EXPR] = \n            "Expression undefined for domain with these keys, model is trivially infeasible",\n            { xs... where DOMAIN(xs...): not exists EXPR[xs...] }',
        children: [],
      },
      {
        type: "module",
        name: "Evaluate",
        docstring:
          "  Evaluate objective functions and constraints against variable assignments.",
        code: "    module Evaluate\n        def (+) = add\n        def (-) = subtract\n        def (*) = multiply\n        def (=) = eq\n        def (≼) = lt_eq\n        def (≽) = gt_eq\n        def (/) = divide\n        def (∧)(F, G) = F and G\n        def (∨)(F, G) = F or G\n        def sum[R] = rel_primitive_reduce_noinit[add, R]\n        def foreach[DOMAIN, EXPR] = forall(xs... where DOMAIN(xs...): EXPR(xs...))",
        children: [],
      },
      {
        type: "module",
        name: "Debug",
        docstring:
          "  Debug models by generating S-expressions for objective functions and constraints.",
        code: '    module Debug\n        def (+) = _mathopt_debug_expr["+"]\n        def (-) = _mathopt_debug_expr["-"]\n        def (*) = _mathopt_debug_expr["*"]\n        def (=) = _mathopt_debug_expr["="]\n        def (≼) = _mathopt_debug_expr["≼"]\n        def (≽) = _mathopt_debug_expr["≽"]\n        def (/) = _mathopt_debug_expr["/"]\n        def (∧) = _mathopt_debug_expr["∧"]\n        def (∨) = _mathopt_debug_expr["∨"]\n        \n        def sum[R] = rel_primitive_reduce[_mathopt_debug_expr["+"], "0", R]\n        \n        def foreach[DOMAIN, EXPR] = rel_primitive_reduce[\n            _mathopt_debug_expr["∧"],\n            "true",\n            last[{ xs... where DOMAIN(xs...): EXPR[xs...] }]\n        ]\n        def foreach[DOMAIN, EXPR] = \n            "Expression undefined for domain with these keys, model is trivially infeasible",\n            { xs... where DOMAIN(xs...): not exists EXPR[xs...] }',
        children: [],
      },
    ],
  },
  {
    type: "definition",
    name: "_mathopt_solve_config",
    docstring: "",
    code: '\n/*\n * mathopt:Solver:Solve implementation helpers\n */\n\n// apply the defaults into this `CONFIG`\n@inline\ndef _mathopt_solve_config[CONFIG] = CONFIG <++ mathopt:SolverConfigDefaults\n\n// instantiate the model with a rel:mathopt:mathopt:Solver:Solve\n@inline\ndef _mathopt_solve_model[MODEL, DATA, VARS] = MODEL[DATA, _mathopt_solve_variables[VARS[DATA]], mathopt:Solver:Solve]\n\n// using hash but we need something smaller than 128bits\n@inline\ndef _mathopt_solve_variables[VARS, x...] = rel_primitive_mathopt_variable[_mathopt_debug_variables[VARS, x...]]\n\n// fold all solver attributes in a single AND expression so that it can be passed to a simple native\n@inline\ndef _mathopt_solve_attributes_folded[CONFIG] = rel_primitive_reduce[\n    rel_primitive_mathopt_fold,\n    "",\n    _mathopt_solve_attributes[CONFIG]\n]\n\n// given a configuration, extract a relation with the attributes to be sent to the solver\n@inline\ndef _mathopt_solve_attributes[CONFIG] = \n    x: CONFIG:solver_attributes(name, value) and\n    x = rel_primitive_mathopt_attribute[name, value] from name, value\n\n@inline\ndef _mathopt_solve_config_folded[CONFIG] = rel_primitive_reduce[\n    rel_primitive_mathopt_fold,\n    "",\n    _mathopt_solve_configs[CONFIG]\n]\n\n@inline\ndef _mathopt_solve_configs[CONFIG] = x:\n  CONFIG(name, value) and\n  x = rel_primitive_mathopt_attribute[name, value] from name, value\n\n// fold all constraints in a single AND expression so that it can be passed to a simple native\n@inline\ndef _mathopt_solve_constraints_folded[INSTANCE] = rel_primitive_reduce[\n    rel_primitive_mathopt_fold,\n    "",\n    rel_primitive_mathopt_constraint[INSTANCE[:subject_to, _]]\n]\n\n// fold all variable infos in a single AND expression so that it can be passed to a simple native\n@inline\ndef _mathopt_solve_variable_declarations_folded[VARS] = rel_primitive_reduce[\n    rel_primitive_mathopt_fold,\n    "",\n     _mathopt_solve_variable_declarations[VARS]\n]\n\n// use a primitive to create variable infos (id -> type) for all variables in this model\n@inline\ndef _mathopt_solve_variable_declarations[VARS] = { info :\n    _mathopt_solve_variables[VARS](name, x..., id) and\n    VARS(name, :type, t) and\n    info = rel_primitive_mathopt_variable_declaration[id, t] from id, name, t, x...\n}\n\n/*\n * mathopt:Solver:Debug implementation helpers\n */\n\n// build the s-expression with this operator and operands\n@inline\ndef _mathopt_debug_expr[op, x, y] = \n    concat[op, concat["(", concat[x, concat[", ", concat[y, ")"]]]]]\n\n// using hash because sort is not working, but would be nice to have a nicer name here\n@inline\ndef _mathopt_debug_variables[VARS] = hash[{ name, x...: VARS(name, :keys, x...) }]\n// this is how we would like to implement debug variables, with a nice name\n@inline\ndef _mathopt_debug_variables_ideal[VARS](name, x..., s) = \n    sort[VARS[name, :keys]](i, x...)\n\tand string(i, tmp)\n    and concat(name, tmp, s)\n    from i, tmp',
    children: [],
  },
  {
    type: "definition",
    name: "_flatten",
    docstring:
      '    _flatten[R]\n\nThis is a utility to "flatten" a module (e.g. specialized relation).  This should *only* be\nused internally, inside the external machine learning bindings.  Do not use it in your\nprogram!',
    code: "@inline def _flatten = rel_primitive_flatten\n\n@inline def ext_ml_train[X, F, R, H] = rel_primitive_ext_ml_train[X, _flatten[F], R, H]\n@inline def ext_ml_predict[X, M, F, N] = rel_primitive_ext_ml_predict[X, M, _flatten[F], N]\n@inline def ext_ml_build[X, F, N, H] = rel_primitive_ext_ml_build[X, _flatten[F], N, H]\n@inline def ext_ml_transform[X, K, M, F, N, H] =\n    rel_primitive_ext_ml_transform[X, K, M, _flatten[F], N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_adaboost",
    docstring:
      '    mlpack_adaboost[F, R, H]\n\nAn implementation of the AdaBoost.MH (Adaptive Boosting) algorithm for classification.\nThis can be used to train an AdaBoost model on labeled data.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#adaboost) for more\ndetails.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `iterations` (`Int`): The maximum number of boosting iterations to be run (0 will run\n     until convergence.)  Default `1000`.\n  - `tolerance` (`Float64`): The tolerance for change in values of the weighted error\n     during training.  Default `1e-10`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.\n  - `weak_learner` (`String`): The type of weak learner to use: `decision_stump`, or\n    `perceptron`.  Default `decision_stump`.',
    code: "@inline def mlpack_adaboost[F, R, H] = ext_ml_train[:mlpack_adaboost, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_adaboost_predict",
    docstring:
      "    mlpack_adaboost_predict[M, F, N]\n\nGiven an AdaBoost.MH model trained with `mlpack_adaboost[`, make class predictions on a\ntest set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#adaboost) and the\ndocumentation for `mlpack_adaboost[]` for more details.\n\nInputs:\n  - `M`: AdaBoost model to use for prediction; must be the result of a previous\n         `mlpack_adaboost[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_adaboost_predict[M, F, N] =\n    ext_ml_predict[:mlpack_adaboost_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_decision_tree",
    docstring:
      '    mlpack_decision_tree[F, R, H]\n\nAn implementation of an ID3-style decision tree for classification, which supports\ncategorical data.  This binding accepts categorical features in `F`; a feature in `F` is\ninterpreted as categorical if it is an entity or has `String` type.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#decision_tree) for\nmore details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `maximum_depth` (`Int`): Maximum depth of the tree (0 means no limit).  Default `0`.\n  - `minimum_gain_split` (`Float64`): Minimum gain for node splitting.  Default `1e-7`.\n  - `minimum_leaf_size` (`Int`): Minimum number of points in a leaf.  Default `20`.\n  - `print_training_accuracy` (`Bool`): Print the training accuracy.  Default `false`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.',
    code: "@inline def mlpack_decision_tree[F, R, H] = ext_ml_train[:mlpack_decision_tree, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_decision_tree_predict",
    docstring:
      "    mlpack_decision_tree_predict[M, F, N]\n\nGiven a decision tree model trained with `mlpack_decision_tree[]`, make class predictions\non a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#decision_tree) and\nthe documentation for `mlpack_decision_tree[]` for more details.\n\nInputs:\n  - `M`: decision tree model to use for prediction; must be the result of a previous\n         `mlpack_decision_tree[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_decision_tree_predict[M, F, N] =\n    ext_ml_predict[:mlpack_decision_tree_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_hoeffding_tree",
    docstring:
      '    mlpack_hoeffding_tree[F, R, H]\n\nAn implementation of Hoeffding trees, a form of streaming decision tree for\nclassification. Given labeled data, a Hoeffding tree can be trained.  This binding accepts\ncategorical features in `F`; a feature in `F` is interpreted as categorical if it is an\nentity or has `String` type.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#hoeffding_tree)\nfor more details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `batch_mode` (`Bool`): If true, samples will be considered in batch instead of as a\n     stream. This generally results in better trees but at the cost of memory usage and\n     runtime.\n  - `bins` (`Int`): If the `domingos` split strategy is used, this specifies the number of\n     bins for each numeric split.   Default `10`.\n  - `confidence` (`Float64`): Confidence before splitting (between 0 and 1).  Default\n    `0.95`.\n  - `info_gain` (`Bool`): If set, information gain is used instead of Gini impurity for\n     calculating Hoeffding bounds.\n  - `max_samples` (`Int`): Maximum number of samples before splitting.  Default `5000`.\n  - `min_samples` (`Int`): Minimum number of samples before splitting.  Default `100`.\n  - `numeric_split_strategy` (`String`): The splitting strategy to use for numeric\n     features: `domingos` or `binary`.  Default `binary`.\n  - `observations_before_binning` (`Int`): If the `domingos` split strategy is used, this\n     specifies the number of samples observed before binning is performed.\n  - `passes` (`Int`): Number of passes to take over the dataset.  Default `1`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.',
    code: "@inline def mlpack_hoeffding_tree[F, R, H] = ext_ml_train[:mlpack_hoeffding_tree, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_hoeffding_tree_predict",
    docstring:
      "    mlpack_hoeffding_tree_predict[M, F, N]\n\nGiven a Hoeffding tree model trained with `mlpack_hoeffding_tree[]`, make class\npredictions on a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#hoeffding_tree)\nand the documentation for `mlpack_hoeffding_tree[]` for more details.\n\nInputs:\n  - `M`: Hoeffding tree model to use for prediction; must be the result of a previous\n         `mlpack_hoeffding_tree[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_hoeffding_tree_predict[M, F, N] =\n    ext_ml_predict[:mlpack_hoeffding_tree_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_lars",
    docstring:
      '    mlpack_lars[F, R, H]\n\nAn implementation of Least Angle Regression (Stagewise/laSso), also known as LARS. This\ncan train a LARS/LASSO/Elastic Net model.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#lars) for more\ndetails.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `lambda1` (`Float64`): Regularization parameter for l1-norm penalty.  Default `0`.\n  - `lambda2` (`Float64`): Regularization parameter for l2-norm penalty.  Default `0`.\n  - `use_cholesky` (`Bool`): Use Cholesky decomposition during computation rather than\n     explicitly computing the full Gram matrix.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.',
    code: "@inline def mlpack_lars[F, R, H] = ext_ml_train[:mlpack_lars, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_lars_predict",
    docstring:
      "    mlpack_lars_predict[M, F, N]\n\nGiven a LARS model trained with `mlpack_lars[]`, make predictions on a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#lars) and the\ndocumentation for `mlpack_lars[]` for more details.\n\nInputs:\n  - `M`: LARS model to use for prediction; must be the result of a previous\n         `mlpack_lars[]` call\n  - `F`: relation of test features for which predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_lars_predict[M, F, N] = ext_ml_predict[:mlpack_lars_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_linear_regression",
    docstring:
      '    mlpack_linear_regression[F, R, H]\n\nAn implementation of simple linear regression and ridge regression using ordinary least\nsquares. Given a dataset and responses, a model can be trained.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#linear_regression)\nfor more details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `lambda` (`Float64`): Tikhonov regularization for ridge regression. If `0`, the method\n     reduces to linear regression.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.',
    code: "@inline def mlpack_linear_regression[F, R, H] =\n    ext_ml_train[:mlpack_linear_regression, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_linear_regression_predict",
    docstring:
      "    mlpack_linear_regression_predict[M, F, N]\n\nGiven a linear regression model trained with `mlpack_linear_regression[]`, make\npredictions on a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#linear_regression)\nand the documentation for `mlpack_linear_regression[]` for more details.\n\nInputs:\n  - `M`: linear regression model to use for prediction; must be the result of a previous\n         `mlpack_linear_regression[]` call\n  - `F`: relation of test features for which predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_linear_regression_predict[M, F, N] =\n    ext_ml_predict[:mlpack_linear_regression_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_linear_svm",
    docstring:
      '    mlpack_linear_svm[F, R, H]\n\nAn implementation of linear SVM for multiclass classification. Given labeled data, a\nmodel can be trained and saved for future use.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#linear_svm) for\nmore details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `delta` (`Float64`): margin of difference between correct class and other classes\n     (default `1.0`).\n  - `epochs` (`Int`): maximum number of full epochs over dataset for psgd (default `50`).\n  - `lambda` (`Float64`): L2-regularization parameter for training (default `0.0001`).\n  - `max_iterations` (`Int`): Maximum iterations for optimizer (`0` indicates no limit).\n     Default `10000`.\n  - `no_intercept` (`Bool`): Do not add the intercept term to the model (default `false`).\n  - `num_classes` (`Int`): Number of classes for classification; if unspecified (or 0), the\n     number of classes found in the labels will be used.  Default `0`.\n  - `optimizer` (`String`): Optimizer to use for training (`"lbfgs"` or `"psgd"`). Default\n     `"lbfgs"`.\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `shuffle` (`Bool`): If true, don’t shuffle the order in which data points are visited\n      for parallel SGD.  Default `false`.\n  - `step_size` (`Float64`): Step size for parallel SGD optimizer.  Default `0.01`.\n  - `tolerance` (`Float64`): Convergence tolerance for optimizer.  Default `1e-10`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.',
    code: "@inline def mlpack_linear_svm[F, R, H] = ext_ml_train[:mlpack_linear_svm, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_linear_svm_predict",
    docstring:
      "    mlpack_linear_svm_predict[F, R, H]\n\nGiven a linear SVM model trained with `mlpack_linear_svm[]`, make predictions on a test\nset.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#linear_svm) and\nthe documentation for `mlpack_linear_svm[]` for more details.\n\nInputs:\n  - `M`: linear SVM model to use for prediction; must be the result of a previous\n         `mlpack_linear_svm[]` call\n  - `F`: relation of test features for which predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_linear_svm_predict[M, F, N] =\n    ext_ml_predict[:mlpack_linear_svm_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_logistic_regression",
    docstring:
      '    mlpack_logistic_regression[F, R, H]\n\nAn implementation of L2-regularized logistic regression for two-class classification.\nGiven labeled data, a model can be trained and saved for future use.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#logistic_regression)\nfor more details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `batch_size` (`Int`): Batch size for SGD.  Default `64`.\n  - `decision_boundary` (`Float64`): Decision boundary for prediction; if the logistic\n     function for a point is less than the boundary, the class is taken to be `1`;\n     otherwise, the class is `2`. Default `0.5`.\n  - `lambda` (`Float64`): L2-regularization parameter for training.  Default `0`.\n  - `max_iterations` (`Int`): Maximum iterations for optimizer (`0` indicates no limit).\n     Default `10000`.\n  - `optimizer` (`String`): Optimizer to use for training (`"lbfgs"` or `"sgd"`).  Default\n     `"lbfgs"`.\n  - `step_size` (`Float64`): Step size for SGD optimizer.  Default `0.01`.\n  - `tolerance` (`Float64`): Convergence tolerance for optimizer.  Default `1e-10`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.',
    code: "@inline def mlpack_logistic_regression[F, R, H] =\n    ext_ml_train[:mlpack_logistic_regression, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_logistic_regression_predict",
    docstring:
      "    mlpack_logistic_regression_predict[F, R, H]\n\nGiven a logistic regression model trained with `mlpack_logistic_regression[]`, make\nclass predictions on a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#logistic_regression)\nand the documentation for `mlpack_logistic_regression[]` for more details.\n\nInputs:\n  - `M`: logistic regression model to use for class predictions; must be the result of a\n      previous `mlpack_logistic_regression[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_logistic_regression_predict[M, F, N] =\n    ext_ml_predict[:mlpack_logistic_regression_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_nbc",
    docstring:
      '    mlpack_nbc[F, R, H]\n\nAn implementation of the Naive Bayes Classifier, used for classification. Given labeled\ndata, an NBC model can be trained.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#nbc) for more\ndetails.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `incremental_variance` (`Bool`): The variance of each class will be calculated\n     incrementally.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and\n     timers at the end of execution.',
    code: "@inline def mlpack_nbc[F, R, H] = ext_ml_train[:mlpack_nbc, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_nbc_predict",
    docstring:
      "    mlpack_nbc_predict[M, F, N]\n\nGiven a Naive Bayes classifier model trained with `mlpack_nbc[]`, make class predictions\non a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#nbc) and the\ndocumentation for `mlpack_nbc[]` for more details.\n\nInputs:\n  - `M`: Naive Bayes classification model to use for prediction; must be the result of a\n         previous `mlpack_nbc[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_nbc_predict[M, F, N] = ext_ml_predict[:mlpack_nbc_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_perceptron",
    docstring:
      '    mlpack_perceptron[F, R, H]\n\nAn implementation of a perceptron---a single level neural network---for classification.\nGiven labeled data, a perceptron can be trained.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#perceptron) for\nmore details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `max_iterations` (`Int`): The maximum number of iterations the perceptron is to be run.\n     Default `1000`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and',
    code: "@inline def mlpack_perceptron[F, R, H] = ext_ml_train[:mlpack_perceptron, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_perceptron_predict",
    docstring:
      "    mlpack_perceptron_predict[M, F, N]\n\nGiven a perceptron model trained with `mlpack_perceptron[]`, make class predictions on a\ntest set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#perceptron) and\nthe documentation for `mlpack_perceptron[]` for more details.\n\nInputs:\n  - `M`: Perceptron model to use for prediction; must be the result of a previous\n         `mlpack_perceptron[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_perceptron_predict[M, F, N] =\n    ext_ml_predict[:mlpack_perceptron_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_random_forest",
    docstring:
      '    mlpack_random_forest[F, R, H]\n\nAn implementation of the standard random forest algorithm by Leo Breiman for\nclassification. Given labeled data, a random forest can be trained.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#random_forest) for\nmore details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `maximum_depth` (`Int`): Maximum depth of the tree (`0` means no limit).  Default `0`.\n  - `minimum_gain_split` (`Float64`): Minimum gain needed to make a split when building a\n     tree.  Default `0.0`.\n  - `minimum_leaf_size` (`Int`): Minimum number of points in each leaf node.  Default `1`.\n  - `num_trees` (`Int`): Number of trees in the random forest.  Default `10`.\n  - `print_training_accuracy` (`Bool`): If set, then the accuracy of the model on the\n     training set will be predicted (verbose must also be specified).\n  - `seed` (`Int`): Random seed. If `0`, ‘std::time(NULL)’ is used.  Default `0`.\n  - `subspace_dim` (`Int`): Dimensionality of random subspace to use for each split. `0`\n     will autoselect the square root of data dimensionality.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and',
    code: "@inline def mlpack_random_forest[F, R, H] =\n    ext_ml_train[:mlpack_random_forest, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_random_forest_predict",
    docstring:
      "    mlpack_random_forest_predict[M, F, N]\n\nGiven a random forest model trained with `mlpack_random_forest[]`, make class predictions\non a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#random_forest) and\nthe documentation for `mlpack_random_forest[]` for more details.\n\nInputs:\n  - `M`: random forest model to use for prediction; must be the result of a previous\n         `mlpack_random_forest[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_random_forest_predict[M, F, N] =\n    ext_ml_predict[:mlpack_random_forest_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_softmax_regression",
    docstring:
      '    mlpack_softmax_regression[F, R, H]\n\nAn implementation of softmax regression for classification, which is a multiclass\ngeneralization of logistic regression. Given labeled data, a softmax regression model can\nbe trained and saved for future use.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#softmax_regression)\nfor more details.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `R`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `lambda` (`Float64`): L2-regularization constant.  Default `0.0001`.\n  - `max_iterations` (`Int`): Maximum number of iterations before termination.  Default\n     `400`.\n  - `no_intercept` (`Bool`): Do not add the intercept term to the model.\n  - `number_of_classes` (`Int`): Number of classes for classification; if unspecified (or\n     `0`), the number of classes found in the labels will be used.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages and the full list of parameters and',
    code: "@inline def mlpack_softmax_regression[F, R, H] =\n    ext_ml_train[:mlpack_softmax_regression, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_softmax_regression_predict",
    docstring:
      "    mlpack_softmax_regression_predict[M, F, N]\n\nGiven a softmax regression model trained with `mlpack_softmax_regression[]`, make class\npredictions on a test set.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#softmax_regression)\nand the documentation for `mlpack_softmax_regression[]` for more details.\n\nInputs:\n  - `M`: softmax regression model to use for prediction; must be the result of a previous\n         `mlpack_softmax_regression[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def mlpack_softmax_regression_predict[M, F, N] =\n    ext_ml_predict[:mlpack_softmax_regression_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_knn_build",
    docstring:
      '    mlpack_knn_build[R, N, H]\n\nAn implementation of k-nearest-neighbor search using single-tree and dual-tree\nalgorithms.  Given a set of reference points and query points, this can build trees that\ncan be used in later calls to `mlpack_knn[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#knn) and the\ndocumentation for `mlpack_knn[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `leaf_size` (`Int`): Leaf size for tree building (used for kd-trees, vp trees, random\n     projection trees, UB trees, R trees, R* trees, X trees, Hilbert R trees, R+ trees,\n     R++ trees, spill trees, and octrees).  Default `20`.\n  - `random_basis` (`Bool`): before tree-building, project the data onto a random\n     orthogonal basis.  Default `false`.\n  - `rho` (`Float64`): Balance threshold (only valid for spill trees).  Default `0.7`.\n  - `tau` (`Float64`): Overlapping size (only valid for spill trees).  Default `0`.\n  - `tree_type` (`String`): Type of tree to use: "kd", "vp", "rp", "max-rp", "ub",\n     "cover", "r", "r-star", "x", "ball", "hilbert-r", "r-plus", "r-plus-plus", "spill",\n     "oct".  Default `"kd"`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A KNN model that can be used in a later call to `mlpack_knn[]`.',
    code: "@inline def mlpack_knn_build[R, N, H] = ext_ml_build[:mlpack_knn, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_knn",
    docstring:
      '    mlpack_knn[K, M, Q, N, H]\n\nPerform k-nearest-neighbor search on a relation `Q` containing query points, using a\nmodel `M` that was built with `mlpack_knn_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#knn) and the\ndocumentation for `mlpack_knn_build[]` for more details.\n\nInputs:\n  - `K`: constant representing number of nearest neighbors to search for.\n  - `M`: pre-trained model for kNN; must be the result of a previous `mlpack_knn_build[]`\n         call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `algorithm` (`String`): Type of neighbor search: "naive", "single_tree", "dual_tree",\n     "greedy".  Default `"dual_tree"`.\n  - `epsilon` (`Float64`): If specified, will do approximate nearest neighbor search with\n     given relative error.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., distance) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th nearest neighbor, and `distance` is the Euclidean distance between the\n    point associated with `query_keys...` and the point associated with\n    `reference_keys...`.',
    code: "@inline def mlpack_knn[K, M, Q, N, H] = ext_ml_transform[:mlpack_knn, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_lsh_build",
    docstring:
      '    mlpack_lsh_build[R, N, H]\n\nAn implementation of approximate k-nearest-neighbor search with locality-sensitive\nhashing (LSH). Given a set of reference points, this will build an LSH model.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#lsh) and the\ndocumentation for `mlpack_lsh[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `bucket_size` (`Int`): The size of a bucket in the second level hash.  Default `500`.\n  - `hash_width` (`Float64`): The hash width for the first-level hashing in the LSH\n     preprocessing. By default, the LSH class automatically estimates a hash width for\n     its use.\n  - `projections` (`Int`): The number of hash functions for each table.  Default `10`.\n  - `second_hash_size` (`Int`): The size of the second level hash table.  Default `99901`.\n  - `seed` (`Int`): Random seed. If `0`, ‘std::time(NULL)’ is used.  Default `0`.\n  - `tables` (`Int`): The number of hash tables to be used.  Default `30`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - An LSH model that can be used in a later call to `mlpack_lsh[]`.',
    code: "@inline def mlpack_lsh_build[R, N, H] = ext_ml_build[:mlpack_lsh, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_lsh",
    docstring:
      '    mlpack_lsh[K, M, Q, N, H]\n\nPerform approximate k-nearest-neighbor search on a relation `Q` containing query points,\nusing a model `M` that was built with `mlpack_lsh_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#lsh) and the\ndocumentation for `mlpack_lsh_build[]` for more details.\n\nInputs:\n  - `K`: constant representing number of nearest neighbors to search for.\n  - `M`: pre-trained model for kNN; must be the result of a previous `mlpack_knn_build[]`\n         call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `num_probes` (`Int`): Number of additional probes for multiprobe LSH; if 0, traditional\n     LSH is used.  Default 0.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., distance) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th nearest neighbor, and `distance` is the Euclidean distance between the\n    point associated with `query_keys...` and the point associated with\n    `reference_keys...`.',
    code: "@inline def mlpack_lsh[K, M, Q, N, H] = ext_ml_transform[:mlpack_lsh, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_kfn_build",
    docstring:
      '    mlpack_kfn_build[R, N, H]\n\nAn implementation of k-furthest-neighbor search using single-tree and dual-tree\nalgorithms. This can build a tree that can be saved for future use.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#kfn) and the\ndocumentation for `mlpack_kfn[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `leaf_size` (`Int`): Leaf size for tree building (used for kd-trees, vp trees, random\n     projection trees, UB trees, R trees, R* trees, X trees, Hilbert R trees, R+ trees,\n     R++ trees, and octrees).  Default `20`.\n  - `random_basis` (`Bool`): Before tree-building, project the data onto a random\n     orthogonal basis.  Default `false`.\n  - `seed` (`Int`): Random seed (if `0`, `std::time(NULL)` is used).  Default `0`.\n  - `tree_type` (`String`): Type of tree to use: `"kd"`, `"vp"`, `"rp"`, `"max-rp"`,\n     `"ub"`, `"cover"`, `"r"`, `"r-star"`, "x", "ball", "hilbert-r", "r-plus"`,\n     `"r-plus-plus"`, `"oct"`.  Default `"kd"`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A KFN model that can be used with a later call to `mlpack_kfn[]`.',
    code: "@inline def mlpack_kfn_build[R, N, H] = ext_ml_build[:mlpack_kfn, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_kfn",
    docstring:
      '    mlpack_kfn[K, M, Q, N, H]\n\nPerform k-furthest-neighbor search on a relation `Q` containing query points, using a\nmodel `M` that was built with `mlpack_kfn_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#kfn) and the\ndocumentation for `mlpack_kfn_build[]` for more details.\n\nInputs:\n  - `K`: constant representing number of nearest neighbors to search for.\n  - `M`: pre-trained model for kNN; must be the result of a previous `mlpack_knn_build[]`\n         call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `algorithm` (`String`): Type of neighbor search: "naive", "single_tree", "dual_tree",\n     "greedy".  Default `"dual_tree"`.\n  - `epsilon` (`Float64`): If specified, will do approximate nearest neighbor search with\n     given relative error.  Default `0`.\n  - `percentage` (`Float64`): If specified, will do approximate furthest neighbor search.\n     Must be in the range `(0,1]` (decimal form). Resultant neighbors will be at least\n     `(p*100)%` of the distance as the true furthest neighbor.  Default `1`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., distance) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th furthest neighbor, and `distance` is the Euclidean distance between the\n    point associated with `query_keys...` and the point associated with\n    `reference_keys...`.',
    code: "@inline def mlpack_kfn[K, M, Q, N, H] = ext_ml_transform[:mlpack_kfn, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_approx_kfn_build",
    docstring:
      '    mlpack_approx_kfn_build[R, N, H]\n\nAn implementation of two strategies for furthest neighbor search.  This creates a\nfurthest neighbor search model that can be reused later.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#approx_kfn) and\nthe documentation for `mlpack_approx_kfn[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `algorithm` (`String`): Algorithm to use: `"ds"` or `"qdafn"`.  Default `"ds"`.\n  - `num_projections` (`Int`): Number of projections to use in each hash table.  Default\n    `5`.\n  - `num_tables` (`Int`): Number of hash tables to use.  Default `5`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - An approximate KFN model that can be used in a later call to `mlpack_approx_kfn[]`.',
    code: "@inline def mlpack_approx_kfn_build[R, N, H] = ext_ml_build[:mlpack_approx_kfn, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_approx_kfn",
    docstring:
      '    mlpack_approx_kfn[K, M, Q, N, H]\n\nPerform approximate k-furthest-neighbor search on a relation `Q` containing query points,\nusing a model `M` that was build with `mlpack_approx_kfn_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#approx_kfn) for\nmore details.\n\nInputs:\n  - `K`: constant representing number of nearest neighbors to search for.\n  - `M`: pre-trained model for kNN; must be the result of a previous `mlpack_knn_build[]`\n         call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `calculate_error` (`Bool`): If set, calculate and display the average distance error\n     for the first furthest neighbor only.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., distance) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th approximate furthest neighbor, and `distance` is the Euclidean distance\n    between the point associated with `query_keys...` and the point associated with\n    `reference_keys...`.',
    code: "@inline def mlpack_approx_kfn[K, M, Q, N, H] =\n    ext_ml_transform[:mlpack_approx_kfn, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_dbscan",
    docstring:
      '    mlpack_dbscan[F, N, H]\n\nA clustering of the dataset `F` using DBSCAN clustering with parameters `N` and `H`.\n\nSee [the mlpack documentation](https://www.mlpack.org/doc/stable/julia_documentation.html#dbscan)\nfor more details.\n\nInputs:\n  - `F`: relation of data points to cluster.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `epsilon` (`Float64`): Radius of each range search.  Default `1`.\n  - `min_size` (`Int`): Minimum number of points for a cluster.  Default `5`.\n  - `naive` (`Bool`): If set, brute-force range search (not tree-based) will be used.\n     Default `false`.\n  - `selection_type` (`String`): If using point selection policy, the type of selection to\n     use (`"ordered"`, `"random"`).  Default `"ordered"`.\n  - `single_mode` (`Bool`): If set, single-tree range search (not dual-tree) will be used.\n     Default `false`.\n  - `tree_type` (`String`): If using single-tree or dual-tree search, the type of tree to\n     use (`"kd"`, `"r"`, `"r-star"`, `"x"`, `"hilbert-r"`, `"r-plus"`, `"r-plus-plus"`,\n     `"cover"`, `"ball"`).  Default `"kd"`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation containing the keys in `F`, with a cluster assignment (`Int`) as the last\n    argument.  If the point is considered "noise" (i.e. not part of any cluster), the\n    cluster assignment is 0.',
    code: "@inline def mlpack_dbscan[F, N, H] = ext_ml_transform[:mlpack_dbscan, 0, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_kmeans",
    docstring:
      '    mlpack_kmeans[K, F, N, H]\n\nAn implementation of several strategies for efficient k-means clustering. Given a dataset\nand a value of k, this computes a k-means clustering on that data.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#kmeans) for more\ndetails.\n\nInputs:\n  - `K`: constant indicating the number of clusters for k-means clustering.\n  - `F`: relation of data points to cluster.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `algorithm` (`String`): Algorithm to use for the Lloyd iteration (`"naive"`,\n     `"pelleg-moore"`, `"elkan"`, `"hamerly"`, `"dualtree"`, or `"dualtree-covertree"`).\n     Default `"naive"`.\n  - `allow_empty_clusters` (`Bool`): Allow empty clusters to persist.  Default `false`.\n  - `kill_empty_clusters` (`Bool`): Remove empty clusters when they occur.  Default `false`.\n  - `max_iterations` (`Int`): Maximum number of iterations before k-means terminates.\n     Default `1000`.\n  - `percentage` (`Float64`): Percentage of dataset to use for each refined start sampling\n     (use when `refined_start` is specified).  Default `0.02`.\n  - `refined_start` (`Bool`): Use the refined initial point strategy by Bradley and Fayyad\n     to choose initial points.  Default `false`.\n  - `samplings` (`Int`): Number of samplings to perform for refined start (use when\n     `refined_start` is specified).  Default `100`.\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `verbose` (`Bool`): Display information messages.  Default `false`.\n\nResult:\n  - A relation containing the keys in `F` with a cluster assignment (`Int`) between `1` and\n    `K` as the last argument.',
    code: "@inline def mlpack_kmeans[K, F, N, H] = ext_ml_transform[:mlpack_kmeans, K, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_kmeans_centroids",
    docstring:
      '    mlpack_kmeans_centroids[K, F, N, H]\n\nAn implementation of several strategies for efficient k-means clustering. Given a dataset\nand a value of k, this computes centroids for a k-means clustering on that\ndata.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#kmeans) for more\ndetails.\n\nInputs:\n  - `K`: constant indicating the number of clusters for k-means clustering.\n  - `F`: relation of data points to cluster.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `algorithm` (`String`): Algorithm to use for the Lloyd iteration (`"naive"`,\n     `"pelleg-moore"`, `"elkan"`, `"hamerly"`, `"dualtree"`, or `"dualtree-covertree"`).\n     Default `"naive"`.\n  - `allow_empty_clusters` (`Bool`): Allow empty clusters to persist.  Default `false`.\n  - `kill_empty_clusters` (`Bool`): Remove empty clusters when they occur.  Default\n     `false`.\n  - `max_iterations` (`Int`): Maximum number of iterations before k-means terminates.\n     Default `1000`.\n  - `percentage` (`Float64`): Percentage of dataset to use for each refined start sampling\n     (use when `refined_start` is specified).  Default `0.02`.\n  - `refined_start` (`Bool`): Use the refined initial point strategy by Bradley and Fayyad\n     to choose initial points.  Default `false`.\n  - `samplings` (`Int`): Number of samplings to perform for refined start (use when\n     `refined_start` is specified).  Default `100`.\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `verbose` (`Bool`): Display information messages.  Default `false`.\n\nResult:\n  - A relation containing a cluster index between `1` and `K` that maps to the centroid\n    of each dimension in `F`.  So, the first argument of this relation is the cluster\n    index, and the rest correspond to the arguments of `F` that are after the first `N`\n    key arguments.',
    code: "@inline def mlpack_kmeans_centroids[K, F, N, H] =\n    ext_ml_transform[:mlpack_kmeans_centroids, K, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_mean_shift",
    docstring:
      '    mlpack_mean_shift[F, N, H]\n\nA clustering of the data using the mean shift algorithm.\nUses a fast implementation of mean-shift clustering using dual-tree range search.\n\nSee [the mlpack documentation](https://www.mlpack.org/doc/stable/julia_documentation.html#mean_shift)\nfor more details.\n\nInputs:\n  - `F`: relation of data points to cluster.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `force_convergence` (`Bool`): If specified, the mean shift algorithm will continue\n     running regardless of `max_iterations` until the clusters converge.  Default\n     `false`.\n  - `max_iterations` (`Int`): Maximum number of iterations before mean shift terminates.\n     Default `1000`.\n  - `radius` (`Float64`): If the distance between two centroids is less than the given\n     radius, one will be removed. A radius of `0` or less means an estimate will be\n     calculated and used for the radius.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation containing the keys in `F` with a cluster assignment (`Int`) as the last\n    element.  If the key was not assigned to a cluster, the cluster assignment will be\n    `0`.',
    code: "@inline def mlpack_mean_shift[F, N, H] =\n    ext_ml_transform[:mlpack_mean_shift, 0, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_gmm_train",
    docstring:
      '    mlpack_gmm_train[F, N, H]\n\nAn implementation of the EM algorithm for training Gaussian mixture models (GMMs). Given\na dataset, this can train a GMM for future use with other tools.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#gmm_train) for\nmore details.\n\nInputs:\n  - `R`: relation of reference points that model should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `diagonal_covariance` (`Bool`): Force the covariance of the Gaussians to be diagonal.\n     This can accelerate training time significantly.  Default `false`.\n  - `gaussians` (`Int`): Number of Gaussians in the GMM.  *Required*.\n  - `kmeans_max_iterations` (`Int`): Maximum number of iterations for the k-means algorithm\n     (used to initialize EM).  Default `1000`.\n  - `max_iterations` (`Int`): Maximum number of iterations of EM algorithm (passing 0 will\n     run until convergence).  Default `250`.\n  - `no_force_positive` (`Bool`): Do not force the covariance matrices to be positive\n     definite.  Default `false`.\n  - `noise` (`Float64`): Variance of zero-mean Gaussian noise to add to data.  Default `0`.\n  - `percentage` (`Float64`): If using `refined_start`, specify the percentage of the\n     dataset used for each sampling (should be between 0.0 and 1.0).  Default `0.02`.\n  - `refined_start` (`Bool`): During the initialization, use refined initial positions for\n     k-means clustering (Bradley and Fayyad, 1998).  Default `false`.\n  - `samplings` (`Int`): If using `refined_start`, specify the number of samplings used for\n     initial points.  Default `100`.\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `tolerance` (`Float64`): Tolerance for convergence of EM.  Default `1e-10`.\n  - `trials` (`Int`): Number of trials to perform in training GMM.  Default `1`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.',
    code: "@inline def mlpack_gmm_train[F, N, H] = ext_ml_build[:mlpack_gmm_train, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_gmm_generate",
    docstring:
      '    mlpack_gmm_generate[S, M, D, H]\n\nA sample generator for pre-trained GMMs. Given a pre-trained GMM, this can sample new\npoints randomly from that distribution.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#gmm_generate) for\nmore details.\n\nInputs:\n  - `S`: constant indicating the number of samples to generate.\n  - `M`: pre-trained GMM from `mlpack_gmm_train[]`.\n  - `D`: constant representing the dimensionality of the model (i.e. the dimensionality\n     of `F` in the call to `mlpack_gmm_train[]`).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation containing `S` samples from the given GMM `M`.  The first argument is the\n    key (an integer between `1` and `S`) and the rest of the arguments are each of the\n    features.',
    code: "@inline def mlpack_gmm_generate[S, M, D, H] =\n    ext_ml_transform[:mlpack_gmm_generate, S, M, {()}, D, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_gmm_probability",
    docstring:
      '    mlpack_gmm_probability[M, F, N, H]\n\nA probability calculator for GMMs. Given a pre-trained GMM and a set of points, this can\ncompute the probability that each point is from the given GMM.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#gmm_probability)\nfor more details.\n\nInputs:\n  - `M`: pre-trained GMM from `mlpack_gmm_train[]`.\n  - `F`: relation of data points to compute the probabilities of.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation containing the keys of `F` (that is, the first `N` arguments) mapping to the\n    probability that each of those samples arose from the GMM `M`.',
    code: "@inline def mlpack_gmm_probability[M, F, N, H] =\n    ext_ml_transform[:mlpack_gmm_probability, 0, M, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_emst",
    docstring:
      '    mlpack_emst[F, N, H]\n\nAn implementation of the Dual-Tree Boruvka algorithm for computing the Euclidean minimum\nspanning tree of a set of input points.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#emst) for more\ndetails.\n\nInputs:\n  - `F`: relation of data points to compute the minimum spanning tree of.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when clustering the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `leaf_size` (`Int`): Leaf size in the kd-tree. One-element leaves give the empirically\n     best performance, but at the cost of greater memory requirements.  Default `1`.\n  - `naive` (`Bool`): Compute the MST using O(n^2) naive algorithm.  Default `false`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - An ordered edge relation with weights.  Specifically, each point in `F` is associated\n    with a set of `N` keys.  The first argument of the output relation is the index of the\n    edge (starting from 1); lower-weighted edges have lower indices.  The following `N`\n    arguments of the output relation correspond to the first vertex; the following `N`\n    arguments of the output relation correspond to the second vertex; and the last argument\n    represents the distance between those two vertices.',
    code: "@inline def mlpack_emst[F, N, H] = ext_ml_transform[:mlpack_emst, 0, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_fastmks_build",
    docstring:
      '    mlpack_fastmks_build[R, N, H]\n\nAn implementation of max-kernel search using single-tree and dual-tree algorithms.  Given\na set of reference points and query points, this can build trees that can be used in\nlater calls to `mlpack_fastmks[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#fastmks) and the\ndocumentation for `mlpack_fastmks[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `bandwidth` (`Float64`): Bandwidth (for Gaussian, Epanechnikov, and triangular\n     kernels).  Default `1`.\n  - `base` (`Float64`): Base to use during cover tree construction.  Default `2`.\n  - `degree` (`Float64`): Degree of polynomial kernel.  Default `2`.\n  - `kernel` (`String`): Kernel type to use: `"linear"`, `"polynomial"`, `"cosine"`,\n     `"gaussian"`, `"epanechnikov"`, `"triangular"`, `"hyptan"`.  Default `"linear"`.\n  - `naive` (`Bool`): If true, O(n^2) naive mode is used for computation.  Default `false`.\n  - `offset` (`Float64`): Offset of kernel (for polynomial and hyptan kernels).  Default\n     `0`.\n  - `scale` (`Float64`): Scale of kernel (for hyptan kernel).  Default `1`.\n  - `single` (`Bool`): If true, single-tree search is used (as opposed to dual-tree search.\n     Default `false`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A FastMKS model that can be used in a later call to `mlpack_fastmks[]`.',
    code: "@inline def mlpack_fastmks_build[R, N, H] = ext_ml_build[:mlpack_fastmks, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_fastmks",
    docstring:
      '    mlpack_fastmks[K, M, Q, N, H]\n\nPerform max-kernel search search on a relation `Q` containing query points, using a\nmodel `M` that was built with `mlpack_fastmks_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#fastmks) and the\ndocumentation for `mlpack_fastmks_build[]` for more details.\n\nInputs:\n  - `K`: constant representing number of max kernels to search for.\n  - `M`: pre-trained model for kNN; must be the result of a previous\n     `mlpack_fastmks_build[]` call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., kernel) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th max-kernel, and `kernel` is the kernel value between the point associated\n    with `query_keys...` and the point associated with `reference_keys...`.',
    code: "@inline def mlpack_fastmks[K, M, Q, N, H] = ext_ml_transform[:mlpack_fastmks, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_krann_build",
    docstring:
      '    mlpack_krann_build[R, N, H]\n\nAn implementation of rank-approximate k-nearest-neighbor search (kRANN) using single-tree\nand dual-tree algorithms.  Given a set of reference points and query points, this can\nbuild trees that can be used in later calls to `mlpack_krann[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#krann) and the\ndocumentation for `mlpack_krann[]` for more details.\n\nInputs:\n  - `R`: relation of reference points that tree should be built on\n  - `N`: constant indicating the number of arguments in `R` that correspond to keys (i.e.\n         dimensions that should not be considered when building the model).\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `first_leaf_exact` (`Bool`): The flag to trigger sampling only after exactly exploring\n     the first leaf.  Default `false`.\n  - `leaf_size` (`Int`): Leaf size for tree building (used for kd-trees, UB trees, R trees,\n     R* trees, X trees, Hilbert R trees, R+ trees, R++ trees, and octrees).  Default\n     `20`.\n  - `naive` (`Bool`): If true, sampling will be done without using a tree.  Default\n     `false`.\n  - `random_basis` (`Bool`): Before tree-building, project the data onto a random\n     orthogonal basis.  Default `false`.\n  - `sample_at_leaves` (`Bool`): The flag to trigger sampling at leaves.  Default `false`.\n  - `seed` (`Int`): Random seed (if 0, std::time(NULL) is used).  Default `0`.\n  - `single_mode` (`Bool`): If true, single-tree search is used (as opposed to dual-tree\n     search).  Default `false`.\n  - `single_sample_limit` (`Int`): The limit on the maximum number of samples (and hence\n     the largest node you can approximate).  Default `20`.\n  - `tree_type` (`String`): Type of tree to use: `"kd"`, `"ub"`, `"cover"`, `"r"`, `"x"`,\n     `"r-star"`, `"hilbert-r"`, `"r-plus"`, `"r-plus-plus"`, `"oct"`.  Default `"kd"`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A rank-approximate KNN model that can be used in a later call to `mlpack_krann[]`.',
    code: "@inline def mlpack_krann_build[R, N, H] = ext_ml_build[:mlpack_krann, R, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_krann",
    docstring:
      '    mlpack_krann[K, M, Q, N, H]\n\nPerform k-rank-approximate-nearest-neighbor search on a relation `Q` containing query\npoints, using a model `M` that was built with `mlpack_krann_build[]`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#krann) and the\ndocumentation for `mlpack_krann_build[]` for more details.\n\nInputs:\n  - `K`: constant representing number of nearest neighbors to search for.\n  - `M`: pre-trained model for kRANN; must be the result of a previous\n     `mlpack_krann_build[]` call.\n  - `Q`: relation of query points; must have the same number of keys as the relation that\n         `M` was built with.\n  - `N`: constant indicating the number of arguments in `Q` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `alpha` (`Float64`): The desired success probability.  Default `0.95`.\n  - `tau` (`Float64`): The allowed rank-error in terms of the percentile of the data.\n     Default `5`.\n  - `verbose` (`Bool`): Display informational messages.\n\nResult:\n  - A relation mapping keys from `Q` to keys in the reference set that the model `M` was\n    built on.  The form is (query_keys..., k, reference_keys..., distance) where `k`\n    takes values between `1` and `K` for each possible set of `query_keys...`.  Given\n    `query_keys...` and `k`, then `reference_keys...` is the set of keys associated with\n    the `k`\'th rank-approximate nearest neighbor, and `distance` is the Euclidean\n    distance between the point associated with `query_keys...` and the point associated\n    with `reference_keys...`.',
    code: "@inline def mlpack_krann[K, M, Q, N, H] = ext_ml_transform[:mlpack_krann, K, M, Q, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_det_build",
    docstring:
      '    mlpack_det_build[F, N, H]\n\nAn implementation of density estimation trees for the density estimation task. Density\nestimation trees can be trained with this native.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#det) and the\ndocumentation for `mlpack_det[]` for more details.\n\nInputs:\n  - `F`: relation of features to build density estimation tree on.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `folds` (`Int`): The number of folds of cross-validation to perform for the estimation\n     (0 is LOOCV).  Default `10`.\n  - `max_leaf_size` (`Int`): The maximum size of a leaf in the unpruned, fully grown DET.\n     Default `10`.\n  - `min_leaf_size` (`Int`): The minimum size of a leaf in the unpruned, fully grown DET.\n     Default `5`.\n  - `skip_pruning` (`Bool`): Whether to bypass the pruning process and output the unpruned\n     tree only.  Default `false`.\n  - `verbose` (`Bool`): Display informational messages. Default `false`.',
    code: "@inline def mlpack_det_build[F, N, H] = ext_ml_build[:mlpack_det, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_det",
    docstring:
      '    mlpack_det[M, F, N, H]\n\nGiven a DET trained with `mlpack_det_build[]`, compute densities of the query points in\nthe relation `F`.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#det) and the\ndocumentation for `mlpack_det[]` for more details.\n\nInputs:\n  - `M`: pre-trained DET model; must be the result of a previous `mlpack_det_build[]`\n     call.\n  - `F`: relation of features to compute density estimates for.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation mapping keys from `F` (i.e. the first `N` elements of the tuples in `F`) to\n    their density estimates.',
    code: "@inline def mlpack_det[M, F, N, H] = ext_ml_transform[:mlpack_det, 0, M, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_nmf",
    docstring:
      '    mlpack_nmf[R, F, N, H]\n\nAn implementation of non-negative matrix factorization. This can be used to decompose an\ninput dataset into two low-rank non-negative components.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#nmf) for more\ndetails.\n\nInputs:\n  - `R`: constant indicating the rank of the low-rank decomposition.\n  - `F`: relation of features to decompose into two low-rank matrices.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `max_iterations` (`Int`): Number of iterations before NMF terminates (0 runs until\n     convergence).  Default `10000`.\n  - `min_residue` (`Float64`): The minimum root mean square residue allowed for each\n     iteration, below which the program terminates.  Default `1e-05`.\n  - `seed` (`Int`): Random seed. If `0`, `std::time(NULL)` is used.  Default `0`.\n  - `update_rules` (`String`): Update rules for each iteration; ( `"multdist"` |\n     `"multdiv"` | `"als"` ).  Default `"multdist"`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation encoding *both* the low-rank H and W matrices.  However, it is slightly\n    confusing because rows in `W` are keyed by the first `N` arguments of `F`, but rows in\n    `H` are keyed by integers.  Thus, the first argument of the output is either `1` if the\n    tuple corresponds to a row of `W` or `2` if the tuple corresponds to a row of `H`.\n    Then, if the first argument is `1`, then the next `N` arguments are keys from `F`;\n    otherwise they are zero values that should be ignored.  After that, if the first\n    argument is `2`, the next argument is the (`Int`) row index for tuples pertaining to `H`;\n    otherwise they are zero values that should be ignored.  The following argument is the\n    (`Int`) index of the argument that the tuple pertains to in `W` or `H`.  The last argument\n    is the (`Float64`) value in either `W` or `H` referenced by the previous arguments.\n\nIn some sense, the format of the result can be understood as an "interleaved sparse\nrepresentation" of W and H.  We are forced to do this in part because Rel cannot\ncurrently return two relations easily from one call.',
    code: "@inline def mlpack_nmf[R, F, N, H] = ext_ml_transform[:mlpack_nmf, R, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_kernel_pca",
    docstring:
      '    mlpack_kernel_pca[D, F, N, H]\n\nAn implementation of Kernel Principal Components Analysis (KPCA). This can be used to\nperform nonlinear dimensionality reduction or preprocessing on a given dataset.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#kernel_pca) for\nmore details.\n\nInput options:\n  - `D`: constant indicating the desired new dimensionality of the data.\n  - `F`: relation of features to perform kernel PCA on.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `bandwidth` (`Float64`): Bandwidth, for `"gaussian"` and `"laplacian"` kernels.\n     Default `1`.\n  - `center` (`Bool`): If set, the transformed data will be centered about the origin.\n     Default `false`.\n  - `degree` (`Float64`): Degree of polynomial, for ‘polynomial’ kernel.  Default `1`.\n  - `kernel` (`String`): The kernel to use; see the linked documentation for the list of\n     usable kernels.  Default `"gaussian"`.\n  - `kernel_scale` (`Float64`): Scale, for `"hyptan"` kernel.  Default `1`.\n  - `nystroem_method` (`Bool`): If set, the Nystroem method will be used.  Default `false`.\n  - `offset` (`Float64`): Offset, for `"hyptan"` and `"polynomial"` kernels.  Default `0`.\n  - `sampling` (`String`): Sampling scheme to use for the Nystroem method: `"kmeans"`,\n     `"random"`, `"ordered"`.  Default `"kmeans"`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation mapping keys in `F` (i.e. the first `N` arguments of `F`) to `D` values in\n    each dimension.',
    code: "@inline def mlpack_kernel_pca[D, F, N, H] =\n    ext_ml_transform[:mlpack_kernel_pca, D, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_pca",
    docstring:
      '    mlpack_pca[D, F, N, H]\n\nAn implementation of several strategies for principal components analysis (PCA), a common\npreprocessing step. Given a dataset and a desired new dimensionality, this can reduce the\ndimensionality of the data using the linear transformation determined by PCA.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#pca) for more\ndetails.\n\nInput options:\n  - `D`: constant indicating the desired new dimensionality of the data.\n  - `F`: relation of features to perform PCA on.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `decomposition_method` (`String`): Method used for the principal components analysis:\n     `"exact"`, `"randomized"`, `"randomized-block-krylov"`, `"quic"`.  Default\n     `"exact"`.\n  - `scale` (`Bool`): If set, the data will be scaled before running PCA, such that the\n     variance of each feature is `1`.  Default `false`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation mapping keys in `F` (i.e. the first `N` arguments of `F`) to `D` values in\n    each dimension.',
    code: "@inline def mlpack_pca[D, F, N, H] = ext_ml_transform[:mlpack_pca, D, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_preprocess_split",
    docstring:
      '    mlpack_preprocess_split[F, H]\n\nThis utility takes a dataset and splits it into a training set and a test set. Before the\nsplit, the points in the dataset are randomly reordered. The percentage of the dataset to be\nused as the test set can be specified with the test_ratio parameter; the default is 0.2\n(20%).\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#preprocess_split)\nfor more details.\n\nInput options:\n  - `F`: relation of features to split.  If you want to split labels too, they should be\n         included in this relation.\n  - `H`: relation of hyperparameters encoded as `(String, String)`; e.g.,\n         `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `no_shuffle` (`Bool`): Avoid shuffling the data before splitting.  Default `false`.\n  - `seed` (`Int`): Random seed (`0` for `std::time(NULL)`).  Default `0`.\n  - `test_ratio` (`Float64`): Ratio of test set; if not set, the ratio defaults to `0.2`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation `F` with membership in the training or test set prepended.  So, if `(t...)`\n    was a tuple in `F`, `(set, t...)` will be included where `set` is `1` if the point\n    `t...` is a part of the training set, and `set` is `2` if the point is a part of the\n    test set.',
    code: "@inline def mlpack_preprocess_split[F, H] =\n    ext_ml_transform[:mlpack_preprocess_split, 0, {()}, F, 0, H]",
    children: [],
  },
  {
    type: "definition",
    name: "mlpack_radical",
    docstring:
      '    mlpack_radical[F, N, H]\n\nAn implementation of RADICAL, a method for independent component analysis (ICA). Given a\ndataset, this can decompose the dataset into an independent component matrix; this can be\nuseful for preprocessing.\n\nSee also [the mlpack\ndocumentation](https://www.mlpack.org/doc/stable/julia_documentation.html#radical) for more\ndetails.\n\nInput options:\n  - `F`: relation of features to perform RADICAL on.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when transforming the data).\n  - `H`: relation of hyperparameters encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `angles` (`Int`): Number of angles to consider in brute-force search during Radical2D.\n     Default `150`.\n  - `noise_std_dev` (`Float64`): Standard deviation of Gaussian noise.  Default `0.175`.\n  - `objective` (`Bool`): If set, an estimate of the final objective function is printed.\n     Default `false`.\n  - `replicates` (`Int`): Number of Gaussian-perturbed replicates to use (per point) in\n     Radical2D.  Default `30`.\n  - `sweeps` (`Int`): Number of sweeps; each sweep calls Radical2D once for each pair of\n     dimensions.  Default `0`.\n  - `verbose` (`Bool`): Display informational messages.  Default `false`.\n\nResult:\n  - A relation mapping keys in `F` (i.e. the first `N` arguments of `F`) to independent\n    component values in each dimension.',
    code: "@inline def mlpack_radical[F, N, H] = ext_ml_transform[:mlpack_radical, 0, {()}, F, N, H]",
    children: [],
  },
  {
    type: "definition",
    name: "glm_linear_regression",
    docstring:
      "    glm_linear_regression[F, R]\n\nA binding of the GLM.jl function `lm`. Fits a linear regression model given\nfeatures `F` and responses `R`.\n\nNote that this is unregularized linear regression, so if your model does not converge (e.g.\ntraining gives a `PosDefException`), try using regularized linear regression, perhaps via\n`mlpack_linear_regression[]` with the `lambda` hyperparameter set, or ensure that the\ncolumns of your data are not linearly dependent.\n\nInput options:\n  - `F`: Relation of features to perform linear regression on.\n  - `R`: Relation of responses to train the linear regression model on.\n\nResult:\n  - A GLM model that can later be used with `glm_predict`.\n\nExample:\n```rel\ndef features = {(1, 1.0); (2, 2.0); (3, 3.0); (4, 4.0); (5, 5.0)}\ndef responses = {(1, 0); (2, 0); (3, 0); (4, 1); (5, 1)}\ndef model = glm_linear_regression[features, responses]\n```",
    code: '@inline def glm_linear_regression[F, R] = ext_ml_train[:glm_generic, F, R,\n    { a, b : (a = "family" and b = "Normal") or (a = "link" and b = "IdentityLink")}\n]',
    children: [],
  },
  {
    type: "definition",
    name: "glm_logistic_regression",
    docstring:
      "    glm_logistic_regression[F, R]\n\nA binding of the GLM.jl function `glm` with the binomial family and Logit link.\nFits a logistic regression model given features `F` and responses `R`.\n\nInput options:\n  - `F`: Relation of features to perform logistic regression on.\n  - `R`: Relation of responses to train the logistic regression model on.\n\nResult:\n  - A GLM model that can later be used with `glm_predict`.\n\nExample:\n```rel\ndef features = {(1, 1.0); (2, 2.0); (3, 3.0); (4, 4.0); (5, 5.0)}\ndef responses = {(1, 0); (2, 0); (3, 0); (4, 1); (5, 1)}\ndef model = glm_logistic_regression[features, responses]\n```",
    code: '@inline def glm_logistic_regression[F, R] = ext_ml_train[:glm_generic, F, R,\n    { a, b : (a = "family" and b = "Binomial") or (a = "link" and b = "LogitLink")}\n]',
    children: [],
  },
  {
    type: "definition",
    name: "glm_probit_regression",
    docstring:
      "    glm_probit_regression[F, R]\n\nA binding of the GLM.jl function `glm` with the binomial family and Probit link.\nFits a probit regression model given features `F` and responses `R`.\n\nInput options:\n  - `F`: Relation of features to perform probit regression on.\n  - `R`: Relation of responses to train the probit regression model on.\n\nResult:\n  - A GLM model that can later be used with `glm_predict`.\n\nExample:\n```rel\ndef features = {(1, 1.0); (2, 2.0); (3, 3.0); (4, 4.0); (5, 5.0)}\ndef responses = {(1, 0); (2, 0); (3, 0); (4, 1); (5, 1)}\ndef model = glm_probit_regression[features, responses]\n```",
    code: '@inline def glm_probit_regression[F, R] = ext_ml_train[:glm_generic, F, R,\n    { a, b : (a = "family" and b = "Binomial") or (a = "link" and b = "ProbitLink")}\n]',
    children: [],
  },
  {
    type: "definition",
    name: "glm_generic",
    docstring:
      '    glm_generic[F, R, H]\n\nA binding of the GLM.jl function `glm`.\nFits a generalized linear model given features `F` and responses `R` and family and\nlink passed in hyperparameters `H`. The supported families and links are listed below.\n\nInput options:\n  - `F`: Relation of features to perform a GLM regression on.\n  - `R`: Relation of responses to train the GLM regression model on.\n  - `H`: Relation of hyperparameters to specify the family and link to use to generate\n         the generalized linear model. Example:\n         `H = {("family","Normal"); ("link","IdentityLink")}`.\n         Families supported: `["Binomial", "Bernoulli", "Binomial",\n         "Gamma", "InverseGaussian", "NegativeBinomial", "Normal",\n         "Poisson"]`.\n         Links supported: `["CauchitLink", "CloglogLink", "IdentityLink",\n         "InverseLink", "InverseSquareLink", "LogitLink", "LogLink",\n         "ProbitLink", "SqrtLink"]`.\n\nResult:\n  - A GLM model that can later be used with `glm_predict[]`.\n\nExample:\n```rel\ndef features = {(1, 1.0); (2, 2.0); (3, 3.0); (4, 4.0); (5, 5.0)}\ndef responses = {(1, 0); (2, 0); (3, 0); (4, 1); (5, 1)}\ndef hyperparams = {("family", "NegativeBinomial"); ("link", "LogLink")}\ndef model = glm_generic[features, responses, hyperparams]\n```',
    code: "@inline def glm_generic[F, R, H] = ext_ml_train[:glm_generic, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "glm_predict",
    docstring:
      "    glm_predict[M, F, N]\n\nA binding of the GLM.jl function `predict`. Uses a generalized linear model `M`\nto generate predictions for features `F`. Here, `M` can be produced from any of the\ndefinitions `glm_linear_regression`, `glm_logistic_regression`, `glm_probit_regression`,\nor `glm_generic`.\n\nInput options:\n  - `M`: Relation containing the model generated by running one of the generalized linear\n         models previously (e.g. `glm_linear_regression` or `glm_generic`).\n  - `F`: Relation of features to generate the predictions given the previously computed\n         model.\n  - `N`: constant indicating the number of arguments in `F` that correspond to keys (i.e.\n         dimensions that should not be considered when computing predictions).\n\nResult:\n  - Predictions of the features `F` after being fit with the model `M`.\n\nExample:\n```rel\ndef features = {(1, 1.0); (2, 2.0); (3, 3.0); (4, 4.0); (5, 5.0)}\ndef responses = {(1, 0); (2, 0); (3, 0); (4, 1); (5, 1)}\ndef model = glm_probit_regression[features, responses]\ndef predictions = glm_predict[model, features, 1]\n```",
    code: "@inline def glm_predict[M, F, N] = ext_ml_predict[:glm_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_classifier",
    docstring:
      '    xgboost_classifier[F, L, H]\n\nA binding of the xgboost() function to train an XGBoost model (via XGBoost.jl).  This fits a\nboosted tree model with the XGBoost algorithm to the features `F` and labels `L`, using\nhyperparameters specified in the relation `H`.\n\nIf you would like to train a regression model with XGBoost, see `xgboost_regressor[]`.\n\nSee also [the XGBoost\ndocumentation](https://xgboost.readthedocs.io/en/latest/parameter.html) for each\nhyperparameter.\n\nNote that there are *very many hyperparameters*... all are optional.  Here, we only provide\ndocumentation for common parameters.  More documentation on each of these parameters is\navailable in the link above, as well as documentation for many other less common\nhyperparameters not listed here.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `L`: relation of labels; the last variable should be the label; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters (incomplete list):\n  - `num_round` (`Int`): Number of rounds of boosting to perform.  (Default `50`.)\n  - `booster` (`String`): Which booster to use. Can be `"gbtree"`, `"gblinear"` or `"dart"`;\n        `"gbtree"` and `"dart"` use tree based models while `"gblinear"` uses linear\n        functions.  (Default `"gbtree".)\n  - `verbosity` (`Int`): Verbosity of printing messages. Valid values are `0` (silent), `1`\n        (warning), `2` (info), `3` (debug). (Default `1`.)\n  - `objective` (`String`): Specify the learning task and the corresponding learning\n        objective.  Valid options include `"binary:logistic"`, `"binary:hinge"`,\n        `"multi:softmax"`, and other classification objectives listed in the XGBoost\n        documentation.  (Default `"multi:softmax"`.)\n  - `base_score` (`Float64`): The initial prediction score of all instances.  (Default\n        `0.5`.)\n  - `eval_metric` (`String`): Evaluation metrics for validation data.  Valid choices include\n        `"merror"`, `"error"`, `"logloss"`, `"auc"`, `"aucpr"`, `"ndcg"`, `"map"`, and other\n        classification evaluation metrics specified in the XGBoost documentation.  (Default\n        set based on `objective` value.)\n  - `seed` (`Int`): Random number seed.  (Default `0`.)\n  - `eta` (`Float64`): Step size shrinkage used in update to prevent overfitting. (Default\n        `0.3`.)\n  - `gamma` (`Float64`): Minimum loss reduction required to make a further partition on a\n        leaf node of the tree. (Default `0.0`.)\n  - `max_depth` (`Int`): Maximum depth of a tree. (Default `6`.)\n  - `min_child_weight` (`Float64`): Minimum sum of instance weight (hessian) needed in a\n        child. (Default `1.0`.)\n  - `max_delta_step` (`Float64`): Maximum delta step we allow each leaf output to be. If the\n        value is set to `0`, it means there is no constraint. (Default `0.0`.)',
    code: "@inline def xgboost_classifier[F, L, H] = ext_ml_train[:xgboost_classifier, F, L, H]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_classifier_predict",
    docstring:
      "    xgboost_classifier_predict[M, F, N]\n\nGiven an XGBoost classification model trained with `xgboost_classifier[]`, make class\npredictions on a test set.\n\nFor more information, see the documentation for `xgboost_classifier[]` and [the XGBoost\ndocumentation](https://xgboost.readthedocs.io/en/latest/).\n\nInputs:\n  - `M`: XGBoost classification model to use for prediction; must be the result of a\n        previous `xgboost_classifier[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def xgboost_classifier_predict[M, F, N] =\n    ext_ml_predict[:xgboost_classifier_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_classifier_probabilities",
    docstring:
      "    xgboost_classifier_probabilities[M, F, N]\n\nGiven an XGBoost classification model trained with `xgboost_classifier[]`, compute the\nprobabilities of each class for each point in `F`.\n\nNote that `M` must be an XGBoost classification model trained with the `binary:logistic` or\n`multi:softprob` objectives.\n\nFor more information, see the documentation for `xgboost_classifier[]` and [the XGBoost\ndocumentation](https://xgboost.readthedocs.io/en/latest/).\n\nInputs:\n  - `M`: XGBoost classification model to use for prediction; must be the result of a\n        previous `xgboost_classifier[]` call\n  - `F`: relation of test features for which class predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`\n\nResult:\n  - A relation `probabilities(keys..., class, prob)` where `keys...` are the keys of each\n    point in `F`, `class` takes values for every class in `M`, and `prob` is the probability\n    of that class for those keys.",
    code: "@inline def xgboost_classifier_probabilities[M, F, N] =\n    ext_ml_transform[:xgboost_classifier_probabilities, 0, M, F, N, {}]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_regressor",
    docstring:
      '    xgboost_regressor[F, R, H]\n\nA binding of the xgboost() function to train an XGBoost regression model (via XGBoost.jl).\nThis fits a boosted tree model with the XGBoost algorithm to the features `F` and responses\n`R`, using hyperparameters specified in the relation `H`.\n\nIf you would like to train a classification model with XGBoost, see `xgboost_classifier[]`.\n\nSee also [the XGBoost\ndocumentation](https://xgboost.readthedocs.io/en/latest/parameter.html) for each\nhyperparameter.\n\nNote that there are *very many hyperparameters*... all are optional.  Here, we only provide\ndocumentation for common parameters.  More documentation on each of these parameters is\navailable in the link above, as well as documentation for many other less common\nhyperparameters not listed here.\n\nInputs:\n  - `F`: relation of features to learn on\n  - `L`: relation of responses; the last variable should be the response; everything else\n         should be keys\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters (incomplete list):\n  - `num_round` (`Int`): Number of rounds of boosting to perform.  (Default `50`.)\n  - `booster` (`String`): Which booster to use. Can be `"gbtree"`, `"gblinear"` or `"dart"`;\n        `"gbtree"` and `"dart"` use tree based models while `"gblinear"` uses linear\n        functions.  (Default `"gbtree"`.)\n  - `verbosity` (`Int`): Verbosity of printing messages. Valid values are `0` (silent), `1`\n        (warning), `2` (info), `3` (debug). (Default `1`.)\n  - `objective` (`String`): Specify the learning task and the corresponding learning\n        objective.  Valid options include `"reg:squarederror"`, `"reg:squaredlogerror"`,\n        `"reg:logistic"`, `"reg:psuedohubererror"`, `"reg:gamma"`, `"reg:tweedie"`, and\n        other regression objectives listed in the XGBoost documentation.  (Default\n        `"reg:squarederror"`.)\n  - `base_score` (`Float64`): The initial prediction score of all instances.  (Default\n        `0.5`.)\n  - `eval_metric` (`String`): Evaluation metrics for validation data.  Valid choices include\n        `"rmse"`, `"rmsle"`, `"mae"`, `"mape"`, `"mphe"`, and other regression evaluation\n        metrics specified in the XGBoost documentation.  (Default set based on `objective`\n        value.)\n  - `seed` (`Int`): Random number seed.  (Default `0`.)\n  - `eta` (`Float64`): Step size shrinkage used in update to prevent overfitting. (Default\n        `0.3`.)\n  - `gamma` (`Float64`): Minimum loss reduction required to make a further partition on a\n        leaf node of the tree. (Default `0.0`.)\n  - `max_depth` (`Int`): Maximum depth of a tree. (Default `6`.)\n  - `min_child_weight` (`Float64`): Minimum sum of instance weight (hessian) needed in a\n        child. (Default `1.0`.)\n  - `max_delta_step` (`Float64`): Maximum delta step we allow each leaf output to be. If the\n        value is set to `0`, it means there is no constraint. (Default `0.0`.)',
    code: "@inline def xgboost_regressor[F, R, H] = ext_ml_train[:xgboost_regressor, F, R, H]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_regressor_predict",
    docstring:
      "    xgboost_regressor_predict[M, F, N]\n\nGiven an XGBoost regression model trained with `xgboost_regressor[]`, make regression\npredictions on a test set.\n\nFor more information, see the documentation for `xgboost_regressor[]` and [the XGBoost\ndocumentation](https://xgboost.readthedocs.io/en/latest/).\n\nInputs:\n  - `M`: XGBoost regression model to use for prediction; must be the result of a previous\n        `xgboost_regressor[]` call\n  - `F`: relation of test features for which regression predictions will be computed\n  - `N`: constant Int representing the number of keys in `F`",
    code: "@inline def xgboost_regressor_predict[M, F, N] =\n    ext_ml_predict[:xgboost_regressor_predict, M, F, N]",
    children: [],
  },
  {
    type: "definition",
    name: "xgboost_feature_importances",
    docstring:
      '    xgboost_feature_importances[M, F]\n\nGiven an XGBoost model trained with `xgboost_classifier[]` or `xgboost_regressor[]` and the\nfeature module `F` that it was trained with (or an equivalent feature module with the same\nfeature names), return an arity-2 relation mapping feature names (as `String`s) to feature\nimportance values.\n\nNote that this relation may be empty if feature importance cannot be computed!  (This could\nhappen, for instance, if the model\'s trees don\'t have any splits at all.)\n\nFor more information, see the documentation for `xgboost_classifier[]`,\n`xgboost_regressor[]`, and the `importances()` function from\n[XGBoost.jl](https://github.com/dmlc/XGBoost.jl/blob/f9793f342f46a5b2e1f405d8a53494662ea9b514/src/xgboost_lib.jl#L359).\n\nInputs:\n  - `M`: XGBoost classification or regression model; must be the result of a previous\n        `xgboost_classifier[]` or `xgboost_regressor[]` call.\n  - `F`: relation containing all of the same features that the model was trained on\n  - `H`: relation of hyperparameters, encoded as `(String, String)`;\n         e.g., `{("param1", "10"); ("param2", "true")}`\n\nHyperparameters:\n  - `type`: type of feature importance to return; valid options are "gain", "cover", and\n        "freq".  Default "gain".',
    code: "@inline def xgboost_feature_importances[M, F, H](f_str, imp) = exists(i :\n    // We need to get a sorted list of specializations in F, but to do this we must\n    // convert them to strings (we cannot sort symbols at the moment).\n    sort[f : exists(f_sym, xs... : F(f_sym, xs...) and f = string[f_sym])](i, f_str) and\n    // :xgboost_feature_importances produces mappings (i => importance) for integer i,\n    // and these will match the sorted index of the feature names.  It's possible we might\n    // not get a feature back!  That means we need to insert a default value.\n    (\n        ext_ml_transform[:xgboost_feature_importances, 0, M, {()}, 0, H](i, imp) or\n        (not exists(v : ext_ml_transform[\n            :xgboost_feature_importances, 0, M, {()}, 0, H\n        ](i, v)) and imp = 0.0)\n    )\n)",
    children: [],
  },
  {
    type: "definition",
    name: "linear_regression_objective",
    docstring:
      "    linear_regression_objective[X, Y, M]\n\nCompute `|| X'M - Y ||^2_2` (the linear regression objective).  `X` is the data, which\nshould be represented as a specialized relation (one specialization for each feature); `Y`\nis the responses; `M` is the (specialized) model.\n\n`X` may contain categorical features.",
    code: "@inline @function def linear_regression_objective[X, Y, M] = sum[rs... :\n    (sum[c, v : (v = X[c, rs...] * M[c]) or (v = M[c, X[c, rs...]])] + M[:bias] - Y[rs...]) ^ 2\n]\n\n@inline @function def _lr_random_initial_point_val[X, SEED](v) =\n    random_mersenne_twister[SEED, ()](v) and exists(ks..., vv : X(ks..., vv) and Float(vv))\n@inline @function def _lr_random_initial_point_val[X, SEED](cat, v) =\n    random_mersenne_twister[SEED, (c : exists(ks... : X(ks..., c) and Int(c)))](cat, v)\n\n// Utility: use a value from the data X to extract some kind of integer seed to be used by\n// the RNG.  Note that we have to ensure that the value isn't negative, because seeds must\n// be uints.\n@inline def _extract_seed[X](v) =\n    (exists(ks..., v2 : X(ks..., v) and Int(v2) and v = uint128[maximum[0, v2]])) or\n    (exists(ks..., v2 : X(ks..., v2) and Float(v2) and\n        v = uint128[maximum[0, trunc_to_int[v2]]]))",
    children: [],
  },
  {
    type: "definition",
    name: "lr_random_initial_point",
    docstring:
      '    lr_random_initial_point[X]\n\nCompute a somewhat-random initial point for the purposes of optimization.  This uses points\nin the data as a seed.  This utility is meant as a convenience to provide an initial point\nto `linear_regression[]`, and not necessarily as a way to generate a "good" initial point.',
    code: "@inline @function def lr_random_initial_point[X][f](vs...) =\n    (f != :bias and _lr_random_initial_point_val[X[f], _extract_seed[X[f]]](vs...)) or\n    (f = :bias and random_mersenne_twister[10, ()](vs...))",
    children: [],
  },
  {
    type: "definition",
    name: "linear_regression",
    docstring:
      "    linear_regression[X, Y, IP, penalty_type, penalty]\n\nFit a linear regression model on the data `X` and the responses `Y`, starting optimization\nfrom the model parameters `IP`.  `X` should be a specialized relation where each\nspecialization corresponds to one feature, and `Y` should be an unspecialized relation\ncontaining responses.  `IP` should be a specialized relation with all the same relations as\n`X`, and also the additional scalar specialization `:bias => Float64`.\n\n`IP` is the initial point for learning, and an initial point can be created by using\n`lr_random_initial_point[X]`.\n\n`PENALTY_TYPE` should be `:none`, `:l1`, `:l1_no_bias`, `:l2`, or `:l2_no_bias`, and\n`PENALTY` should be a scalar floating-point value specifying the value of the regularization\nto use.  If a no-bias penalty is used, then the first element of `IP` will not be\nregularized.  If `IP` is a specialization, then the first element of `IP[:bias]` (if that\nspecialization exists) will not be regularized.\n\nIf either `PENALTY_TYPE` or `PENALTY` are relations with more than one value, the first\n(sorted) value will be taken.  (Be sure to make sure that you only pass one value!)",
    code: "@inline def linear_regression[X, Y, IP, PENALTY_TYPE, PENALTY] = minimize_initial_point[\n    linear_regression_objective[X, Y], IP, PENALTY_TYPE, PENALTY\n]",
    children: [],
  },
  {
    type: "definition",
    name: "linear_regression_predict",
    docstring:
      "    linear_regression_predict[M, X]\n\nGiven the linear regression model `M` (produced by `linear_regression[]`), compute\npredictions for the points in `X`.  `X` should be a specialized relation where each\nspecialization corresponds to one feature.",
    code: "@inline def linear_regression_predict[M, X][ks...] =\n    sum[f, v : ((v = M[f] * X[f, ks...]) or (v = M[X[f, ks...]]))] + M[:bias]",
    children: [],
  },
  {
    type: "definition",
    name: "minimize_initial_point",
    docstring:
      "    minimize_initial_point[OBJ, IP, penalty_type, penalty]\n\nGiven an objective function OBJ that takes a relational parameter, and an initial point\nrelation IP, return the relation R_BEST that minimizes OBJ.  That is, `R_BEST = argmin_R\nOBJ[R]`.  The penalty type and penalty value should be specified as the third and fourth\narguments.\n\nThe optimization performed is a gradient-descent-like technique (specifically, FASTA), and\nthe returned relation `R_BEST` has the same support as the initial point relation `IP`.\n\nNote that `IP` should be a functional dependency, and `OBJ` should be an inlined\nhigher-order relation whose first parameter is the point to evaluate the objective with.\n\n`PENALTY_TYPE` should be `:none`, `:l1`, `:l1_no_bias`, `:l2`, or `:l2_no_bias`, and\n`PENALTY` should be a scalar floating-point value specifying the value of the regularization\nto use.  If a no-bias penalty is used, then the first element of `IP` will not be\nregularized.  If `IP` is a specialization, then the first element of `IP[:bias]` (if that\nspecialization exists) will not be regularized.\n\n`:l1` and `:l1_no_bias` regularization with penalty value `λ` apply the penalty `λ | x |_1`\nto the objective, and `:l2` and `:l2_no_bias` regularization apply the penalty\n`λ / 2 || x ||_2^2` to the objective.\n\nIf either `PENALTY_TYPE` or `PENALTY` are relations with more than one value, the first\n(sorted) value will be taken.  (Be sure to make sure that you only pass one value!)\n\nBelow is an example usage to minimize the quadratic function `f(x) = sum_i (x_i^2)`,\nstarting from the initial point `x = (1.0, 2.0)` with no penalty.\n\n```rel\n@inline def objective[R] = sum[k : R[k] ^ 2]\n@function def initial_point = {(1, 1.0); (2, 2.0)}\n\ndef r_best = minimize_initial_point[objective, initial_point, :none, 0.0]\n```\n\nIn this situation, we expect `r_best` to be a relation with the values\n`{(1, 0.0); (2, 0.0)}`.\n",
    code: "@inline def minimize_initial_point[OBJ, IP, PENALTY_TYPE, PENALTY] =\n    rel_primitive_minimize_initial_point[\n        OBJ[IP], IP, IP, jacobian[OBJ[IP], IP], PENALTY_TYPE, PENALTY\n    ]",
    children: [],
  },
  {
    type: "definition",
    name: "add",
    docstring:
      "    add[x, y]\n    x + y\n\nAddition.\n\nExamples:\n- `1 + 3` is an expression with value 4\n- `add[1, 3]` is an expression with value 4\n- `add(1, 3, 4)` is a formula that is `true`.\n\n```rel\n1 + 3 = 4\nadd[1, 3] = 4\nequal(add(1, 3, 4), true)\n```",
    code: "@inline\ndef add(x, y, z) = rel_primitive_add(x, y, z)\n\n\n@inline\ndef (+)(x, y, z) = add(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "subtract",
    docstring:
      "    subtract[x, y]\n    x - y\n\nSubtraction.\n\nExamples:\n```rel\n8 - 5 = 3\nsubtract[2, 3] = -1\nequal(subtract(8, 5, 3), true)\n```",
    code: "@inline\ndef subtract(x, y, z) = rel_primitive_subtract(x, y, z)\n\n@inline\ndef (-)(x, y, z) = subtract(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "divide",
    docstring:
      "    divide[x, y]\n    x / y\n\nDivision.\n\n`divide[x, y]` is defined when either the types of `x` and `y` are the same,\neither operand is of type `SignedInt[64]` or `Floating[64]`, one operand is\na rational type and the other is a signed integer type, or one operand is\na decimal type and the other is an integer type (regardless of signedness).\nThe return type is:\n* the type of `x` when the types of both operands are the same float, rational,\n  or decimal type.\n* `Floating[64]` when the types of both operands are integer types.\n* `Floating[64]` when either the type of `x` or the type of `y` is\n  `Floating[64]`.\n* `Rational[n]`, where `n` is the greater of the number of bits in the types of\n  `x` and `y`, when one operand is a rational type and the other is a signed\n  integer type.\n* The type of `x` if `x` is a float type and `y` is of type `SignedInt[64]`,\n  and vice versa.\n* The type of `x` if `x` is a decimal type and `y` is some integer type, and\n  vice versa.\n\nExamples:\n```rel\n3.4 / 2 = 1.7\ndivide[6, 3] = 2.0\nequal(divide(6, 3, 2.0), true)\nequal(divide(6, 3, 2), false)\n```",
    code: "@inline\ndef divide[x, y] = rel_primitive_divide[x, y]\n\n@inline\ndef (/)(x, y, z) = divide(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "trunc_divide",
    docstring:
      "    trunc_divide[x, y]\n\nInteger Division.\n\nQuotient from Euclidean division.\nComputes x/y rounded towards zero.\n\nIs `false` (empty) when `y = 0` for Integer arguments.\n\nExamples:\n```rel\ntrunc_divide[5, 2] = 2\ntrunc_divide[-5, 2] = -2\ntrunc_divide[5.1, 2] = 2.0\nempty(trunc_divide[5, 0])\n```",
    code: "@inline\ndef trunc_divide[x, y] = rel_primitive_trunc_divide[x, y]\n\n@inline\ndef (÷)(x, y, z) = trunc_divide(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "floor_divide",
    docstring:
      "    floor_divide[x, y]\n\nFloor Division.\n\nLargest integer less than or equal to x/y.\nComputes x/y rounded towards negative infinity.\n\nIs `false` (empty) when `y = 0` for Integer arguments.\n\nExamples:\n```rel\nfloor_divide[5, 2] = 2\nfloor_divide[-5, 2] = -3\nfloor_divide[5.1, 2] = 2.0\nempty(floor_divide[5.1, 0])\n```",
    code: "@inline\ndef floor_divide[x, y] = rel_primitive_floor_divide[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "remainder",
    docstring:
      "    remainder[x, y]\n    x % y\n\nRemainder from Euclidean division: a value with the same sign as x,\nand smaller in magnitude than y. This value is always exact.\n\nSatisfies `x = (x / y) * y + (x % y)`.\n\nIs `false` (empty) when `y = 0` for Integer arguments.\n\nExamples:\n```rel\n8 % 3 = 2\nremainder[8, 3] = 2\nremainder[8, -3] = 2\nremainder[-8, 3] = -2\nempty(remainder[6, 0])\n```\n\n`remainder[x, y]` is defined when either the types of `x` and `y` are the same, or\neither operand is of type `SignedInt[64]` or `Floating[64]`.\nThe return type is:\n* the type of `x` when the types of both operands are the same.\n* `SignedInt[n]` or `UnsignedInt[n]` where `n` is the greater of the number of bits\n  in the types of `x` and `y` and the signedness is chosen to match that of the\n  type of `x`, and both `x` and `y` are of integer types.\n* `Floating[64]` when either the type of `x` or the type of `y` is `Floating[64]`.\n* The type of `x` when `x` is a non-integer type and `y` is of type `SignedInt[64]`.\n* The type of `y` when `y` is a non-integer type and `x` is of type `SignedInt[64]`.\n* `Rational[n]` where `n` is the greater of the number of bits in the types of `x`\n   and `y`, and one operand is a rational type and the other is a `SignedInt[64]`.",
    code: "@inline\ndef remainder[x, y] = rel_primitive_remainder[x, y]\n\n@inline\ndef (%)(x, y, z) = remainder(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "modulo",
    docstring:
      "    modulo[x, y]\n\nModulus after division, in the range [0,y), if y is positive, or\n(y,0] if y is negative.\n\nSatisfies `x = floor_divide[x,y] * y + modulo[x, y]`.\n\nIs `false` (empty) when `y = 0` for Integer arguments.\n\nExamples:\n```rel\nmodulo[8, 3] = 2\nmodulo[8, -3] = -1\nmodulo[-8, 3] = 1\nempty(modulo[3,0])\n```\n\n`modulo[x, y]` is defined when either the types of `x` and `y` are the same, or\neither operand is of type `SignedInt[64]` or `Floating[64]`.\nThe return type is:\n* the type of `x` when the types of both operands are the same.\n* `SignedInt[n]` or `UnsignedInt[n]` where `n` is the greater of the number of bits\n  in the types of `x` and `y` and the signedness is chosen to match that of the\n  type of `y`, and both `x` and `y` are of integer types.\n* `Floating[64]` when either the type of `x` or the type of `y` is `Floating[64]`.\n* The type of `x` when `x` is a non-integer type and `y` is of type `SignedInt[64]`.\n* The type of `y` when `y` is a non-integer type and `x` is of type `SignedInt[64]`.\n* `Rational[n]` where `n` is the greater of the number of bits in the types of `x`\n   and `y`, and one operand is a rational type and the other is a `SignedInt[64]`.",
    code: "@inline\ndef modulo[x, y] = rel_primitive_modulo[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "multiply",
    docstring:
      "    multiply[x, y]\n    x * y\n\nMultiplication.\n\nExamples:\n```rel\n3 * 2 = 6\nequal(multiply(3.0, 2, 6.0), true)\n```",
    code: "@inline\ndef multiply[x, y] = rel_primitive_multiply[x, y]\n\n@inline\ndef (*)(x, y, z) = multiply(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_and",
    docstring:
      "    bitwise_and[x, y]\n\nBitwise `and` of two integers.\n\nExample:\n```rel\nbitwise_and[3,2] = 2\nbitwise_and[0x10011, 0x11100] = 0x00010000\n```",
    code: "@inline\ndef bitwise_and[x, y] = rel_primitive_bitwise_and[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_or",
    docstring:
      "    bitwise_or[x, y]\n\nBitwise `or` of two integers.\n\nExample:\n```rel\nbitwise_or[3, 2] = 3\nbitwise_or[0x00011, 0x11100] = 0x00011111\n```",
    code: "@inline\ndef bitwise_or[x, y] = rel_primitive_bitwise_or[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_xor",
    docstring:
      "    bitwise_xor[x, y]\n\nBitwise `xor` of two integers.\n\nExample:\n```rel\nbitwise_xor[3, 2] = 1\nbitwise_xor[0x00011, 0x11100] = 0x00011111\n```",
    code: "@inline\ndef bitwise_xor[x, y] = rel_primitive_bitwise_xor[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_left_shift",
    docstring:
      "    bitwise_left_shift[x, n]\n\nBitwise left shift of an integer `x` by `n` bits.\n\nExamples:\n```rel\nbitwise_left_shift[8, 1] = 16\nbitwise_left_shift[1, 10] = 1024\nbitwise_left_shift[0xF, 1] = 0x1d\n```",
    code: "@inline\ndef bitwise_left_shift[x, n] = rel_primitive_bitwise_left_shift[x, n]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_right_shift",
    docstring:
      "    bitwise_right_shift[x, n]\n\nBitwise right shift of an integer `x` by `n` bits while preserving the sign.\n\nExamples:\n```rel\nbitwise_right_shift[1024, 1] = 512\nbitwise_right_shift[-1024, 1] = -512\n```",
    code: "@inline\ndef bitwise_right_shift[x, n] = rel_primitive_bitwise_signed_right_shift[x, n]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_unsigned_right_shift",
    docstring:
      "    bitwise_unsigned_right_shift[x,n]\n\nBitwise right shift of an integer by n bits.\n\nExamples:\n```rel\nbitwise_unsigned_right_shift[8, 1] = 4\nbitwise_unsigned_right_shift[-8, 1] = 9223372036854775804\n```",
    code: "@inline\ndef bitwise_unsigned_right_shift[x, n] = rel_primitive_bitwise_unsigned_right_shift[x, n]",
    children: [],
  },
  {
    type: "definition",
    name: "bitwise_not",
    docstring:
      "    bitwise_not[x]\n\nBitwise `not` of an integer.\n\nExamples:\n```rel\nbitwise_not[8] = -9\nbitwise_not[-9] = 8\nbitwise_not[0x00011] = 0xffffffee\n```",
    code: "@inline\ndef bitwise_not[x] = rel_primitive_bitwise_not[x]",
    children: [],
  },
  {
    type: "definition",
    name: "power",
    docstring:
      "    power[x, y]\n    x ^ y\n\nExponentiation: $x$ to the power of $y$.\n\nExamples:\n```rel\npower[2, 3] = 8\npower[3.0, 2] = 9.0\npower[9, 0.5] = 3.0\n```",
    code: "@inline\ndef power[x, y] = rel_primitive_power[x, y]\n\n@inline\ndef (^)(x, y, z) = power(x, y, z)",
    children: [],
  },
  {
    type: "definition",
    name: "floor",
    docstring:
      "    floor[x]\n\nRound down to the nearest integer.\n\nExamples:\n```rel\nfloor[4.5] = 4.0\nfloor[-4.5] = -5.0\nfloor[4] = 4\n```",
    code: "@inline\ndef floor[x] = round[:ROUND_DOWN, x]",
    children: [],
  },
  {
    type: "definition",
    name: "floor_to_int",
    docstring:
      "    floor_to_int[x]\n\nGeneral float-to-int conversion, floor. Argument must be a float.\n\nExamples:\n```rel\nfloor_to_int[3.1] = 3\nfloor_to_int[-3.1] = -4\nfloor_to_int[3] : error\n```",
    code: "@inline\ndef floor_to_int[x] = float_int_convert[floor[x]]",
    children: [],
  },
  {
    type: "definition",
    name: "ceil",
    docstring:
      "    ceil[x]\n\nRound up to the nearest integer.\n\nExamples:\n```rel\nceil[4.5] = 5.0\nceil[-4.5] = -4.0\nceil[4] = 4\n```",
    code: "@inline\ndef ceil[x] = round[:ROUND_UP, x]",
    children: [],
  },
  {
    type: "definition",
    name: "trunc",
    docstring:
      "    trunc[x]\n\nRound toward zero to the nearest integer. Result has the same type as the argument.\n\nExamples:\n```rel\ntrunc[3.9] = 3.0\ntrunc[-4.9] = -4.0\ntrunc[4] = 4\n```",
    code: "@inline\ndef trunc[x] = round[:ROUND_TO_ZERO, x]",
    children: [],
  },
  {
    type: "definition",
    name: "trunc_to_int",
    docstring:
      "    trunc_to_int[x]\n\nGeneral float-to-int conversion, truncating. Argument must be a float.\n\nExamples:\n```rel\ntrunc_to_int[3.1] = 3\ntrunc_to_int[-3.1] = -3\ntrunc_to_int[3] : error\n```",
    code: "@inline\ndef trunc_to_int[x] = float_int_convert[trunc[x]]",
    children: [],
  },
  {
    type: "definition",
    name: "round_mode",
    docstring:
      "    round[mode, x]\n    round[x]\n\nRound `x` to an integer according to the given rounding mode.\n`round[x]` rounds to the nearest integer, with ties rounded to the nearest even\ninteger, equivalent to `round[:ROUND_NEAREST, x]`.\n\nThe modes available are:\n`ROUND_UP`\n- Round up to the nearest integer.\n`ROUND_DOWN`\n- Round down to the nearest integer.\n`ROUND_NEAREST`\n- Round to the nearest integer, with ties (fractional values of 0.5) being rounded to the nearest even integer.\n`ROUND_NEAREST_TIES_AWAY`\n- Round to the nearest integer, with ties rounded away from zero.\n`ROUND_NEAREST_TIES_UP`\n- Round to the nearest integer, with ties rounded toward positive infinity.\n`ROUND_TO_ZERO`\n- Round toward zero to the nearest integer.",
    code: "@inline\ndef round_mode = :ROUND_UP; :ROUND_DOWN; :ROUND_NEAREST; :ROUND_NEAREST_TIES_AWAY; :ROUND_NEAREST_TIES_UP; :ROUND_TO_ZERO\n\n@inline\ndef round(mode, x, rounded) = {\n    (mode = :ROUND_UP,                rounded = rel_primitive_round_up[x]);\n    (mode = :ROUND_DOWN,              rounded = rel_primitive_round_down[x]);\n    (mode = :ROUND_NEAREST,           rounded = rel_primitive_round_nearest[x]);\n    (mode = :ROUND_NEAREST_TIES_AWAY, rounded = rel_primitive_round_nearest_ties_away[x]);\n    (mode = :ROUND_NEAREST_TIES_UP,   rounded = rel_primitive_round_nearest_ties_up[x]);\n    (mode = :ROUND_TO_ZERO,           rounded = rel_primitive_round_to_zero[x]) }\n\n@inline\ndef round(x in Number, rounded) = round(:ROUND_NEAREST, x, rounded)",
    children: [],
  },
  {
    type: "definition",
    name: "maximum",
    docstring:
      "    maximum[x, y]\n\nMaximum of two arguments. The arguments should have the same type.\n\nExamples:\n```rel\nmaximum[3, 4] = 4\nmaximum[3.0, 4.0] = 4.0\n```",
    code: "@inline\ndef maximum[x, y] = rel_primitive_max[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "minimum",
    docstring:
      "    minimum[x, y]\n\nMinimum of two arguments. The arguments should have the same type.\n\nExamples:\n```rel\nminimum[3, 4] = 3\nminimum[3.0, 4.0] = 3.0\n```",
    code: "@inline\ndef minimum[x, y] = rel_primitive_min[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "abs",
    docstring:
      "    abs[x]\n\nThe absolute value of x.\n\nExamples:\n```rel\nabs[-2] = 2\nabs[-2.0] = 2.0\n```",
    code: "@inline\ndef abs[x] = rel_primitive_abs[x]",
    children: [],
  },
  {
    type: "definition",
    name: "sqrt",
    docstring:
      "    sqrt[x]\n\nThe non-negative square root of `x`.\n\nDefined for non-negative `x`.",
    code: "@inline\ndef sqrt[x] = rel_primitive_sqrt[x]",
    children: [],
  },
  {
    type: "definition",
    name: "log",
    docstring:
      "    log[x, y]\n\nLogarithm of y with given base x.\n\nDefined for non-negative `x` and `y`.\n\nExample:\n```rel\nlog[2, 8] = 3.0\n```",
    code: "@inline\ndef log[x, y] = rel_primitive_log[x, y]",
    children: [],
  },
  {
    type: "definition",
    name: "log10",
    docstring:
      "    log10[x]\n\nBase 10 logarithm.\n\nDefined for non-negative `x`.\n\n```rel\nlog10[1000] = 3.0\n```",
    code: "@inline\ndef log10[x] = rel_primitive_log10[x]",
    children: [],
  },
  {
    type: "definition",
    name: "natural_log",
    docstring:
      "    natural_log[x]\n\nNatural logarithm (ln) (base e).\n\nDefined for non-negative `x`.",
    code: "@inline\ndef natural_log[x] = rel_primitive_natural_log[x]",
    children: [],
  },
  {
    type: "definition",
    name: "natural_exp",
    docstring:
      "    natural_exp[x]\n\nExponentiation with the base of the natural log, e.",
    code: "@inline\ndef natural_exp[x] = rel_primitive_natural_exp[x]",
    children: [],
  },
  {
    type: "definition",
    name: "erf",
    docstring:
      "    erf[x]\nThe error function of `x`.\n\nExternal link: <https://en.wikipedia.org/wiki/Error_function>\n\nExamples:\n\n```rel\nerf[2] = 0.9953222650189527\nerf[-0.5] = -0.5204998778130465\n```",
    code: "@inline\ndef erf[x] = rel_primitive_error_function[x]",
    children: [],
  },
  {
    type: "definition",
    name: "erfinv",
    docstring:
      "    erfinv[x]\nThe inverse error function of `x`.\n\nExternal link: <https://en.wikipedia.org/wiki/Error_function#Inverse_functions>\n\nExamples:\n\n```rel\nerfinv[0.1] = 0.08885599049425769\nerfinv[-0.5] = -0.4769362762044699\nerfinv[erf[1]] = 1.0\n```",
    code: "@inline\ndef erfinv[x] = rel_primitive_error_function_inverse[x]",
    children: [],
  },
  {
    type: "definition",
    name: "cbrt",
    docstring:
      "    cbrt[x]\n\nThe cube root of x.\n\nExample:\n```rel\ncbrt[27] = 3.0\n```",
    code: "@inline\ndef cbrt[x] = rel_primitive_cbrt[x]",
    children: [],
  },
  {
    type: "definition",
    name: "factorial",
    docstring:
      "    factorial[x]\n\nFactorial of x.\n\nDefined for non-negative `x`.\nThe result is promoted to at least 64-bits.\n\nIf `x` is up to 64-bits, `factorial` is defined for values up to 20 (inclusive).\nIf `x` is `Int128`, `factorial` is defined for values up to 33 (inclusive).\nIf `x` is `UInt128`, `factorial` is defined for values up to 34 (inclusive).",
    code: "@inline\ndef factorial[x] = rel_primitive_factorial[x]",
    children: [],
  },
  {
    type: "definition",
    name: "sign",
    docstring: "    sign[x]\n\nThe sign of x: either 0, -1, or 1.",
    code: "@inline\ndef sign[x] = rel_primitive_sign[x]",
    children: [],
  },
  {
    type: "definition",
    name: "pi_float64",
    docstring:
      "    pi_float64\n\nThe constant pi.\n\nExample:\n```rel\ncos[pi_float64] = -1.0\n```",
    code: "@inline\ndef pi_float64 = 3.14159265358979323846",
    children: [],
  },
  {
    type: "definition",
    name: "sin",
    docstring:
      "    sin[x]\n\nSine of x (given in radians).\n\nDefined for non-infinite `x`.\n\nExample:\n```rel\nsin[pi_float64/2] = 1.0\n```",
    code: "@inline\ndef sin[x] = rel_primitive_sin[x]",
    children: [],
  },
  {
    type: "definition",
    name: "asin",
    docstring:
      "    asin[x]\n\nInverse sine (in radians).\n\nDefined for `x` between -1 and 1 (inclusive).\n\nExample:\n```rel\nasin[1] = 1.5707963267948966\n```",
    code: "@inline\ndef asin[x] = rel_primitive_asin[x]",
    children: [],
  },
  {
    type: "definition",
    name: "cos",
    docstring:
      "    cos[x]\n\nCosine of x (given in radians).\n\nDefined for non-infinite `x`.\n\nExample:\n```rel\ncos[pi_float64] = -1.0\n```",
    code: "@inline\ndef cos[x] = rel_primitive_cos[x]",
    children: [],
  },
  {
    type: "definition",
    name: "acos",
    docstring:
      "    acos[x]\n\nInverse cosine (in radians).\n\nDefined for `x` between -1 and 1 (inclusive).\n\nExample:\n```rel\nacos[0] = 1.5707963267948966\n```",
    code: "@inline\ndef acos[x] = rel_primitive_acos[x]",
    children: [],
  },
  {
    type: "definition",
    name: "tan",
    docstring:
      "    tan[x]\n\nTangent of x (given in radians).\n\nDefined for non-infinite `x`.\n\nExample:\n```rel\ntan[pi_float64/4] = 0.9999999999999999\n```",
    code: "@inline\ndef tan[x] = rel_primitive_tan[x]",
    children: [],
  },
  {
    type: "definition",
    name: "atan",
    docstring:
      "    atan[x]\n\nInverse tangent (in radians).\n\nDefined for `x` between -1 and 1 (inclusive).",
    code: "@inline\ndef atan[x] = rel_primitive_atan[x]",
    children: [],
  },
  {
    type: "definition",
    name: "atan2",
    docstring:
      "    atan2[y, x]\n\nInverse tangent: an angle (in radians) between the positive x-axis\nand the ray to the point (x, y).",
    code: "@inline\ndef atan2[x,y] = rel_primitive_atan2[x,y]",
    children: [],
  },
  {
    type: "definition",
    name: "cot",
    docstring: "    cot[x]\n\nCotangent of x (given in radians).",
    code: "@inline\ndef cot[x] = rel_primitive_cot[x]",
    children: [],
  },
  {
    type: "definition",
    name: "acot",
    docstring: "    acot[x]\n\nInverse cotangent (in radians).",
    code: "@inline\ndef acot[x] = rel_primitive_acot[x]",
    children: [],
  },
  {
    type: "definition",
    name: "sinh",
    docstring: "    sinh[x]\n\nHyperbolic sine.",
    code: "@inline\ndef sinh[x] = rel_primitive_sinh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "cosh",
    docstring: "    cosh[x]\n\nHyperbolic cosine.",
    code: "@inline\ndef cosh[x] = rel_primitive_cosh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "tanh",
    docstring: "    tanh[x]\n\nHyperbolic tangent.",
    code: "@inline\ndef tanh[x] = rel_primitive_tanh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "asinh",
    docstring: "    asinh[x]\n\nInverse hyperbolic sine.",
    code: "@inline\ndef asinh[x] = rel_primitive_asinh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "acosh",
    docstring:
      "    acosh[x]\n\nInverse hyperbolic cosine.\n\nDefined for `x` >= 1.",
    code: "@inline\ndef acosh[x] = rel_primitive_acosh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "atanh",
    docstring: "    atanh[x]\n\nInverse hyperbolic tangent.",
    code: "@inline\ndef atanh[x] = rel_primitive_atanh[x]",
    children: [],
  },
  {
    type: "definition",
    name: "deg2rad",
    docstring: "    deg2rad[x]\n\nConvert degrees to radians.",
    code: "@inline\ndef deg2rad[x] = x * pi_float64 / 180.0",
    children: [],
  },
  {
    type: "definition",
    name: "rad2deg",
    docstring: "    rad2deg[x]\n\nConvert radians to degrees.",
    code: "@inline\ndef rad2deg[x] = x / pi_float64 * 180.0",
    children: [],
  },
  {
    type: "definition",
    name: "haversine",
    docstring:
      "    haversine[r, x1, y1, x2, y2]\n\nThe great circle distance of two points, i.e $(x1,y1)$ and $(x2,y2)$, on a sphere of radius\n$r$, using the Haversine formula. The two points are specified by their latitude and\nlongitude in radians.\n\nExample:\n```rel\ndef output = haversine[10, 0, 0, 0, pi_float64/2]\n15.707963267948964\n```",
    code: "@inline\ndef haversine[r, x1, y1, x2, y2] =\n    2 * r * asin[sqrt[sin[(x2 - x1)/2] ^ 2 + cos[x1] * cos[x2] * sin[(y2 - y1) / 2] ^ 2]]",
    children: [],
  },
  {
    type: "definition",
    name: "range",
    docstring:
      "    range(low, hi, stride, x)\n\nGenerate a relation with integer values between `low` and `high`, inclusive, advancing by `stride` each time.\n\n- If `low <= hi` and `stride > 0`, then `range[low, hi, stride]` has all the values\n  `x = low + i * stride <= hi` for non-negative integers `i`.\n- Otherwise (i.e. if `low > hi` or `stride <= 0`), then `range[low, hi, stride]` is empty.\n\nExample:\n```rel\ndef output = range[1, 10, 4]\n1\n5\n9\n```",
    code: "@inline\ndef range = rel_primitive_range",
    children: [],
  },
  {
    type: "definition",
    name: "eq",
    docstring:
      '    eq(x, y)\n    x = y\n\nEquality between scalar (single) values, such as integers, strings, symbols. (For equality between relations, use `equal`.)\n\nExamples:\n- `1 = 1` is `true`.\n- `:a = :a` is `true`\n- `"a" = "a"` is `true`\n- `2 = 2.0` is `false`\n- `1 = "a"` is `false`',
    code: "@inline\ndef eq(x, y) = rel_primitive_eq(x, y)\n\n@inline\ndef (=)(x, y) = eq(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "neq",
    docstring:
      '    neq(x, y)\n    x ≠ y\n    x != y\n\nExamples:\n- `1 != 2` is `true`\n- `1 != 1.0` is `true`\n- `1 != "a"` is `true`',
    code: "@inline\ndef neq(x, y) = rel_primitive_neq(x, y)\n\n@inline\ndef (≠)(x, y) = neq(x, y)\n\n@inline\ndef (!=)(x, y) = neq(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "lt",
    docstring: "    lt(x, y)\n    x < y",
    code: "@inline\ndef lt(x, y) = rel_primitive_lt(x, y)\n\n@inline\ndef (<)(x, y) = lt(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "gt",
    docstring: "    gt(x, y)\n    x > y",
    code: "@inline\ndef gt(x, y) = rel_primitive_gt(x, y)\n\n@inline\ndef (>)(x, y) = gt(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "lt_eq",
    docstring: "    lt_eq(x, y)\n    x ≤ y\n    x <= y",
    code: "@inline\ndef lt_eq(x, y) = rel_primitive_lt_eq(x, y)\n\n@inline\ndef (≤)(x, y) = lt_eq(x, y)\n\n@inline\ndef (<=)(x, y) = lt_eq(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "gt_eq",
    docstring: "    gt_eq(x, y)\n    x ≥ y\n    x >= y",
    code: "@inline\ndef gt_eq(x, y) = rel_primitive_gt_eq(x, y)\n\n@inline\ndef (≥)(x, y) = gt_eq(x, y)\n\n@inline\ndef (>=)(x, y) = gt_eq(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "equal",
    docstring:
      "    equal(R, S)\n\nRelational equality. Note that `eq` and `=` should be used only for scalar values, while `equal` should be used to check that two relations are the same.",
    code: "@inline\ndef equal(R, S) = forall(x... where R(x...): S(x...)) and forall(x... where S(x...): R(x...))",
    children: [],
  },
  {
    type: "definition",
    name: "count",
    docstring:
      "    count[R]\n\nNumber of tuples in R, if R is not empty.\nIf R is empty, `count[R]` is `false`.\n\nExamples:\n- `count[employee]` is the number of tuples in relation `employee`\n- `d in department: count[d.member]` is the member count for every department with at\n   least 1 member\n- `count[5]` is 1 because `5` is a singleton relation\n- `count[{}]` is `false` (empty). To get 0 instead, use left override, as in  `count[R] <++ 0`.",
    code: "@inline\ndef count[R] = sum[{R,1}]",
    children: [],
  },
  {
    type: "definition",
    name: "sum",
    docstring:
      '    sum[R]\n    Σ[R]\n\nSum of (the last argument of) the relation R, if non-empty.\nIf R is empty, `sum[R]` is `false` (empty). To get 0 instead, use left override, as in  `sum[R] <++ 0`.\n\nExample:\n```rel\ndef salary = {("John", 10) ; ("Mary", 20); ("Paul", 17) ; ("Peter", 15) }\ndef output = sum[salary]\n62\n\ndef member = {("A", "John"); ("B", "Mary") ; ("A", "Paul") ; ("C" , "Peter") }\ndef department = {"A"; "B"; "C" }\ndef output = d in department: sum[salary[p] for p in member[d]]\n("A", 27)\n("B", 20)\n("C", 15)\n```',
    code: "@inline\ndef sum[R] = rel_primitive_reduce_noinit[+, R]",
    children: [],
  },
  {
    type: "definition",
    name: "Σ",
    docstring:
      "    sum[R]\n    Σ[R]\n\nSum of (the last argument of) the relation R, if non-empty.\n`false` if R is empty.\n\nExample:\n```rel\nd in department: Σ[salary[p] for p in member[d]]\n```",
    code: "@inline\ndef Σ = sum",
    children: [],
  },
  {
    type: "definition",
    name: "sum_int",
    docstring:
      "    sum_int[R]\n\nInteger sum of (the last argument of) the relation R, which should contain integers.\n`sum_int[R] = 0` for empty R.",
    code: "@inline\ndef sum_int[R] = rel_primitive_reduce[+, 0, R]",
    children: [],
  },
  {
    type: "definition",
    name: "product",
    docstring:
      "    product[R]\n\nProduct of (the last argument of) the relation R, if non-empty.\nIf R is empty, product[R] is `false`.\n\nExample:\n```rel\nproduct[{(1, 4); (2, 5)}] = 20\n```",
    code: "@inline\ndef product[R] = rel_primitive_reduce_noinit[*, R]",
    children: [],
  },
  {
    type: "definition",
    name: "max",
    docstring:
      "    max[R]\n\nMaximum of (the last argument of) the relation `R`, if non-empty.\nIf `R` is empty, `max[R]` is false (empty).\nUse `<++` (left override) if you need a specific value for the case where `R` is empty.\n\nExample:\n```rel\nmax[{(2, 3); (1, 6)}] = 6\n```",
    code: "@inline\ndef max[R] = rel_primitive_reduce_noinit[maximum, R]",
    children: [],
  },
  {
    type: "definition",
    name: "Max",
    docstring: "    Max[R]\n\nPlease use max[R]. Deprecates in near future",
    code: "@inline\ndef Max = max",
    children: [],
  },
  {
    type: "definition",
    name: "min",
    docstring:
      "    min[R]\n\nMinimum of (the last argument of) the relation `R`, if non-empty.\nIf `R` is empty, `min[R]` is false.\nUse `<++` (left override) if you need a different value in this case.\n\nExample:\n```rel\nmin[{(2, 3); (1, 6)}] = 3\n```",
    code: "@inline\ndef min[R] = rel_primitive_reduce_noinit[minimum, R]",
    children: [],
  },
  {
    type: "definition",
    name: "Min",
    docstring: "    Min[R]\n\nPlease use min[R]. Deprecates in near future",
    code: "@inline\ndef Min = min",
    children: [],
  },
  {
    type: "definition",
    name: "clamp",
    docstring:
      "    clamp[lo, hi, v]\n\nclamp limits the value `v` to a given range(lo, hi), changing values outside the\nrange to the closest `lo`, `hi` value if necessary. The arguments should have the same type.\n\nExamples:\n```rel\nclamp[2, 5, 1] = 2\nclamp[2, 5, 6] = 5\nclamp[2, 5, 3] = 3\n```",
    code: "@inline\ndef clamp[lo, hi, v] = min[{max[{lo; v}]; hi}]",
    children: [],
  },
  {
    type: "definition",
    name: "argmax",
    docstring:
      "    argmax[R]\n\nFind the keys for the largest value of the relation R.\n\nExamples:\n```rel\ndef output = argmax[{(2, 3); (1, 6)}]\n1\n\ndef output = argmax[{(2, 6); (1, 6); (5, 0)}]\n1\n2\n\n// find the teams with the largest aggregated salary:\nargmax[d in team: sum[salary[p] for p in member[d]]]\n```",
    code: "@inline\ndef argmax[R] = R.(max[R])",
    children: [],
  },
  {
    type: "definition",
    name: "ArgMax",
    docstring:
      "    ArgMax[R]\n\nPlease use argmax[R]. Deprecates in near future\n",
    code: "@inline\ndef ArgMax = argmax",
    children: [],
  },
  {
    type: "definition",
    name: "argmin",
    docstring:
      "    argmin[R]\n\nFind the keys for the smallest value of the relation R.\n\nExamples:\n```rel\ndef output = argmin[{(2, 3); (1, 6)}]\n2\n\ndef output = argmin[{(2, 6); (1, 6); (5, 10)}]\n1\n2\n\n// find the teams with the smallest aggregated salary:\nargmin[d in team: sum[salary[p] for p in member[d]]]\n```",
    code: "@inline\ndef argmin[R] = R.(min[R])",
    children: [],
  },
  {
    type: "definition",
    name: "ArgMin",
    docstring:
      "    ArgMin[R]\n\nPlease use argmin[R]. Deprecates in near future\n",
    code: "@inline\ndef ArgMin = argmin",
    children: [],
  },
  {
    type: "definition",
    name: "min_k",
    docstring:
      "    min_k[K, R]\n\nThe minimum `K` distinct values of (the last column of) the relation `R`, if\nnon-empty. If `R` contains fewer than `K` distinct values (in its last column), then `min_k`\nwill have fewer than `K` values too. If `R` is empty, `min_k[K, R]` is false.\nCurrently, the maximum supported value of K is 10000.\n\nExample:\n```rel\nmin_k[2, {(2, 3); (1, 6); (3, 5); (1, 1); (4, 1); (2, 6)}]\n```\nis `{1; 3}`.",
    code: "@inline\ndef min_k[K, R] = rel_primitive_mink[R, K, 0]",
    children: [],
  },
  {
    type: "definition",
    name: "max_k",
    docstring:
      "    max_k[K, R]\n\nThe maximum `K` distinct values of (the last column of) the relation `R`, if\nnon-empty. If `R` contains fewer than `K` distinct values (in its last column), then `max_k`\nwill have fewer than `K` values too. If `R` is empty, `max_k[K, R]` is false.\nCurrently, the maximum supported value of K is 10000.\n\nExample:\n```rel\nmax_k[2, {(2, 3); (1, 6); (3, 5); (1, 1); (4, 1); (2, 6)}]\n```\nis `{5; 6}`.",
    code: "@inline\ndef max_k[K, R] = rel_primitive_mink[R, K, 1]",
    children: [],
  },
  {
    type: "definition",
    name: "mean",
    docstring:
      "    mean[R]\n    average[R]\n\nThe arithmetic mean of (the last argument of) the relation R, if non-empty.\nEmpty if `R` is empty.",
    code: "@inline\ndef mean[R] = sum[R] / count[R]",
    children: [],
  },
  {
    type: "definition",
    name: "average",
    docstring:
      "    mean[R]\n    average[R]\n\nThe arithmetic mean of (the last argument of) the relation R, if non-empty.\nFalse if R is empty.",
    code: "@inline\ndef average = mean",
    children: [],
  },
  {
    type: "definition",
    name: "geometric_mean",
    docstring:
      "    geometric_mean[R]\nThe geometric mean of the values of a relation.\n\nExample:\n```rel\ndef output = geometric_mean[{('a',1); ('b',2); ('a',3); ('b',4); ('c',5); ('d',6}]\n2.99379516552\n```",
    code: "@inline\ndef geometric_mean[R] = power[product[R], 1 / count[R]]",
    children: [],
  },
  {
    type: "definition",
    name: "harmonic_mean",
    docstring:
      "    harmonic_mean[R]\nThe harmonic mean of the values of a relation.\n\nExample:\n```rel\ndef output = harmonic_mean[{('a',1); ('b',2); ('a',3); ('b',4); ('c',5); ('d',6}]\n2.44897959184\n```",
    code: "@inline\ndef harmonic_mean[R] = count[R] / sum[a..., v, i: R(a..., v) and i = 1 / v]",
    children: [],
  },
  {
    type: "definition",
    name: "weighted_mean",
    docstring:
      "    weighted_mean[R, W]\nThe weighted mean of values in relation `R` with weights defined by `W`.\nThe last attribute of the relation representing the weights is used to compute the weighted mean.\nWhen the arity of the relation that represents the weights is different from the arity of the input relation\nthe user is expected to align the arities before passing them to `weighted_mean`.(See examples 2 and 3)\n\nExample 1 (The arity of both `R` and `W` are the same):\n```rel\ndef inputs = {(1,'a',10); (2,'b',10); (3,'c',30); (4,'d',40); (5,'e',50)}\n\ndef weights = {(1,'a',11); (2,'b',12); (3,'c',13); (4,'d',14); (5,'e',15)}\n\ndef output = weighted_mean[inputs, weights]\n\n29.692307692307693\n```\n\nExample 2 (The arity of `R` and `W` are different):\n```rel\ndef inputs = {(1,'a',10); (2,'b',10); (3,'c',30); (4,'d',40); (5,'e',50)}\n\ndef weights = {(1,11); (2,12); (3,13); (4,14); (5,15)}\n\ndef output = weighted_mean[inputs, (n: _, weights[n])]\n\n29.692307692307693\n```\nExample 3 (The arity of `R` and `W` are different):\n```rel\ndef inputs = {(1,'a',100,10); (2,'a',200,10); (3,'b',300,30); (4,'c',400,40); (5,'b',500,50)}\n\ndef weights = {(1,'a',11); (2,'a',12); (3,'b',13); (4,'c',14); (5,'b',15)}\n\ndef output = weighted_mean[input, (n, c: _, weights[n,c])]\n\n29.692307692307693\n```",
    code: "@inline\ndef weighted_mean[R,W] = sum[k...: R[k...] * W[k...]] / sum[domain[R] <: W]",
    children: [],
  },
  {
    type: "definition",
    name: "frequency",
    docstring:
      '    frequency(R, elem, c)\n    frequency[R, elem]\n    frequency[R]\n\nFinds the frequency `c` of `elem` in (the last argument of) the relation `R`.\n\nExample:\n```rel\ndef example = {(1, "a"); (2, "b"); (3, 123); (4, 12.5); (3, "b")}\ndef output = frequency[example, "b"]\n2\n\ndef output = frequency[example]\n("a", 1)\n("b", 2)\n(123, 1)\n(12.5, 1)\n```',
    code: "@inline\ndef frequency[R, elem] = count[x...: R(x..., elem)]",
    children: [],
  },
  {
    type: "definition",
    name: "mode",
    docstring:
      '    mode[R]\n\nFinds the most common value in (the last argument of) the relation `R`.\nIf there are multiple most common values, then `mode` chooses the first one\naccording to the sort order.\n\nExamples:\n```rel\ndef example = {(1, "a"); (2, "b"); (3, 123); (4, 12.5); (3, "b")}\nmode[example] = "b"\n\ndef example = {(1, 1); (2, 1); (3, 1); (4, "b"); (5, "b"); (6, "c"); (7, "c")}\nmode[example] = 1\n```',
    code: "@inline\ndef mode[R] = last[top[1, argmax[frequency[R]]]]",
    children: [],
  },
  {
    type: "definition",
    name: "squared",
    docstring:
      "    squared[R]\n\nSquare of a relation: the value of each last element is squared.\n\nExamples:\n```rel\ndef example = {(1, 2); (3, 4)}\nequal(square[example], {(1, 4); (3, 16)}\n```",
    code: "@inline\ndef squared[F][x...] = F[x...] ^ 2",
    children: [],
  },
  {
    type: "definition",
    name: "squared_deviation",
    docstring:
      "    squared_deviation[R]\n\nSquared deviation: squared deviation from the mean of (the last argument of) the relation `R`.",
    code: "@inline\ndef squared_deviation[F][x...] = (F[x...] - mean[F]) ^ 2",
    children: [],
  },
  {
    type: "definition",
    name: "pop_variance",
    docstring: "    pop_variance[R]\n\nPopulation variance",
    code: "@inline\ndef pop_variance[F] = mean[squared_deviation[F]], count[F] > 1",
    children: [],
  },
  {
    type: "definition",
    name: "sample_variance",
    docstring: "    sample_variance[R]\n\nSample variance",
    code: "@inline\ndef sample_variance[F] = sum[squared_deviation[F]] / (count[F] - 1), count[F] > 1",
    children: [],
  },
  {
    type: "definition",
    name: "pop_standard_deviation",
    docstring:
      "    pop_standard_deviation[R]\n    pop_stddev[R]\n\nPopulation standard deviation",
    code: "@inline\ndef pop_standard_deviation[F] = sqrt[pop_variance[F]]\n\n@inline\ndef pop_stddev = pop_standard_deviation",
    children: [],
  },
  {
    type: "definition",
    name: "sample_standard_deviation",
    docstring:
      "    sample_standard_deviation[R]\n    sample_stddev[R]\n\nSample standard deviation of (the last argument of) the relation `R`.",
    code: "@inline\ndef sample_standard_deviation[F] = sqrt[sample_variance[F]]",
    children: [],
  },
  {
    type: "definition",
    name: "sample_stddev",
    docstring: "see: `sample_standard_deviation`",
    code: "@inline\ndef sample_stddev = sample_standard_deviation",
    children: [],
  },
  {
    type: "definition",
    name: "min_max_normalization",
    docstring:
      "    min_max_normalization[R]\n\nMin-Max normalization: $x_n = (x_n - {\\\\rm min}[R]) / {\\\\rm max}[R] - {\\\\rm min}[R]$.\n\nAlso known as min-max scaling or rescaling.",
    code: "@inline\ndef min_max_normalization[R][x...] =\n    (R[x...] - min[R]) / (max[R] - min[R]), (max[R] > min[R])",
    children: [],
  },
  {
    type: "definition",
    name: "mean_normalization",
    docstring:
      "    mean_normalization[R]\n\nMean normalization: $x_n = (x_n - {\\\\rm mean}[R]) / {\\\\rm max}[R] - {\\\\rm min}[R]$",
    code: "@inline\ndef mean_normalization[R][x...] =\n    (R[x...] - mean[R]) / (max[R] - min[R]), (max[R] > min[R])",
    children: [],
  },
  {
    type: "definition",
    name: "pop_zscore_normalization",
    docstring:
      "    pop_zscore_normalization[R]\n\nZ-score normalization (population) of (the last argument of) the relation `R`.",
    code: "@inline\ndef pop_zscore_normalization[R][x...] =\n    (R[x...] - mean[R]) / pop_stddev[R]",
    children: [],
  },
  {
    type: "definition",
    name: "sample_zscore_normalization",
    docstring:
      "    sample_zscore_normalization[R]\n\nZ-score normalization (sample) of (the last argument of) the relation `R`.\n\nOften simply referred to as 'standardization'.",
    code: "@inline\ndef sample_zscore_normalization[R][x...] = (R[x...] - mean[R]) / sample_stddev[R]",
    children: [],
  },
  {
    type: "definition",
    name: "unit_normalization",
    docstring:
      "    unit_normalization[R]\n\nUnit vector normalization: $x_n = x_n / ( Σ (x^2) ) ^ {0.5}$",
    code: "@inline\ndef unit_normalization[R][x...] = R[x...] / sqrt[sum[squared[R]]]",
    children: [],
  },
  {
    type: "definition",
    name: "mse",
    docstring: "    mse[YHAT, Y]\n\nMean squared error (MSE, L2)",
    code: "@inline\ndef mse[YHAT, Y] = Σ[x... : (Y[x...] - YHAT[x...]) ^ 2] / count[Y]",
    children: [],
  },
  {
    type: "definition",
    name: "rmse",
    docstring: "    rmse[YHAT, Y]\n\nRoot mean square error (RMSE)",
    code: "@inline\ndef rmse[YHAT,Y] = sqrt[mse[YHAT,Y]]",
    children: [],
  },
  {
    type: "definition",
    name: "mae",
    docstring: "    mae[YHAT, Y]\n\nMean absolute error (MAE, L1)",
    code: "@inline\ndef mae[YHAT,Y] = mean[x... : abs[Y[x...] - YHAT[x...]]]",
    children: [],
  },
  {
    type: "definition",
    name: "enumerate",
    docstring:
      "    enumerate[R]\n\nEnumerate a relation.\n\n`enumerate` takes a relation `R(xs...)` and produces a relation `R(i, xs...)` where the first element of each tuple (`i`) is one of a series of consecutive `Int64` indexes starting at 1.\n\nThe relation should have a fixed arity. Otherwise the result is empty.\n\nNo guarantees are made regarding the order of indexes.\n\nExample:\n```rel\ndef sample = 'a'\ndef output = enumerate[sample]\n(1, 'a')\n\ndef sample = {'a'; 'b'; 'c'}\ndef output = enumerate[sample]\n(1, 'a')\n(2, 'b')\n(3, 'c')\n```\n\nJust as in to aggregations, it is possible to separately enumerate per group. In the following\nexample, the enumeration is grouped by free variable `g`.\n```rel\ndef sample = {(:g, 'a'); (:g, 'b'); (:g, 'c'); (:h, 'd'); (:h, 'e'); (:h, 'f')}\ndef output = x: enumerate[sample[x]]\n(:g, 1, 'a')\n(:g, 2, 'b')\n(:g, 3, 'c')\n(:h, 1, 'd')\n(:h, 2, 'e')\n(:h, 3, 'f')\n```",
    code: "@inline\ndef enumerate = rel_primitive_sort",
    children: [],
  },
  {
    type: "definition",
    name: "sort",
    docstring:
      "    sort[R]\n\nSort a relation.\n\n`sort` takes a relation `R(xs...)` and produces a relation `R(i, xs...)` where `i` is an\n`Int64` index starting at `1`. The index indicates the ordering of the tuples of `R`.\n\nThe relation `R` could have heterogenous arities.\n\nThe ordering is the native sort order of values in the system and cannot be customized\nwith a comparator. It is possible though to transform the input or output of sort to\nachieve a different sort order (see `reverse_sort` for an example).\n\nExample:\n```rel\ndef sample = 'a'\ndef output = sort[sample]\n(1, 'a')\n\ndef sample = {'a'; 'b'; 'c'}\ndef output = sort[sample]\n(1, 'a')\n(2, 'b')\n(3, 'c')\n\ndef sample = {1; 3; 2; (1, 3); (5, 1); (1, 10)}\ndef sorted = sort[sample]\ndef output = a, b, c : sorted(a, b, c) and a >= 4\n(4, 1, 3)\n(5, 1, 10)\n(6, 5, 1)\n```\n\nSimilar to aggregations, it is possible to separately sort per group. In the following\nexample, the sort is grouped by free variable `g`.\n```rel\ndef sample = {(:g, 'a'); (:g, 'b'); (:g, 'c'); (:h, 'd'); (:h, 'e'); (:h, 'f')}\ndef output = x: sort[sample[x]]\n(:g, 1, 'a')\n(:g, 2, 'b')\n(:g, 3, 'c')\n(:h, 1, 'd')\n(:h, 2, 'e')\n(:h, 3, 'f')\n```",
    code: "@inline\ndef sort = rel_primitive_sort",
    children: [],
  },
  {
    type: "definition",
    name: "reverse_sort",
    docstring:
      "    reverse_sort[R]\n\nReverse Sort\n\nLike `sort`, except the ordering is reversed.\n\nExample:\n```rel\ndef sample = {'a'; 'b'; 'c'}\ndef output = reverse_sort[sample]\n(1, 'c')\n(2, 'b')\n(3, 'a')\n\ndef sample = {(:g, 'a'); (:g, 'b'); (:g, 'c'); (:h, 'd'); (:h, 'e'); (:h, 'f')}\ndef output = x: reverse_sort[sample[x]]\n(:g, 1, 'c')\n(:g, 2, 'b')\n(:g, 3, 'a')\n(:h, 1, 'f')\n(:h, 2, 'e')\n(:h, 3, 'd')\n```",
    code: "@inline\ndef reverse_sort[R](ri, args...) =\n    sort[R](i, args...) and\n    ri = count[R] - i + 1\n    from i",
    children: [],
  },
  {
    type: "definition",
    name: "docstring",
    docstring:
      '    docstring[:R]\n\nThe docstring of a relation as a string.\n\nExample:\n```rel\ndoc"The number 0." def zero = 0\ndef output = docstring[:zero]\n"The number 0."\n```',
    code: "@inline\ndef docstring = rel_primitive_docstring",
    children: [],
  },
  {
    type: "definition",
    name: "random_uint128",
    docstring:
      "    random_uint128\n\nRandom number generated using the random device. It is an unsigned 128-bit integer.\n\nA single random number is generated using the random device of the operating system for\nevery transaction. Within the transaction, the random number does not change. The random\nnumber can be used as the seed of a pseudo-random number generator.\n\nExamples:\n```rel\ndef output = random_uint128\n(0x648fa1de9056c1c7de7fc61bc138f5a8,)\n```\n\nPlease note that random numbers need to be used with caution in views that need to be\nmaterialized or even incrementally maintained. If a view depends on a random number, then it\nneeds to be recomputed every time the view is needed because the random number changes with\nevery transaction and the view is always be consistent with its inputs.\n\nIf a random seed should not change with every transaction, then the state of a seed should\nbe managed explicitly as an EDB. For example, a seed uses for a PRNG can be initialized in\none transaction and then the same value is used from that point. In this way, materialized\nviews involving random numbers can be reused.",
    code: "@inline\ndef random_uint128 = rel_primitive_transaction_edb[:txn_random_uint128]",
    children: [],
  },
  {
    type: "definition",
    name: "random_uint64",
    docstring:
      "    random_uint64\n\nRandom number generated using the random device. It is an unsigned 64-bit integer.\n\nThis is a truncation of `random_uint128` to the lower 64 bits. It does not provide an\nadditional source of random numbers.\n\nPlease check out the documentation for `random_uint128` to get more information about how to\nuse random numbers in various situations.\n\nExample:\n```rel\ndef output = random_uint64\n(0xde7fc61bc138f5a8,)\n```",
    code: "@inline\ndef random_uint64 = uint128_uint64_truncate[random_uint128]",
    children: [],
  },
  {
    type: "definition",
    name: "random_mersenne_twister",
    docstring:
      "    random_mersenne_twister[seed, R]\n\nGenerates a pseudorandom number for every tuple in `R` using the Mersenne Twister PRNG.\n\n`random_mersenne_twister` takes a relation `R(xs...)` and produces a relation with the\ntuples `(xs..., r)` where `r` is a pseudorandom number generated by using the Mersenne\nTwister algorithm with the given `seed`. The value `r` is a Float64 in the range of [0, 1).\n\nThe seed is required to be a number convertible to an unsigned 128-bit integer (`UInt128`)\nor a `DateTime`. For a seed `dt` of type `DateTime` the value of `epoch_milliseconds[dt]` is\nused as seed.\n\nPlease note that if `seed` has more than one value, then the smallest value in `seed` will\nbe used as the seed (according to the native sort order that is used by `sort`). If `seed`\nis empty, then the result is empty.\n\nExample:\n```rel\ndef output = random_mersenne_twister[0, true]\n(0.8236475079774124,)\n\ndef output = random_mersenne_twister[random_uint128, 'a']\n('a', 0.590845)\n\ndef sample = {'a'; 'b'; 'c'}\ndef output = random_mersenne_twister[random_uint128, sample]\n('a', 0.590845)\n('b', 0.766797)\n('c', 0.566237)\n\ndef output = random_mersenne_twister[datetime_now, true]\n(0.09946255273771532,)\n```",
    code: "@inline\ndef random_mersenne_twister[SEED, R] =\n    rel_primitive_mersenne_twister[\n        // We specifically need a single value in the SEED, which is why we take the top-1.\n        // We need to take the conjunction with `R` because otherwise we may not get the\n        // same number of groups, which is not supported by the foreign function\n        // implementation.\n        (_internal_convert_seed[top[1, SEED, 1]], exists(R)),\n        // The restriction to the SEED is needed to make sure that the SEED is not empty for\n        // the current group. This is a limitation in the implementation of the foreign\n        // function.\n        (R, exists(_internal_convert_seed[top[1, SEED, 1]]))]\n\n@inline\ndef _internal_convert_seed[x in Number] = uint128[x]\n\n@inline\ndef _internal_convert_seed[x in DateTime] = uint128[epoch_milliseconds[x]]",
    children: [],
  },
  {
    type: "definition",
    name: "random_threefry_uint64",
    docstring:
      "    random_threefry_uint64[key1, key2]\n\nGenerates a pseudorandom number of type `UInt64` using the Threefry algorithm.\n\nThe Threefry algorithm depends on two keys: `key1` and `key2` of type `UInt64` or `Int64`.\nOne key can be used as the seed. The other key can be used as the stream position.\nWhich key is used for what is up to the user.\n\nNote that the output of `random_threefry_uint64` can be used as a key again in a subsequent call.\nThis capability allows the user to start a new random sequence from a previous sequence without\nthe need to track which keys have already been used.\n\n**Examples:**\n\nGetting a single random `UInt64` number:\n\n```rel\ndef output = random_threefry_uint64[1234, 1]\n0xbf025a77543cc31d\n```\n\nGenerating a sequence of random `UInt64` numbers:\n\n```rel\ndef output = random_threefry_uint64[1234, i] for i in range[1, 3, 1]\n(1, 0xbf025a77543cc31d)\n(2, 0xe532e65f2dc0c673)\n(3, 0x1bb25070549d29e7)\n```\n\nGenerating two sequences of random `UInt64` numbers by creating a new seed from the previous seed:\n\n```rel\ndef seed1 = random_threefry_uint64[1234, 0]\ndef seed2 = random_threefry_uint64[seed1, 0]\n\ndef output:one = random_threefry_uint64[seed1, i] for i in range[1, 3, 1]\ndef output:two = random_threefry_uint64[seed2, i] for i in range[1, 3, 1]\n(:one, 1, 0x2ca4bc02da81f726)\n(:one, 2, 0x12898ddf6262c27b)\n(:one, 3, 0xd606d09ded02d4dd)\n(:two, 1, 0x48879dd755a393be)\n(:two, 2, 0xc5683a27c1e876a7)\n(:two, 3, 0xfdb025894557c350)\n```",
    code: "@inline\ndef random_threefry_uint64 = rel_primitive_threefry",
    children: [],
  },
  {
    type: "definition",
    name: "random_threefry_float64",
    docstring:
      "    random_threefry_float64[key1, key2]\n\nGenerates a pseudorandom number of type `Float64` between 0.0 and 1.0 using the Threefry algorithm.\n\nThe Threefry algorithm depends on two keys: `key1` and `key2` of type `UInt64` or `Int64`.\nOne key can be used as the seed. The other key can be used as the stream position.\nWhich key is used for what is up to the user.\n\n\n**Examples:**\n\nGetting a single random `Float64` number:\n\n```rel\ndef output = random_threefry_float64[1234, 1]\n0.14708645730224323\n```\n\nGenerating a sequence of random `Float64` numbers using a user-specific seed:\n\n```rel\ndef output = random_threefry_float64[1234, i] for i in range[1, 3, 1]\n(1, 0.14708645730224323)\n(2, 0.18124311325337028)\n(3, 0.14463837673485513)\n```\n\nUsing a randomly generated (but deterministic) seed via `random_threefry_uint64`:\n\n```rel\ndef seed = random_threefry_uint64[1234, 0]\n\ndef output = random_threefry_float64[seed, i] for i in range[1, 3, 1]\n(1, 0.2959011588531637)\n(2, 0.5971368640131505)\n(3, 0.4259318598026802)\n```\n\nGenerating a random `Float64` number from the indeterministic random seed `random_uint64`:\n\n```rel\ndef output = random_threefry_float64[random_uint64, 0]\n```",
    code: "@inline\ndef random_threefry_float64[key1, key2] = rel_primitive_threefry[key1, key2] . rel_primitive_threefry_uniform",
    children: [],
  },
  {
    type: "definition",
    name: "auto_number",
    docstring:
      "    auto_number[R]\n\n## DEPRECATED\nThis function is deprecated and should be avoided. It will be removed soon.\n\nAutoNumber a relation.\n\n`auto_number` takes a relation `R(xs...)` and produces a relation `R(xs..., i)` where `i`\nis a distinct `AutoNumberValue` index.\n\nNote that `auto_number` can give different results each time it is called.\n\nExample:\n```rel\ndef sample = 'a'\ndef output = auto_number[sample]\n('a', AutoNumberValue(0x12))\n\ndef sample = {'a'; 'b'; 'c'}\ndef output = auto_number[sample]\n('a', AutoNumberValue(0x132))\n('b', AutoNumberValue(0x133))\n('c', AutoNumberValue(0x134))\n```",
    code: "@inline\ndef auto_number = rel_primitive_auto_number",
    children: [],
  },
  {
    type: "definition",
    name: "hash128",
    docstring:
      "    hash128[R]\n\nHash128 each of the tuples in a relation.\n\n`hash128` takes a relation `R(xs...)` and produces a relation `R(xs..., i)` where `i`\nis a `HashValue` index. The index indicates the hash128 of each tuple of `R`.\n\nExample:\n```rel\ndef output = hash128['a']\n('a', HashValue(0xbd1defa3be4617e0))\n\ndef sample = {'a'; 'b'; 'c'}\ndef output = hash128[sample]\n('a', HashValue(0xbd1defa3be4617e0))\n('b', HashValue(0x2423a34d925fc9ed))\n('c', HashValue(0xd2cffd2ea6c73a7))\n```",
    code: "@inline\ndef hash128 = rel_primitive_hash",
    children: [],
  },
  {
    type: "definition",
    name: "hash",
    docstring: "    hash[R]\n\nsee `hash128`",
    code: "@inline\ndef hash = hash128",
    children: [],
  },
  {
    type: "definition",
    name: "uint128_hash_value_convert",
    docstring:
      "    uint128_hash_value_convert[v]\n\nConvert a provided UInt128 value `v` to the HashValue type.\nThis is an internal-facing function, used for the implementation of hashing.",
    code: "@inline\ndef uint128_hash_value_convert[v] = rel_primitive_uint128_hash_value_convert[v]",
    children: [],
  },
  {
    type: "definition",
    name: "hash_value_uint128_convert",
    docstring:
      "    hash_value_uint128_convert[v]\n\nConvert a HashValue `v` to UInt128.",
    code: "@inline\ndef hash_value_uint128_convert[v] = rel_primitive_hash_value_uint128_convert[v]",
    children: [],
  },
  {
    type: "definition",
    name: "murmurhash3f_with_seed",
    docstring:
      "    murmurhash3f_with_seed[seed in (Int64 ∪ UInt128), key]\n\nHash `key` with `seed` via the MurmurHash3F algorithm, and yield the result as a `UInt128`.\n\nThe `key` may be any singleton value supported in Rel, (e.g.  `[U]Int{8,16,32,64,128}`,\n`Float{16,32,64}`, `Char`, `String`, `RelName`, `FilePos`, `Missing`, ...).\n\nThe `seed` must be a value in `(Int64 ∪ UInt128)`.\n\nNote that the standard specification for MurmurHash3F does not include 128-bit seeds, so\nthe result of hashing with a 128-bit seed will be different than a hash with the same value\nstored in a smaller integer type (i.e. hashing with the seeds `uint64[1]` and `uint128[1]`\nwill result in different hashes).\n\nThis function is an implementation (in Julia) of the reference implementation of\nMurmurHash3F, i.e. MurmurHash3_x64_128. The original can be retrieved via:\n\n   https://github.com/aappleby/smhasher/blob/\n       61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash3.cpp\n\nThe reference implementation was written by Austin Appleby and made public domain.\n\nNote that this implementation departs from the standard, in order to provide different\nhashes for byte-identical values of different types. While this implementation's internals\nshould produce byte-identical results to the reference implementation, the primary\nentrypoint here, (`murmurhash3f[seed, key]`) typically will not: To distinguish\nbyte-identical values of different types, this function mixes type information into seeds\nprior to hashing.\n\nAlso note that the reference implementation supports only `UInt32` `seed`s; for such\n`seed`s, this implementation's internals should provide byte-identical results.\nBut this implementation accepts `seed`s up to and including 128-bit integer types.\n(For `UInt32` `seed`s, the reference implementation initializes `h1`/`h2`,\nthe two `UInt64`s in which it accumulates/mixes the digest, with copies of `seed`.\nThis implementation does the same for `UInt32` `seed`s, and also for all other\n`seed` types that are less than or equal to 64 bits. For 128-bit `seed`s, this implementation\ninitializes `h1` with the `seed`'s low bits and `h2` with the `seed`'s high bits.)\n\n# Examples\n```rel\n// Without a seed\nmurmurhash3f[\"cat\"] = 0x37322aa78b4b4ef4816da65505e8efaa\n// With a seed\nmurmurhash3f_with_seed[8675309, \"cat\"] = 0x9fd1d18093ba94b6f454b48e58011643\nmurmurhash3f_with_seed[8675309, :bunny] = 0x56f800aed5ff3b7300ace61c691e7568\n\n// byte-identical values of different types hash differently\nmurmurhash3f[0x01] = 0x6ed3439777f613f7df39df0849d45e09\nmurmurhash3f[1] = 0x9116cd3f0a651c49f1674100935b29bf\n```",
    code: "@inline\ndef murmurhash3f_with_seed[seed, v] = rel_primitive_murmurhash3f_with_seed[seed, v]",
    children: [],
  },
  {
    type: "definition",
    name: "murmurhash3f",
    docstring:
      "    murmurhash3f[v]\n\nHash `v` according to the MurmurHash3f algorithm with the default seed `0`,\nas a UInt128.\n\nEquivalent to `murmurhash3f_with_seed[0, v]`.",
    code: "@inline\ndef murmurhash3f[v] = murmurhash3f_with_seed[int64[0], v]",
    children: [],
  },
  {
    type: "definition",
    name: "pack",
    docstring:
      "    pack(x₁, ..., xₙ, v)\n\nCreates a packed structure `v` storing the values `(x₁, ..., xₙ)` in sequence.\n\n`pack` cannot be used with point-free syntax.\n\nDirect usage of `pack` should be avoided, as it serves primarily as a low-level\ninterface for value types.",
    code: "@inline\ndef pack = rel_primitive_pack_logical",
    children: [],
  },
  {
    type: "definition",
    name: "unpack",
    docstring:
      "    unpack(v, x₁, ..., xₙ)\n\nUnpacks a packed structure `v` into its arguments `x₁, ..., xₙ`.\n\n`unpack` cannot be used with point-free syntax.\n\nDirect usage of `unpack` should be avoided, as it serves primarily as a low-level\ninterface for value types.",
    code: "@inline\ndef unpack(v, xs...) = rel_primitive_pack_logical(xs..., v)",
    children: [],
  },
  {
    type: "definition",
    name: "top",
    docstring:
      "    top[k, R]\n\nSelect the top `k` facts of relation `R` according to the sort order of R.\n\n`top` is `sort` restricted to first `k` tuples. `top` takes a relation `R(xs...)` and\nproduces a relation `R(i, xs...)` where `i` is an `Int64` index starting at `1`. The\nindex indicates the ordering of the tuples of `R`.\n\nIf `k` is bigger than number of tuples in the relation `R`, then `top[k,R]` is the sorted relation\nitself. This means that the cardinality is the minimum of `k` and the cardinality of `R`.\n\nExample:\n```rel\ndef output = top[2, {'a'; 'b'; 'c'; 'd'}]\n(1, 'a')\n(2, 'b')\n```\n\nNote:\nCurrently `top[k, R]` only supports groupbys in the `R`-expression but not in the `k`-expression.\nFor example, the following is supported:\n```rel\ndef output[g] = top[K, R[g]]  // `g` here is a groupby for `R`\n```\nHowever the following is NOT supported:\n```rel\ndef output[g] = top[K[g], R]  // `g` here is a groupby for `K`\n```",
    code: "@inline\ndef top[K, R] = rel_primitive_top[R, K]",
    children: [],
  },
  {
    type: "definition",
    name: "bottom",
    docstring:
      "    bottom[k, R]\n\nSelect the bottom `k` facts of relation `R` according to the sort order of R.\n\n`bottom` is `reverse_sort` (which sorts highest to lowest) restricted to the first `k` facts.\n\nExample:\n```rel\ndef output =  bottom[2, {'a'; 'b'; 'c'; 'd'}]\n(1, 'd')\n(2, 'c')\n```",
    code: "@inline\ndef bottom[k, R] =\n    reverse_sort[R][i] for i where i <= k",
    children: [],
  },
  {
    type: "definition",
    name: "percentile_nearest",
    docstring:
      "    percentile_nearest[R, p]\n\nSelect the element of `R` corresponding to the p-th percentile.\n\nThe p-th percentile is the smallest value in the list such that no more than `p` percent of\nthe data is strictly less than the value and at least `p` percent of the data is less than\nor equal to that value (nearest-rank method in https://en.wikipedia.org/wiki/Percentile).\nThis function computes the p-th percentile based on ranking the last argument of `R`.\n\nNote that `percentile_nearest` is not defined for `p <= 0` or `p > 100`.\n\nExample, here 33% of the values are strictly less than 16, and 66% of the values are less\nthan or equal to 16, so the 60-th percentile is 16:\n```rel\ndef output = percentile_nearest[{(1, 12); (2, 24); (3, 16)}, 60]\n16\n```",
    code: "@inline\ndef percentile_nearest[R, p] =\n    // we need to sort[y, x...] instead of sort[last[R]] to handle duplicates properly\n    first[(sort[y, x...: R(x..., y)][i] from i\n        where i = float_int_convert[ceil[(p / 100.0) * count[R]]])]",
    children: [],
  },
  {
    type: "definition",
    name: "percentile",
    docstring:
      "    percentile[R, p]\n\nSelect the element of `R` corresponding to the p-th percentile, computed with linear\ninterpolation.\n\nIf the p-th percentile does not correspond to a single element, then\n`percentile_continuous` computes a weighted average of the two values surrounding the\np-th percentile.\n\nThere are a number of different approaches for computing linearly interpolated percentiles.\nHere, the rank of the percentile is computed by `x = p(N - 1) + 1`, which corresponds to\nthe `C = 1` variant in https://en.wikipedia.org/wiki/Percentile. This is also the approach\nused in Julia's libraries and NumPy.\n\nNote that `percentile` is not defined for `p <= 0` or `p > 100`.\n\nExample:\n```rel\ndef output = percentile[{(1, 12); (2, 24); (3, 16)}, 60]\n17.6\n```",
    code: "@inline\ndef percentile[R, p] = value :\n    // index is a float value, we multiply by count[R] - 1 first rather than divide by\n    // 100.0 first to avoid imprecision\n    index = (p * (count[R] - 1.0)) / 100.0 + 1.0 and\n\n    // compute the lower and upper bounds surrounding the value for the p-th percentile\n    value = sum[i, s:\n        // the value at index i contributes (1 - abs[i - index]) proportion of the final\n        // percentile\n        s = v * (1 - abs[i - index]) and\n\n        // sort[y, x...] instead of sort[last[R]] to handle duplicate values\n        sort[y, x...: R(x..., y)](i, v, rest...) and\n\n        // only for the values surrounding index\n        index - 1.0 <= 1.0 * i <= index + 1.0\n        from v, rest...\n    ]\n    from index",
    children: [],
  },
  {
    type: "definition",
    name: "median",
    docstring:
      "    median[R]\n\nThe median of `R` according to the sort order of the last element. If the median\nindex is between two values, then `median` takes the mean of the middle two values.\n\nExample:\n```rel\ndef output = median[{(1, 12); (2, 16); (3, 24)}]\n16\n```",
    code: "@inline\ndef median[R] = percentile[R, 50]",
    children: [],
  },
  {
    type: "definition",
    name: "describe",
    docstring:
      '    describe[R]\n\nA summary of statistics for a dataset `R`. `R` should be a relation given in the form\n`R(:feature_name, keys..., value)`. For example, data loaded using `0`.\n\nFor each feature in the dataset, `describe` computes a set of statistics depending on the\ndata type of that feature.\n\nFor numerical data, `describe` computes the count, mean, standard deviation, minimum, 25th,\n50th, 75th percentiles, and maximum for that feature.\n\nFor non-numerical data, `describe` computes the count, unique count, mode, and mode\nfrequency. It will also compute maximum and minimum values if the data is sortable.\n\nIf a dataset has multiple data types, it will print the numerical stats for the numerical\nsubset, and non-numerical stats for the non-numerical subset of the data.\n\nFor example, given a dataset `R` in the form (produced by the CSV loader):\n```rel\nR = {\n(:date, FilePos(29), 2020-01-01);\n(:date, FilePos(60), 2020-02-02);\n(:date, FilePos(91), 2020-03-03);\n(:date, FilePos(127), 2020-04-04);\n(:price, FilePos(29), 12.5);\n(:price, FilePos(60), 14.25);\n(:price, FilePos(91), 11.0);\n(:price, FilePos(127), 12.25);\n(:quantity, FilePos(29), 2);\n(:quantity, FilePos(60), 4);\n(:quantity, FilePos(91), 4);\n(:quantity, FilePos(127), 3);\n(:cocktail, FilePos(29), "martini");\n(:cocktail, FilePos(60), "sazerac");\n(:cocktail, FilePos(91), "cosmopolitan");\n(:cocktail, FilePos(127), "bellini");\n}\n```\n\n`describe` will compute a summary:\n\nExample:\n```rel\ndef d = describe[R]\n\nd[:date]\n(:mode, Dates.Date("2020-01-01"))\n(:count, 4)\n(:mode_freq, 1)\n(:min, Dates.Date("2020-01-01"))\n(:max, Dates.Date("2020-04-04"))\n(:unique, 4)\n\nd[:quantity]\n(:max, 4)\n(:count, 4)\n(:std, 0.9574271077563381)\n(:min, 2)\n(:percentile75, 4.0)\n(:percentile25, 2.75)\n(:percentile50, 3.5)\n(:mean, 3.25)\n```\n\nA `describe_full` method is also provided, which does not aggregate over columns, and\ninstead computes the statistics for the whole dataset. However, `describe_full` may cause\nerrors if any unsortable data (e.g., symbols) exists in the relation.\n\nFor example, given the relation `R` defined above:\n\nExample:\n```rel\ndescribe_full[R]\n(:min, 32)\n(:unique, 3)\n(:mode, "a")\n(:std, 49.47186262580647)\n(:percentile25, 89.2175)\n(:min, 3.27)\n(:percentile50, 53.6)\n(:mean, 16.75)\n(:mean, 18.8675)\n(:count, 7)\n(:max, 72.2)\n(:max, 35)\n(:mode_freq, 1)\n```',
    code: "@inline\ndef describe[R] = column: describe_full[R[column]]\n\n\n// Stats for all types\n@inline def describe_full[R, :count] = count[R]\n@inline def describe_full[R, :min] = min[R]\n@inline def describe_full[R, :max] = max[R]\n\n// Stats for non-numeric types\n@inline def describe_full[R, :unique] = count[last[R :> (x: not Number(x))]]\n@inline def describe_full[R, :mode] = mode[R :> (x: not Number(x))]\n@inline def describe_full[R, :mode_freq] = max[frequency[R :> (x: not Number(x))]]\n\n// Stats for numeric types\n@inline def describe_full[R, :mean] = mean[R :> Number]\n@inline def describe_full[R, :std] = sample_stddev[R :> Number]\n@inline def describe_full[R, :percentile25] = percentile[(R :> Number), 25]\n@inline def describe_full[R, :percentile50] = median[R :> Number]\n@inline def describe_full[R, :percentile75] = percentile[(R :> Number), 75]",
    children: [],
  },
  {
    type: "definition",
    name: "rel:integration:load_partitioned_csv",
    docstring:
      '    rel:integration:load_partitioned_csv[URI_string]\n    rel:integration:load_partitioned_csv[R]\n\nThis is the main in-language API for loading partitioned CSV data into a single logical relation.\n\nFor detailed information on CSV loading, see load_csv.\n\nTo load a partitioned CSV, specify the following:\n- `:path`: The path to the first CSV partition,\ne.g. `"azure://storage.blob.core.net/container/file_1_of_24.csv"`. For more than one\npartition to get picked up, please note the naming schema: Name partitions using\n`[...]_m_of_n[...]`, where `m` is the current partition and `n` the total number of\npartitions (e.g. `mycsv_1_of_16.csv`, `mycsv_2_of_16.csv`, etc.).\n- Only the first partition should include header information.\n- Make sure all partitions are stored under the same `:path` prefix.\n\nThe resulting relation is of the form `(column_name, partition, line, value)`. `partition,\nline` uniquely identifies each row in the CSV.\n\nIf errors occur, the resulting relation is of the form `(:load_errors, partition, line,\nerror_column, raw_line)`.\n\n`partition` and `line` are UInt32s. To address them, please use `uint[32, <number>]`.\n\nIf only a single partition is provided or data is directly passed into the load, the\nresulting relation looks just like a `load_csv` call with an added `partition = uint[32, 1]`.',
    code: "@inline\ndef rel:integration:load_partitioned_csv = rel_primitive_load_part_csv",
    children: [],
  },
  {
    type: "definition",
    name: "load_csv",
    docstring:
      '    load_csv[URI_string]\n    load_csv[R]\n\nThis is the main in-language API for loading CSV data.\nTo load a CSV, either provide the string URI where the data resides,\nor a configuration relation `R` that describes the data load.\n\nIn the first case, all columns are imported with type `String`.\n\nThe relation `R`, which **must** be an EDB or an IDB but **not** a formula,\ncan configure the data load with the following options:\n\nRequired:\nEither\n- `:path`: The path to the CSV file, e.g. `"azure://storage.blob.core.net/container/file.csv"`\nOr\n- `:data`: A CSV formatted string value\n\nOptional:\n- `:schema`: A relation containing schema information.\n- `:syntax`: A relation containing syntax configuration.\n- `:integration`: A relation containing storage integration configuration.\n\nThe resulting relation is of the form `(column_name, file_position, value)`.\nThe `file_position` uniquely identifies each row in the CSV.\n\nExamples:\n\nLoading from literal string value:\n```rel\ndef config[:data] = \\"""\n    A,B,C\n    1,2,3\n    \\"""\n\ndef my_data = load_csv[config]\n```\n\nLoading a CSV file using a constant path:\n```rel\ndef y = load_csv["s3://mybucket/path/test.csv"]\ndef x = y[:A, _]\n```\n\nIn the example above, all values for column `:A` ("A" in the original file) are stored in `x`.\n\nThis can also be used to only load specific columns: `load_csv[path](:A, xs...)`.\n\nLoading a CSV file using a configuration relation `config`:\n```rel\ndef config[:path] = "/path/to/file.csv"\ndef config[:syntax, :delim] = \'_\'\ndef config[:syntax, :header] = (1, :A); (2, :B); (3, :C)\ndef config[:schema, :A] = "int"\ndef config[:schema, :B] = "string"\ndef config[:schema, :C] = "decimal(64,2)"\n\ndef csv = load_csv[config]\n```\n\nLastly, `load_csv` also supports error handling. If the CSV can\'t be read (e.g. if it is\nbadly formatted), parsing errors are stored in the `:load_errors` "column", which can be\naccessed the same way as any other column. It has the format `(:load_errors, file_position,\nerror_column, raw_line)`.\nNote : Since the arities of regular columns and the error relations differ, use the\n        splat operator ("...") to make your program as resilient as possible\n        (cf. examples above).',
    code: "@inline\ndef load_csv = rel_primitive_load_csv",
    children: [],
  },
  {
    type: "definition",
    name: "load_csv_row_wise",
    docstring:
      '    load_csv_row_wise[R]\n\nLoad a CSV file into a "row-wise" relation, with the position as the first argument, and the column name second.\nIncluded for backward compatibility, we now recommend using `load_csv` instead, which puts the column name first.',
    code: "@inline\ndef load_csv_row_wise[R][pos, col] = rel_primitive_load_csv[R][col, pos]",
    children: [],
  },
  {
    type: "definition",
    name: "filepos",
    docstring:
      "    filepos[v]\n\nCreates a FilePos representing position `v` in a file.",
    code: "@inline\ndef filepos = rel_primitive_filepos",
    children: [],
  },
  {
    type: "definition",
    name: "filepos_value",
    docstring:
      "    filepos_value[fp]\n\nRetrieves the numeric position represented by a FilePos.",
    code: "@inline\ndef filepos_value = rel_primitive_filepos_value",
    children: [],
  },
  {
    type: "definition",
    name: "lined_csv",
    docstring:
      "    lined_csv[R]\n\nGiven an already loaded CSV relation `R`, `lined_csv[R]` is a copy of the relation, but with the\nfile position field replaced with a line number. Only lines containing data, including\nerrors, are included in the numbering. Headers and empty lines are not counted. Thus,\nline number 1 is the first non-empty, non-header line of the CSV relation.\n\nExample:\n```rel\ndef csv = load_csv[config]\ndef csv_with_lines = lined_csv[csv]\n```",
    code: "@inline\ndef lined_csv[R](col, line, rest...) = sort[second[R]](line, pos) and R(col, pos, rest...) from pos",
    children: [],
  },
  {
    type: "definition",
    name: "export_csv",
    docstring:
      '    export_csv[R]\n\nThis is the main entry point to specify relations that should be\nexported to CSV. The payload relation `R` is expected to be a\nconfiguration relation mapping keys to relations.\n\nRequired keywords are:\n- `:path`: A string specifying the location of the file that is to be created.\n\nOptional keywords:\n- `:data`: A set of relations mapping a file position, which can be a\n           key of arbitrary length or type, to the corresponding\n           value. This is the data that will be exported.  We expect\n           the data relation to be of form: data(:COLUMN_NAME, pos,\n           val)\n- `:integration`: A relation containing storage integration configuration.\n- `:schema`: A relation containing schema information.\n- `:syntax`: A relation containing syntax configuration.\n\nExample using default CSV schema and syntax and no storage integration.\n```rel\ndef csv_data(:ORDER, pos, v) = ((1,1); (2,2); (3,3))(pos, v)\ndef csv_data(:LINEITEM, pos, v) = ((1,100); (2,101); (3,102))(pos, v)\ndef csv_data(:QUANTITY, pos, v) = ((1,2); (2,15); (3,42))(pos, v)\n\ndef export = export_csv[(:path, "/path/to/local/file.csv"); (:data, csv_data)]\n```\n\n\nExample using a custom CSV schema.\n```rel\ndef csv_syntax[:delim] = \';\'\ndef csv_syntax[:quotechar] = \'_\'\n\ndef export = export_csv[(:path, "/path/to/local/file.csv");\n                        (:data, csv_data);\n                        (:syntax, csv_syntax)]\n```\n\nExample using an Azure storage integration using a SAS token:\n```rel\ndef integration[:provider] = "azure"\ndef integration[:credentials, :azure_sas_token] = "<azure_sas_token>"\n\ndef export = export_csv[(:path, "azure://<account_name>.blob.core.windows.net/container/file.csv");\n                        (:data, csv_data);\n                        (:integration, integration)]\n```\n\nExample with compound keys:\n```rel\ndef csv_data(:ORDER, pos..., v) = (1, 2, 100; 2, 1, 40)(pos..., v)\ndef csv_data(:QUANTITY, pos..., v) = (1, 3, 10; 2, 3, 11; 3, 1, 12; 3, 2 ,13)(pos..., v)\n\ndef export = export_csv[(:data, csv_data; :path, "/path/to/data.csv")]\n```',
    code: '@inline\ndef export_csv[R](ys..., xs...) = (:envelope, (:payload, (\n        (:data, ((key..., col, val): R[:data](col, key..., val))) ; (x, y...: R(x, y...), (x != :data))\n    )(xs...); (:content_type, "text/csv")(xs...)))(ys...)\n\n@inline\ndef export_csv_row_wise[R](ys..., xs...) = (:envelope, (:payload, R(xs...); (:content_type, "text/csv")(xs...)))(ys...)',
    children: [],
  },
  {
    type: "definition",
    name: "csv_string",
    docstring:
      "    csv_string[R]\n\nThe string representation of relation that encodes as CSV using the configuration relation `R`.\n\nRequired keywords are:\n- `:data`: A set of relations mapping a file position, which can be a\n           key of arbitrary length or type, to the corresponding\n           value. This is the data that will be exported.  We expect\n           the data relation to be of form: data(:COLUMN_NAME, pos,\n           val)\nOptional keywords:\n- `:syntax`: A relation containing syntax configuration.\n\nExample using default CSV syntax\n```rel\ndef csv_data(:ORDER, pos, v) = ((1,1); (2,2); (3,3))(pos, v)\ndef csv_data(:LINEITEM, pos, v) = ((1,100); (2,101); (3,102))(pos, v)\ndef csv_data(:QUANTITY, pos, v) = ((1,2); (2,15); (3,42))(pos, v)\n\ndef config[:data] =  csv_data\ndef output = csv_string[config]\n```\n\nExample using custom CSV syntax\n```rel\ndef csv_data(:ORDER, pos, v) = ((1,1); (2,2); (3,3))(pos, v)\ndef csv_data(:LINEITEM, pos, v) = ((1,100); (2,101); (3,102))(pos, v)\ndef csv_data(:QUANTITY, pos, v) = ((1,2); (2,15); (3,42))(pos, v)\n\ndef config[:data] =  csv_data\ndef config[:syntax, :delim] = '\\\\t'\ndef config[:syntax, :quotechar] = '_'\n\ndef output = csv_string[config]\n```",
    code: "@inline\ndef csv_string = rel_primitive_csv_string",
    children: [],
  },
  {
    type: "definition",
    name: "load_json",
    docstring:
      '    load_json[filename_or_url]\n    load_json[R]\n\nThe relation `R`, which currently **needs** to either be an EDB or an\nIDB but **no** formula, can be used to configure the data load with\nthe following options:\n\nRequired:\nEither\n- `:path`: The path to the JSON file, e.g. `"azure://storage.blob.core.net/container/file.json"`\nOr\n- `:data`: A JSON formatted string value\n\nOptional:\n- `:integration`: A relation containing storage integration configuration.\n\nExamples:\n\nLoading literal JSON values:\n```rel\ndef data = \\"""{"name": "Anton", "age": 56}\\"""\ndef config[:data] = data\ndef json = load_json[config]\n```\n\nLoading a JSON file using a constant path:\n```rel\ndef y = load_json["test.json"]\n```\n\nLoading a JSON file using a configuration relation:\n```rel\ndef config[:path] = "/path/to/file.json"\ndef json = load_json[config]\n```\n\nLoading a JSON file from behind a private Azure container using a SAS token:\n```rel\ndef config[:path] = "azure://<account_name>.blob.core.windows.net/container/file.json"\ndef config[:integration, :provider] = "azure"\ndef config[:integration, :credentials, :azure_sas_token] = "<azure_sas_token>"\ndef json = load_json[config]\n```',
    code: "@inline\ndef load_json = rel_primitive_load_json",
    children: [],
  },
  {
    type: "definition",
    name: "load_jsonlines",
    docstring:
      '    load_jsonlines[filename_or_url]\n    load_jsonlines[R]\n\nParse and load a JSONLines file. JSONLines is a file format that considers each line of the\ntext file as a separate JSON object.\n\nExample:\n```rel\ndef data = \\"""{"name": "Anton", "age":56}\\n{"name": "Alex", "age":44}\\"""\ndef config[:data] = data\ndef output = load_jsonlines[config]\n\nic {equal(output[1,:name], "Anton")}\nic {equal(output[1,:age], 56)}\nic {equal(output[2,:name], "Alex")}\nic {equal(output[2,:age], 44)}\n```',
    code: "@inline\ndef load_jsonlines = rel_primitive_load_jsonlines",
    children: [],
  },
  {
    type: "definition",
    name: "parse_json",
    docstring:
      '    parse_json[json_string_value]\n\nParses a JSON value directly from a string.\n\nExample:\n```rel\ndef json = parse_json[\\"""{"name": "Anton", "age": 56}\\"""]\n```',
    code: "@inline\ndef parse_json = rel_primitive_parse_json",
    children: [],
  },
  {
    type: "definition",
    name: "json_string",
    docstring:
      '    json_string[json_relation]\n\nThe string representation of a relation that encodes JSON data.\n\nExample:\n```rel\ndef json_relation[:name] = "Amira"\ndef json_relation[:age] = 32\ndef json_relation[:height] = missing\ndef json_relation[:pets, :[], 1] = "dog"\ndef json_relation[:pets, :[], 2] = "rabbit"\n\ndef result = json_string[json_relation]\n```\n\nresults in the following JSON:\n\n```json\n{\n  "name": "Amira",\n  "age": 32,\n  "height": null,\n  "pets": [\n    "dog",\n    "rabbit"\n  ]\n}\n```\n',
    code: "@inline\ndef json_string = rel_primitive_json_string",
    children: [],
  },
  {
    type: "definition",
    name: "export_json",
    docstring:
      '    export_json[R]\n\nThis is the main entry point to specify relations that should be\nexported to JSON. The payload relation `R` is expected to be a\nconfiguration relation mapping keys to relations.\n\nRequired keywords are:\n- `:path`: A string specifying the location of the file that is to be created.\n\nOptional keywords:\n- `:data`: The relation(s) that should be exported.\n- `:integration`: A relation containing storage integration configuration.\n- `:indent`: Number of spaces to indent the resulting document. If not\n             present, we\'ll write a compact form.\n\nExample for a simple JSON object\n```rel\ndef json[:author] = "David Foster Wallace"\ndef json[:title, :name] = "Infinite Jest"\ndef json[:title, :isbn] =  "978-0-316-92004-9"\n\ndef export = export_json[(:path, "/path/to/file.json");\n                         (:data, json);\n                         (:indent, 2)]\n```\nThis results in the following JSON:\n\n```json\n{\n  "author": "David Foster Wallace",\n  "title": {\n    "name": "Infinite Jest",\n    "isbn": "10: 0316921173"\n  }\n}\n```\n\nSince authors usually write more than one book,\nwe\'ll make the `:title` path an array of objects.\n\nExamples:\n```rel\ndef json[:author] = "David Foster Wallace"\n\ndef titles = (1, "Infinite Jest", "978-0-316-92004-9");\n             (2, "The Pale King", "978-0-316-07423-0")\n\ndef json[:titles, :[], idx] = ((:name, name);\n                               (:isbn, isbn)\n                               from name, isbn where titles(idx, name, isbn))\n\ndef export = export_json[(:path, "/path/to/file.json");\n                         (:data, json);\n                         (:indent, 2)]\n```\nThe `:[]` marker, i.e. array marker, **needs** to be present when an array is to be correctly produced.\n\nThis yields the following output:\n\n```\n{\n  "author": "David Foster Wallace",\n  "titles": [\n    {\n      "name": "Infinite Jest",\n      "isbn": "978-0-316-92004-9"\n    },\n    {\n      "name": "The Pale King",\n      "isbn": "978-0-316-07423-0"\n    }\n  ]\n}\n```',
    code: '@inline\ndef export_json[R](ys..., xs...) =\n    (:envelope, (\n        (:payload, R(xs...));\n        (:content_type, "application/json")(xs...)\n    ))(ys...)',
    children: [],
  },
  {
    type: "definition",
    name: "load_binary",
    docstring:
      '    load_binary[URI_string]\n    load_binary[R]\n\nThis is the main in-language API for loading files as binary string.\nTo load a file, either provide the string URI where the data resides,\nor a configuration relation `R` that describes the data load.\n\nThe relation `R`, which **must** be an EDB or an IDB but **not** a formula,\ncan configure the data load with the following options:\n\nRequired:\n- `:path`: The path to the file, e.g. `"s3://storage.blob.core.net/container/image.jpeg"`.\n\nOptional:\n- `:integration`: A relation containing storage integration configuration.\n\nExample:\n\n```rel\n\ndef config[:path] = "azure://<account_name>.blob.core.windows.net/container/file.bin"\ndef config[:integration, :provider] = "azure"\ndef config[:integration, :credentials, :azure_sas_token] = "<azure_sas_token>"\n\ndef output = load_binary[config]\n```',
    code: "@inline\ndef load_binary = rel_primitive_load_binary",
    children: [],
  },
  {
    type: "definition",
    name: "starts_with",
    docstring:
      '    starts_with(s, prefix)\n\nTrue iff the specified string `s` begins with the given prefix `prefix`.\n\nExamples:\n```rel\nstarts_with("abc", "ab")   // true\nstarts_with("abc", "bc")   // false\nstarts_with("abc", "abcd") // false\nstarts_with("abc", "Ab")   // false\n```',
    code: "@inline\ndef starts_with = rel_primitive_starts_with",
    children: [],
  },
  {
    type: "definition",
    name: "ends_with",
    docstring:
      '    ends_with(s, suffix)\n\n\nTrue iff the given string, `s`, ends with the given suffix, `suffix`.\n\nThe suffix can be a string of characters or a single character.\n\nExample:\n```rel\nends_with("abc", "c")       // true\nends_with("abc", \'c\')       // true\nends_with("abc", "abc")     // true\nends_with("abc", "C")       // false\nends_with("abc", "ab")      // false\nends_with("abc", "abcd")    // false\n```',
    code: "@inline\ndef ends_with = rel_primitive_ends_with",
    children: [],
  },
  {
    type: "definition",
    name: "substring",
    docstring:
      '    substring[string, index1, index2]\n\nSubstring of a string, selecting characters in range `[index1:index2]` (both inclusive).\n\nThe index of the first character is 1.\n\nWhen `index1` and `index2` are out of bounds on the same end, or `index2` < `index1`,\nthe empty string is returned.\nOtherwise, both indexes are clamped in range.\n\nExample:\n```rel\nsubstring["abcd", 2, 3] = "bc"\nsubstring["abcd", 3, 2] = ""\nsubstring["中文例子", 2, 3] = "文例"\nsubstring["word", 0, 10] = "word"\n```',
    code: "@inline\ndef substring = rel_primitive_substring",
    children: [],
  },
  {
    type: "definition",
    name: "contains",
    docstring:
      '    contains(s, substring)\n\nTrue iff the second argument, `substring`, occurs as a substring in the first argument, `s`.\n\nExamples:\n```rel\ncontains("Rel is cool!", "Rel is cool!")        // true\ncontains("Rel is cool!", " is coo")             // true\ncontains("Rel is cool!", \'c\')                   // true\ncontains("Rel is cool!", \'C\')                   // false\n```',
    code: "@inline\ndef contains = rel_primitive_contains",
    children: [],
  },
  {
    type: "definition",
    name: "substring_bytes",
    docstring:
      '    substring_bytes[string, index1, index2]\n\nExtracts substring of a `string` between the byte range `[index1:index2]` (both inclusive).\nThe byte index starts with 1.\n\nWhen `index1` and `index2` are out of bounds on the same end, or `index2` < `index1`,\nthe empty string is returned.\nOtherwise, both indexes are clamped in range.\n\nUse `substring` to extract substrings by character indexes.\n\nExamples:\n```rel\nsubstring_bytes["abcd", 2, 3] = "bc"\nsubstring_bytes["abcd", 3, 2] = ""\nsubstring_bytes["word", 0, 10] = "word"\n```\n\nBe aware, non-ASCII characters require usually more than one byte per character.\n```rel\nsubstring_bytes["中文例子", 1, 6] = \\"""中文\\"""\n```\n',
    code: "@inline\ndef substring_bytes = rel_primitive_substring_bytes",
    children: [],
  },
  {
    type: "definition",
    name: "string_replace",
    docstring:
      '    string_replace[string, old_str, new_str]\n\nReplace a string or character in string with the specific string or character.\n\nExamples:\n```rel\nstring_replace["One Two Three", "One", "1"] = "1 Two Three"\nstring_replace["Rel", \'R\', \'r\'] = "rel"\n```',
    code: "@inline\ndef string_replace = rel_primitive_replace",
    children: [],
  },
  {
    type: "definition",
    name: "string_replace_multiple",
    docstring:
      '    string_replace_multiple[input, R]\n\n\nReplaces all occurrences of `old` string in `input` with the corresponding `new` string, for each tuple `(old, new)` in relation `R`.\n\nExamples:\n```rel\nstring_replace_multiple["One Two Three", {("One", "1"); ("Two", "2")}]\n// "1 2 Three"\n```\n```rel\nstring_replace_multiple["One Two Three", {(\'O\', \'o\'); (\'T\', \'t\')}]\n// "one two three"\n```\n\nThe behavior is undefined if `new` generates more occurrences of `old`.',
    code: "@inline\ndef string_replace_multiple[input, R] = rel_primitive_reduce[(x,y,z: z=string_replace[x,y,R[y]]), input, (x: R(x,_))]",
    children: [],
  },
  {
    type: "definition",
    name: "string_trim",
    docstring:
      '    string_trim[s]\n\nTo remove leading and tailing whitespaces in given string `s`\n\nExample:\n```rel\nstring_trim["  Good Day!!!  "] = "Good Day!!!"\n```',
    code: '@inline\ndef string_trim[s] = string_replace[s, regex_compile["^\\\\s+|\\\\s+$"], ""]',
    children: [],
  },
  {
    type: "definition",
    name: "regex_match",
    docstring:
      '    regex_match(regex, string)\n\nMatch string with a regular expression (string or pattern).\n\nNote that if the entire string needs to be matched, then a leading `^` and\ntrailing `$` are required in the regular expression.\n\nExample:\n```rel\nregex_match("^.*@.*$", "a@b")\n```',
    code: "@inline\ndef regex_match = rel_primitive_regex_match",
    children: [],
  },
  {
    type: "definition",
    name: "regex_match_all",
    docstring:
      '    regex_match_all[regex, input_string]\n\nAll the occurrences of a regular expression `regex` (string or pattern)\nin `string`, including all the matches and offsets.\n\nEach match is a pair `(i, s)` with the character index `i` where that matching string starts and\nthe matching string `s`.\n\nExample:\n```rel\nregex_match_all["(?<hour>\\\\\\\\d+):(?<minute>\\\\\\\\d+)",\n                "Appointment from  12:45 to 1:30"]\n```\nis equal to\n```rel\n{(19, "12:45"); (28, "1:30")}\n```',
    code: "@inline\ndef regex_match_all[re, str] = rel_primitive_regex_match_mv[regex_compile[re], str]",
    children: [],
  },
  {
    type: "definition",
    name: "capture_group_by_name",
    docstring:
      '    capture_group_by_name[regex, input_string, offset]\n\nA set of capture groups, each of the form `(name, substring)`, where `name` is the capture group name, and `substring`\nis the first regex match in `input_string`, starting at the character index specified by `offset`.\n`regex` can be a string or a pattern.\n\nOffsets (character indexes) start at 1.\n\nEach capture group should have a unique name.\n\nExample:\n```rel\ncapture_group_by_name["(?<hour>\\\\\\\\d+):(?<minute>\\\\\\\\d+)",\n    "Appointment from 12:45 to 1:30",\n    19]\n```\nis equal to\n```rel\n(("hour","12"), ("minute","45"))\n```',
    code: "@inline\ndef capture_group_by_name[re, str, offset](name, capture) =\n    exists( idx: rel_primitive_capture_grp[regex_compile[re], str, offset](idx, capture)\n            and rel_primitive_capture_names(regex_compile[re], idx, name))",
    children: [],
  },
  {
    type: "definition",
    name: "capture_group_by_index",
    docstring:
      '    capture_group_by_index[regex, input_string, offset]\n\nA set of capture groups, each of the form `(index, substring)`, where `index` is the capture group index, and `substring`\nis the first regex match in `input_string`, starting at the character index specified by `offset`.\n`regex` can be a string or a pattern.\n\nOffsets (character indexes) start at 1.\n\nExample:\n```rel\ncapture_group_by_index["(\\\\\\\\d+):(\\\\\\\\d+)",\n    "Appointment from  12:45 to 1:30",\n    19]\n```\nis equal to\n```rel\n{(1, "12"); (2, "45")}\n```',
    code: "@inline\ndef capture_group_by_index[re, str, offset](idx, capture) =\n    rel_primitive_capture_grp[regex_compile[re], str, offset](idx, capture)",
    children: [],
  },
  {
    type: "definition",
    name: "like_match",
    docstring:
      '    like_match(like_string, string)\n\nMatch string with a SQL "LIKE" pattern; case-sensitive.\n\nThe \'%\' character is a wildcard, and is not escapable.\n\nExample:\n```rel\nlike_match("\\\\%PROMO\\\\%", "this is a PROMOtion")\n()\nlike_match(raw"%PROMO%", "this is a PROMOtion")\n()\n```',
    code: "@inline\ndef like_match = rel_primitive_like_match",
    children: [],
  },
  {
    type: "definition",
    name: "regex_compile",
    docstring:
      '    regex_compile(regex, pattern)\n\nCompile a regular expression to a pattern. If `regex` is a pattern, rather than a string,\nthen `pattern = regex`.\n\nExample:\n```rel\ndef p = regex_compile["^.*@.*$"]\npattern_match(p, "foo@example.com")\n()\n```',
    code: "@inline\ndef regex_compile = rel_primitive_regex_compile",
    children: [],
  },
  {
    type: "definition",
    name: "pattern_match",
    docstring:
      '    pattern_match(pattern, string)\n\nMatch string with a pattern (pre-compiled regular expression)\n\nExample:\n```rel\ndef p = regex_compile["^.*@.*$"]\ndef output = pattern_match(p, "foo@example.com")\ntrue\n```',
    code: "@inline\ndef pattern_match = rel_primitive_pattern_match",
    children: [],
  },
  {
    type: "definition",
    name: "escape_regex_metachars",
    docstring:
      '    escape_regex_metachars(string, escaped_string)\n\nEscape the necessary regular expression metacharacters in `string` such that\n`escaped_string` can be used as a regular expression and have none of its\ncharacters interpreted as metacharacters.\n\nExample:\n```rel\ndef ere = escape_regex_metachars["."]\nregex_match_all(ere, "abc.123")\n```\nwill only give\n```rel\n{(4, ".")}\n```\nsince `.` is escaped and is not treated as a metacharacter.\n',
    code: '@inline\ndef escape_regex_metachars[s in String] =\n    string_replace_multiple[\n        string_replace[s, "\\\\", "\\\\\\\\"],\n        {mc:\n            concat["\\\\", mc],\n            {"."; "^"; "$"; "*"; "+"; "?"; "("; ")"; "["; "|"; "{"}(mc)\n        }\n    ]',
    children: [],
  },
  {
    type: "definition",
    name: "parse_int",
    docstring:
      '    parse_int[string]\n\nParse a string representation of an integer to a SignedInt[64]\n\nIs `false` (empty) if the string fails to parse as an integer.\n\nExample:\n```rel\nparse_int["123"] = 123\nempty(parse_int["hello"])\n```',
    code: "@inline\ndef parse_int = rel_primitive_parse_int",
    children: [],
  },
  {
    type: "definition",
    name: "parse_int128",
    docstring:
      '    parse_int128[string]\n\nParse a string representation of an integer to a SignedInt[128]\n\nIs `false` (empty) if the string fails to parse as an integer.\n\nExample:\n```rel\nparse_int128["9223372036854775808"] = 9223372036854775808\nempty(parse_int["hello"])\n```',
    code: "@inline\ndef parse_int128 = rel_primitive_parse_int128",
    children: [],
  },
  {
    type: "definition",
    name: "parse_float",
    docstring:
      '    parse_float[string]\n\nParse a string representation of a float to a Floating[64]\n\nNote that this currently does not consider a locale (decimal separator is always `.`)\n\nIs `false` (empty) if the string fails to parse as an integer.\n\nExamples:\n```rel\nparse_float["3.14"] = 3.14\nparse_float["3"] = 3.0\nempty(parse_int["hello"])\n```',
    code: "@inline\ndef parse_float = rel_primitive_parse_float",
    children: [],
  },
  {
    type: "definition",
    name: "parse_decimal",
    docstring:
      '    parse_decimal[bits, digits, string]\n\nParse a string representation of a fixed-point decimal number to a decimal[a,b]\n\nThe implementation does not consider a locale. The decimal separator is always `.` and\nthe thousands separator is always `,`. The thousands separator is optional.\n\nIf the string has more digits after the decimal point than supported by the `b`\nparameter, then the number is rounded to the nearest number.\n\nThis function is only defined for valid arguments. For invalid arguments it will be `false` (the empty relation, `{}`).\n\nExamples:\n```rel\nparse_decimal[64, 2, "3.14"]\nFixedDecimal{Int64,2}(3.14)\n\nparse_decimal[64, 1, "4.27"]\nFixedDecimal{Int64,1}(4.3)\n\nparse_decimal[64, 2, ""]\nFixedDecimal{Int64,2}(0.00)\n\nparse_decimal[64, 2, "1,234.567"]\nFixedDecimal{Int64,2}(1234.57)\n\nparse_decimal[64, 2, "invalid"]\n{}\n```',
    code: "@inline\ndef parse_decimal = rel_primitive_parse_decimal",
    children: [],
  },
  {
    type: "definition",
    name: "decimal_bit_length",
    docstring:
      '    decimal_bit_length[decimal]\n\nThe bit length of a fixed-point decimal number.\n\nExample:\n```rel\ndef g = parse_decimal[64, 2, "3.14"]\ndecimal_bit_length[g] = 64\n```',
    code: "@inline\ndef decimal_bit_length(x, y) = rel_primitive_decimal_type(x, y, _)",
    children: [],
  },
  {
    type: "definition",
    name: "decimal_precision",
    docstring:
      '    decimal_precision[decimal]\n\nThe precision of a fixed-point decimal number.\n\nExample:\n```rel\ndef g = parse_decimal[64, 2, "3.14"]\ndecimal_precision[g] = 2\n```',
    code: "@inline\ndef decimal_precision(x, y) = rel_primitive_decimal_type(x, _, y)",
    children: [],
  },
  {
    type: "definition",
    name: "parse_uuid",
    docstring:
      '    parse_uuid[str]\n\nParse a UUID string (in the standard 8-4-4-4-12 format) to a UInt128 value.\n\nExample:\n```rel\nparse_uuid["22b4a8a1-e548-4eeb-9270-60426d66a48e"] = 0x22b4a8a1e5484eeb927060426d66a48e\n```',
    code: "@inline\ndef parse_uuid = rel_primitive_parse_uuid",
    children: [],
  },
  {
    type: "definition",
    name: "uuid_string",
    docstring:
      '    uuid_string[v]\n\nConvert a UInt128 value to the standard UUID format\n\nExample:\n```rel\nuuid_string[0x22b4a8a1e5484eeb927060426d66a48e] = "22b4a8a1-e548-4eeb-9270-60426d66a48e"\n```',
    code: "@inline\ndef uuid_string[v in UInt128] = rel_primitive_uuid_string[v]\n\n@inline\ndef uuid_string[v in Hash] = rel_primitive_uuid_string[hash_value_uint128_convert[v]]",
    children: [],
  },
  {
    type: "definition",
    name: "concat",
    docstring:
      '    concat[val1, val2]\n\nString concatenation of two arbitrary values\n\nExample:\n```rel\nconcat["a", "b"] = "ab"\nconcat["a", \'b\'] = "ab"\nconcat[\'a\', "b"] = "ab"\nconcat[\'a\', \'b\'] = "ab"\nconcat["a_", 1] = "a_1"\nconcat[1, 3.14] = "13.14"\n```',
    code: "@inline\ndef concat[x, y] = rel_primitive_concat[string[x], string[y]]",
    children: [],
  },
  {
    type: "definition",
    name: "string_length",
    docstring:
      '    string_length[string]\n\n## DEPRECATED\nThis function is deprecated. Please prefer `num_chars[string]` or `num_bytes[string]`,\ndepending on your need.\n\nExample:\n```rel\nstring_length["foo"] = 3\n```',
    code: "@inline\ndef string_length = num_chars",
    children: [],
  },
  {
    type: "definition",
    name: "uppercase",
    docstring:
      "    uppercase[string_or_char]\n\nA string where all the characters are converted to uppercase. If a character is already uppercase or has no\nuppercase version, it remains unchanged.\n\nExample:\n```rel\ndef output = uppercase[\"aB1c\"]\n\"AB1C\"\ndef output = uppercase['â']\n'Â'\n```\n\n`uppercase` does not take a locale option and does not handle local-specific case mapping\nrules.",
    code: "@inline\ndef uppercase = rel_primitive_uppercase",
    children: [],
  },
  {
    type: "definition",
    name: "lowercase",
    docstring:
      "    lowercase[string_or_char]\n\nA string where all the characters are converted to lowercase. If a character is already lowercase or has no\nlowercase version, it remains unchanged.\n\nExample:\n```rel\ndef output = lowercase[\"aB1c\"]\n\"ab1c\"\ndef output = lowercase['Â']\n'â'\n```\n\n`lowercase` does not take a locale option and does not handle local-specific case mapping\nrules.",
    code: "@inline\ndef lowercase = rel_primitive_lowercase",
    children: [],
  },
  {
    type: "definition",
    name: "levenshtein",
    docstring:
      '    levenshtein[string1, string2]\n\nCalculate the Levenshtein distance between two strings.\n\nExample:\n```rel\nlevenshtein["kitten", "sitting"]\n3\n```',
    code: "@inline\ndef levenshtein = rel_primitive_levenshtein",
    children: [],
  },
  {
    type: "definition",
    name: "num_chars",
    docstring:
      '    num_chars[str]\n\nThe number of (Unicode) characters in a string, i.e. the length of the string.\n\nA character is also known as a "Code Point" in the Unicode specification.\n\nExample:\n```rel\nnum_chars["abcd"] = 4\nnum_chars["中文例子"] = 4\n```',
    code: "@inline\ndef num_chars = rel_primitive_num_chars",
    children: [],
  },
  {
    type: "definition",
    name: "char",
    docstring:
      '    char[str]\n    char[str, i]\n    char(str, i, c)\n\nIndexes into a string at (Int) position `i`, mapping each index `i` to the `i`-th character, `c`.\n\nSince this is indexed using character positions, the characters will always be\nwhole Unicode characters.\n\nA character is also known as a "Code Point" in the Unicode specification.\n\nBoth `i` and `c` can be optionally bound externally. When only `str` is bound, this is\nthe mapping from each character index to its corresponding character.\n\n### Examples:\n\nIndexing into a known character index:\n\n```rel\nchar["abcd", 2] = \'b\'\nchar["中文例子", 2] = \'文\'\n```\n\nAbstracting over the character index:\n\n```rel\nequal(char["中文"],\n        { 1, "中"; 2, "文" })\nequal((i : char["awesome", i](\'e\')), {3; 7})\n```\n',
    code: "@inline\ndef char[s](i, c) =\n    rel_primitive_char(s, i, c) and range[1, num_chars[s], 1](i)",
    children: [],
  },
  {
    type: "definition",
    name: "num_bytes",
    docstring:
      '    num_bytes[str]\n\nThe number of _bytes_ in a string value.\n\nIf a string contains Unicode characters, it\'s possible that some characters take up more\nthan one byte, so `num_bytes[str]` may be larger than `num_chars[str]`.\n\nExample:\n```rel\nnum_bytes["abcd"] = 4\nnum_bytes["中文例子"] = 12\n```',
    code: "@inline\ndef num_bytes = rel_primitive_num_bytes",
    children: [],
  },
  {
    type: "definition",
    name: "byte",
    docstring:
      '    byte[str]\n    byte[str, i]\n    byte(str, i, b)\n\nIndexes into a string at byte position `i`, mapping each position `i` to a byte `b`, as a UInt8 value.\n\nIf a string contains Unicode characters, the byte at index `i` might be only a partial character.\nBe careful with your indexing logic.\n\nBoth `i` and `b` can be optionally bound externally. When only `str` is bound, this is\nthe mapping from each index to its corresponding byte.\n\nExamples:\nIndexing into a known byte index:\n```rel\nbyte["abcd", 2] = 0x62\nbyte["中文例子", 2] = 0xb8\n```\nAbstracting over the byte index:\n```rel\nequal(byte["中文"],\n        { 1, 0xe4;\n          2, 0xb8;\n          3, 0xad;\n          4, 0xe6;\n          5, 0x96;\n          6, 0x87; })\nequal((i : byte["awesome", i](0x65)), {3; 7})\n```',
    code: "@inline\ndef byte[s](i, b) =\n    rel_primitive_byte(s, i, b) and range[1, num_bytes[s], 1](i)",
    children: [],
  },
  {
    type: "definition",
    name: "string",
    docstring:
      '    string[x]\n\nConvert ints, floats, dates, periods, to strings:\n\nExamples:\n```rel\nstring[1] = "1"\nstring[3.4] = "3.4"\nstring[unix_epoch] = "1970-01-01T00:00:00"\nstring[Hour[1]] = "1 hour"\nstring["a"] = "a"\nstring[:a] = "a"\n```',
    code: "@inline\ndef string = rel_primitive_string",
    children: [],
  },
  {
    type: "definition",
    name: "string_join",
    docstring:
      '    string_join[separator, R]\n\nConcatenate together all the String values in the second argument of the binary relation `R`,\nif non-empty, separated by the `separator` string, following the ordering provided by the\nInts in the first argument of R.\nIf R is empty, `string_join[sep, R]` is `false`.\n\n`R` is required to be a binary relation, containing only `(Int, String)` tuples, where the\nInt serves as the sort key for the concatenation. Otherwise, `string_join[sep, R]`\nis `false`. (Note: this restriction may be lifted in the future.)\n\nExample:\n```rel\nstring_join[", ", {(1, "a"); (2, "b"); (3, "c")}] = "a, b, c"\nstring_join[" ", {(1, "hello"); (2, "world")}] = "hello world"\nstring_join["->", sort[{"x"; "y"; "z"}]] = "x->y->z"\n```',
    code: "@inline\ndef string_join[sep, R] =\n    rel_primitive_reduce_noinit[_str_join2[sep], R],\n    // R is required to be a Binary relation with numeric keys to provide an ordering\n    R ⊆ (Int, String)\n\n// This helper function is reduced over the values in R, with the provided separator.\n@inline\ndef _str_join2[sep, a,b] = concat[concat[a, sep], b]",
    children: [],
  },
  {
    type: "definition",
    name: "string_split",
    docstring:
      '    string_split[delimiter, text]\n\nSplit the string `text` into the substrings delimited by `delimiter` (and the\nstart/end of `text`).\nThe expression `string_split[delimiter, string]` evaluates to a relation of the format\n`(index, sub_string)` where `index` is the substring\'s position of type `Int` and\n`sub_string` is the matched substring of type `String`.\n`delimiter` can be a `String` or a `Char`.\n\nExample:\n```rel\nstring_split[\'@\', "user@email.com"] = {(1, "user"); (2, "email.com")}\nstring_split[" ", "a b  c"] = {(1, "a"); (2, "b"); (3, ""); (4, "c")}\n```',
    code: "@inline\ndef string_split(dlm, text, i, sub_string) =\n    dlm_string = string[dlm] and\n    _delims(dlm_string, text, i, pos) and\n    _delims(dlm_string, text, i + 1, next_pos) and\n    substring[text, pos + num_chars[dlm_string], next_pos - 1](sub_string) and\n    {String; Char}(dlm)\n    from dlm_string, pos, next_pos\n\n// Helper gives us the positions of all delimeters in string `s`.\n@inline\ndef _delims[dlm in String, s in String] =\n    sort[\n        -num_chars[dlm] + 1;\n        first[regex_match_all[escape_regex_metachars[dlm], s]];\n        num_chars[s] + 1\n    ]",
    children: [],
  },
  {
    type: "definition",
    name: "encode_base16",
    docstring:
      '    encode_base16[input_str]\n\nEncodes the given string(`input_str`) to base16-encoded string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExamples:\n```\n    def output = encode_base16["Hello!"]\n    "48656C6C6F21"\n    def output = encode_base16["你好"]\n    "E4BDA0E5A5BD"\n```',
    code: "@inline\ndef encode_base16 = rel_primitive_base16_encode",
    children: [],
  },
  {
    type: "definition",
    name: "decode_base16",
    docstring:
      '    decode_base16[encoded_str]\n\nDecodes the base-16 encoded string to string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExample:\n```\n    def output = decode_base16["48656C6C6F21"]\n    "Hello!"\n    def output = decode_base16["E4BDA0E5A5BD"]\n    "你好"\n```',
    code: "@inline\ndef decode_base16 = rel_primitive_base16_decode",
    children: [],
  },
  {
    type: "definition",
    name: "encode_base32",
    docstring:
      '    encode_base32[input_str]\n\nEncodes the given string(`input_str`) to base32-encoded string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExample:\n```\n    def output = encode_base32["Hello!"]\n    "JBSWY3DPEE======"\n    def output = encode_base32["你好"]\n    "4S62BZNFXU======"\n```',
    code: "@inline\ndef encode_base32 = rel_primitive_base32_encode",
    children: [],
  },
  {
    type: "definition",
    name: "decode_base32",
    docstring:
      '    decode_base32[encoded_str]\n\nDecodes the base-32 encoded string to string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExample:\n```\n    def output = decode_base32["JBSWY3DPEE======"]\n    "Hello!"\n    def output = decode_base32["4S62BZNFXU======"]\n    "你好"\n```',
    code: "@inline\ndef decode_base32 = rel_primitive_base32_decode",
    children: [],
  },
  {
    type: "definition",
    name: "encode_base64",
    docstring:
      '    encode_base64[input_str]\n\nEncodes the given string(`input_str`) to base64-encoded string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExample:\n```\n    def output = encode_base64["Hello!"]\n    "SGVsbG8h"\n    def output = encode_base64["你好"]\n    "5L2g5aW9"\n```',
    code: "@inline\ndef encode_base64 = rel_primitive_base64_encode",
    children: [],
  },
  {
    type: "definition",
    name: "decode_base64",
    docstring:
      '    decode_base64[encoded_str]\n\nDecodes the base-64 encoded string to string, as per rfc4648 specifications.\n\nEncoding/decoding specifications are found at https://datatracker.ietf.org/doc/html/rfc4648.\n\nExample:\n```\n    def output = decode_base64["SGVsbG8h"]\n    "Hello!"\n    def output = decode_base64["5L2g5aW9"]\n    "你好"\n```',
    code: "@inline\ndef decode_base64 = rel_primitive_base64_decode",
    children: [],
  },
  {
    type: "definition",
    name: "parse_date",
    docstring:
      '    parse_date[d, format]\n\nParse Date.\n\nThis function is only defined for a valid combination of date string\n`d` and format string `format`, and invalid arguments will evaluate\nto `false` (the empty relation, `{}`).\n\nExamples:\n```rel\ndef output = parse_date["2018-06-12", "Y-m-d"]\n2018-06-12\n```\n\nFor details on the format parameter, see the [Julia documentation for `Dates.DateFormat`](https://docs.julialang.org/en/v1/stdlib/Dates/#Dates.DateFormat).\n',
    code: "@inline\ndef parse_date = rel_primitive_parse_date",
    children: [],
  },
  {
    type: "definition",
    name: "parse_datetime",
    docstring:
      '    parse_datetime[date_string, format]\n    parse_datetime(date_string, format, datetime)\n\nMaps a `(date_string, format)` pair, where `date_string` contains the datetime information in a String and `format` specifies the datetime format, to a Datetime value type holding the corresponding datetime information.\n\nThis function is only defined for a valid combination of date string\n`date_string` and format string `format`.\nInvalid arguments will evaluate\nto `false` (the empty relation, `{}`).\n\nExamples:\n```rel\ndef output = parse_datetime["2018-06-12 13:00 +00:00", "YYYY-mm-dd HH:MM zzzz"]\n//output> Dates.DateTime("2018-06-12T13:00:00")\n\ndef output = parse_datetime["2018-03-11 01:00 America/New_York", "Y-m-d H:M Z"]\n//output> Dates.DateTime("2018-03-11T06:00:00")\n```\nFor details on the supported date format specified in `format`, see the [Julia documentation for `Dates.DateFormat`](https://docs.julialang.org/en/v1/stdlib/Dates/#Dates.DateFormat).',
    code: "@inline\ndef parse_datetime = rel_primitive_parse_datetime",
    children: [],
  },
  {
    type: "definition",
    name: "format_date",
    docstring:
      '    format_date[d, format]\n\nA string where the Date `d` is formatted according to `format`.\n\nExample:\n```rel\ndef d = parse_date["2018-06-12", "Y-m-d"]\ndef output = format_date[d, "Y-mm-d"]\n"2018-06-12"\n```\nFor details on the format parameter, see the [Julia documentation for `Dates.DateFormat`](https://docs.julialang.org/en/v1/stdlib/Dates/#Dates.DateFormat).',
    code: "@inline\ndef format_date = rel_primitive_format_date",
    children: [],
  },
  {
    type: "definition",
    name: "format_datetime",
    docstring:
      '    format_datetime[dt, format, tz]\n\nFormat a DateTime `dt`, with timezone `tz`.\n\nExample:\n```rel\ndef format = "yyyy-mm-dd HH:MM ZZZ"\ndef dt = parse_datetime["2018-03-11 01:00 America/New_York", "Y-m-d H:M Z"]\ndef output = format_datetime[dt, format, "America/New_York"]\n"2018-03-11 01:00 EST"\n```\nFor details on the format parameter, see the [Julia documentation for `Dates.DateFormat`](https://docs.julialang.org/en/v1/stdlib/Dates/#Dates.DateFormat).',
    code: "@inline\ndef format_datetime = rel_primitive_format_datetime",
    children: [],
  },
  {
    type: "definition",
    name: "date_year",
    docstring:
      '    date_year[d]\n\nYear of a Date, as an integer.\n\nExample:\n```rel\ndate_year[parse_date["2020-05-22", "Y-m-d"]]\n2020\n\nYear[date_year[parse_date["2020-05-22", "Y-m-d"]]]\n(2020 years,)\n```',
    code: "@inline\ndef date_year = rel_primitive_date_year",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_year",
    docstring:
      '    datetime_year[dt, tz]\n\nYear of a DateTime `dt`, as an `Int`.\nNote that DateTime properties require a timezone `tz`.\n\nExamples:\n```rel\ndef dt = parse_datetime["2021-01-01 01:00:00", "Y-m-d H:M:S"]\ndatetime_year[dt, "Europe/Berlin"] = 2021\ndatetime_year[dt, "America/New_York"] = 2020\ndatetime_year[dt, "-03:00"] = 2020\n```',
    code: "@inline\ndef datetime_year = rel_primitive_datetime_year",
    children: [],
  },
  {
    type: "definition",
    name: "date_month",
    docstring:
      "    date_month[d]\n\nMonth of a Date, as an integer between 1 and 12.",
    code: "@inline\ndef date_month = rel_primitive_date_month",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_month",
    docstring:
      '    datetime_month[dt, tz]\n\nMonth of a DateTime, as an integer between 1 and 12.\n\nNote that DateTime properties require a timezone `tz`.\n\nExamples:\n```rel\ndef dt = parse_datetime["2021-01-01 01:00:00", "Y-m-d H:M:S"]\ndatetime_month[dt, "Europe/Berlin"] = 1\ndatetime_month[dt, "America/New_York"] = 12\ndatetime_month[dt, "-03:00"] = 12\n```',
    code: "@inline\ndef datetime_month = rel_primitive_datetime_month",
    children: [],
  },
  {
    type: "definition",
    name: "date_week",
    docstring:
      '    date_week[d]\n\nWeek of the year for a Date, as an integer, where the first week is the week that contains the first Thursday of the year.\nRanges between 1 and 53, inclusive.\n\nExample:\n```rel\nweek[parse_date["2005-01-01", "Y-m-d"]] = 53 // 53rd week of 2004.\nweek[parse_date["2001-01-01", "Y-m-d"]] = 1\n```',
    code: "@inline\ndef date_week = rel_primitive_date_week",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_week",
    docstring:
      "    datetime_week[dt, tz]\n\nWeek of the year for a DateTime `dt`, as an integer between 0 and 53 (see `date_week`).\n\nNote that DateTime properties require a timezone `tz`.",
    code: "@inline\ndef datetime_week = rel_primitive_datetime_week",
    children: [],
  },
  {
    type: "definition",
    name: "date_day",
    docstring:
      '    date_day[d]\n\nDay of the month for a Date, as an integer between 1 and 31, inclusive.\n\nExample:\n```rel\ndef d = parse_date["2014-10-31", "Y-m-d"]\ndate_day[d] = 31\n```',
    code: "@inline\ndef date_day = rel_primitive_date_day",
    children: [],
  },
  {
    type: "definition",
    name: "date_dayofweek",
    docstring:
      '    date_dayofweek[d]\n\nDay of the week for a date, as an integer between 1 and 7, where 1 is Monday and 7 is Sunday. (That is, `5` for `Friday`.)\n\nExample:\n```rel\ndef d = parse_date["2014-01-31", "Y-m-d"]\ndate_dayofweek[d] = 5\n```',
    code: "@inline\ndef date_dayofweek = rel_primitive_date_dayofweek",
    children: [],
  },
  {
    type: "definition",
    name: "date_dayname",
    docstring:
      '    date_dayname[d]\n\nName of week-day (a String, e.g., `Friday`)\n\nExample:\n```rel\ndef t = parse_date["2014-01-31", "Y-m-d"]\ndef output = date_dayname[t]\n"Friday"\n```',
    code: "@inline\ndef date_dayname = rel_primitive_date_dayname",
    children: [],
  },
  {
    type: "definition",
    name: "date_dayofweekofmonth",
    docstring:
      '    date_dayofweekofmonth[d]\n\nDay of week of month, as an integer (e.g. 2 for second Friday of the month, 1 for the first Tuesday).\n\nExample:\n```rel\ndef t = parse_date["2014-01-31", "Y-m-d"]\ndate_dayofweekofmonth[t] = 5 // fifth Friday of that month\n```',
    code: "@inline\ndef date_dayofweekofmonth = rel_primitive_date_dayofweekofmonth",
    children: [],
  },
  {
    type: "definition",
    name: "date_monthname",
    docstring:
      '    date_monthname[d]\n\nThe month name for date `d`, as a string.\n\nExample:\n```rel\ndef t = parse_date["2014-01-31", "Y-m-d"]\ndate_monthname[t] = "January"\n```',
    code: "@inline\ndef date_monthname = rel_primitive_date_monthname",
    children: [],
  },
  {
    type: "definition",
    name: "date_daysinmonth",
    docstring:
      '    date_daysinmonth[d]\n\nThe number of days in the month for date `d`\n\nExamples:\n```rel\ndef d1 = parse_date["2014-01-30", "Y-m-d"]\ndate_daysinmonth[t] = 31\ndef d2 = parse_date["2014-02-11", "Y-m-d"]\ndate_daysinmonth[d2] = 28\ndef d = parse_date["2016-02-11", "Y-m-d"]\ndate_daysinmonth[d] = 29\n```',
    code: "@inline\ndef date_daysinmonth = rel_primitive_date_daysinmonth",
    children: [],
  },
  {
    type: "definition",
    name: "date_isleapyear",
    docstring:
      '    date_isleapyear[d]\n\nTrue iff the year for date `d` is a leap year.\n\nExamples:\n```rel\ndef notleap = parse_date["2014-01-31", "Y-m-d"]\ndef leap = parse_date["2016-01-31", "Y-m-d"]\ndef output = date_isleapyear[notleap]\nfalse\ndef output = date_isleapyear[leap]\ntrue\n```',
    code: "@inline\ndef date_isleapyear = rel_primitive_date_isleapyear",
    children: [],
  },
  {
    type: "definition",
    name: "date_dayofyear",
    docstring:
      '    date_dayofyear[d]\n\nDay of year\n\nExample:\n```rel\ndef t = parse_date["2014-01-31", "Y-m-d"]\ndef output = date_dayofyear[t]\n31\n```',
    code: "@inline\ndef date_dayofyear = rel_primitive_date_dayofyear",
    children: [],
  },
  {
    type: "definition",
    name: "date_quarterofyear",
    docstring:
      '    date_quarterofyear[d]\n\nQuarter to year\n\nExample:\n```rel\ndef d = parse_date["2014-01-31", "Y-m-d"]\ndate_quarterofyear[d] = 1\n```',
    code: "@inline\ndef date_quarterofyear = rel_primitive_date_quarterofyear",
    children: [],
  },
  {
    type: "definition",
    name: "date_dayofquarter",
    docstring:
      '    date_dayofquarter[d]\n\nDay of quarter\n\nExample:\n```rel\ndef d = parse_date["2014-01-31", "Y-m-d"]\ndate_dayofquarter[d] = 31\n```',
    code: "@inline\ndef date_dayofquarter = rel_primitive_date_dayofquarter",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_day",
    docstring:
      '    datetime_day[dt, tz]\n\nDay of the month, for a DateTime.\nNote that DateTime properties require a timezone string `tz`.\n\nExample:\n```rel\ndatetime_day[unix_epoch, "UTC"] = 1\ndatetime_day[unix_epoch, "UTC-10"] = 31\n```\n',
    code: "@inline\ndef datetime_day = rel_primitive_datetime_day",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_hour",
    docstring:
      "    datetime_hour[dt, tz]\n\nHour of a DateTime.\nNote that DateTime properties require a timezone string `tz`.",
    code: "@inline\ndef datetime_hour = rel_primitive_datetime_hour",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_minute",
    docstring:
      "    datetime_minute[dt, tz]\n\nMinute of a DateTime.\nNote that DateTime properties require a timezone string `tz`.",
    code: "@inline\ndef datetime_minute = rel_primitive_datetime_minute",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_second",
    docstring:
      "    datetime_second[dt]\n\nSecond of a DateTime.\nUnlike other DateTime functions, `datetime_second` does not require a timezone argument.\n\nExample:\n```rel\ndatetime_second[unix_epoch] = 0\n```\n",
    code: "@inline\ndef datetime_second = rel_primitive_datetime_second",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_year_UTC",
    docstring: "    datetime_year_UTC[dt]\n\nYear assuming datetime is in UTC.",
    code: '@inline\ndef datetime_year_UTC[d] = rel_primitive_datetime_year[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_month_UTC",
    docstring:
      "    datetime_month_UTC[dt]\n\nMonth assuming datetime is in UTC.",
    code: '@inline\ndef datetime_month_UTC[d] = rel_primitive_datetime_month[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_week_UTC",
    docstring: "    datetime_week_UTC[dt]\n\nWeek assuming datetime is in UTC.",
    code: '@inline\ndef datetime_week_UTC[d] = rel_primitive_datetime_week[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_day_UTC",
    docstring: "    datetime_day_UTC[dt]\n\nDay assuming datetime is in UTC.",
    code: '@inline\ndef datetime_day_UTC[d] = rel_primitive_datetime_day[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_hour_UTC",
    docstring: "    datetime_hour_UTC[dt]\n\nHour assuming datetime is in UTC.",
    code: '@inline\ndef datetime_hour_UTC[d] = rel_primitive_datetime_hour[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_minute_UTC",
    docstring:
      "    datetime_minute_UTC[dt]\n\nMinute assuming datetime is in UTC.",
    code: '@inline\ndef datetime_minute_UTC[d] = rel_primitive_datetime_minute[d, "UTC"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetime_dayofweek",
    docstring:
      '    datetime_dayofweek[dt, tz]\n\nDay of week (a number, e.g., `5` for `Friday`)\n\nExample:\n```rel\ndef dt = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_dayofweek[dt, "+03:00"] = 5\ndatetime_dayofweek[dt, "UTC"] = 4\n```',
    code: "@inline\ndef datetime_dayofweek = rel_primitive_datetime_dayofweek",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_dayname",
    docstring:
      '    datetime_dayname[t, tz]\n\nName of week-day (a string, e.g., `Friday`)\n\nExample:\n```rel\ndef t = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_dayname[t, "+03:00"] = "Friday"\n```',
    code: "@inline\ndef datetime_dayname = rel_primitive_datetime_dayname",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_dayofweekofmonth",
    docstring:
      '    datetime_dayofweekofmonth[dt, tz]\n\nDay of week of month, as an integer (e.g. 2 for second Friday of the month, 1 for the first Tuesday).\n\nExample:\n```rel\ndef t = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_dayofweekofmonth[t, "+03:00"] = 5\n```',
    code: "@inline\ndef datetime_dayofweekofmonth = rel_primitive_datetime_dayofweekofmonth",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_monthname",
    docstring:
      '    datetime_monthname[dt, tz]\n\nThe month name\n\nExample:\n```rel\ndef t = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_monthname[t, "+03:00"] = "January"\n```',
    code: "@inline\ndef datetime_monthname = rel_primitive_datetime_monthname",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_daysinmonth",
    docstring:
      '    datetime_daysinmonth[dt, tz]\n\nThe number of days in a datetime\'s month, adjusting for timezone `tz`.\n\nExamples:\n```rel\ndef t = parse_datetime["2014-02-28 23:00 +00:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_daysinmonth[t, "+03:00"] = 31\ndatetime_daysinmonth[t, "-03:00"] = 28\n```',
    code: "@inline\ndef datetime_daysinmonth = rel_primitive_datetime_daysinmonth",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_isleapyear",
    docstring:
      '    datetime_isleapyear[dt, tz]\n\nIs it a leap year?\n\nExamples:\n```rel\ndef dt = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndef output = datetime_isleapyear[dt, "+03:00"]\nfalse\n\ndef dtleap = parse_datetime["2016-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndef output = datetime_isleapyear[dtleap, "+00:00"]\ntrue\n```',
    code: "@inline\ndef datetime_isleapyear = rel_primitive_datetime_isleapyear",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_dayofyear",
    docstring:
      '    datetime_dayofyear[dt, tz]\n\nDay of year\n\nExamples:\n```rel\ndef dt = parse_datetime["2014-03-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_dayofyear[dt, "+03:00"] = 90\ndatetime_dayofyear[dt, "+00:00"] = 89\n```',
    code: "@inline\ndef datetime_dayofyear = rel_primitive_datetime_dayofyear",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_quarterofyear",
    docstring:
      '    datetime_quarterofyear[dt, tz]\n\nQuarter of the year for datetime `dt`, as a number between 1 and 4.\n\nExample:\n```rel\ndef t = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_quarterofyear[t, "+03:00"] = 1\n```',
    code: "@inline\ndef datetime_quarterofyear = rel_primitive_datetime_quarterofyear",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_dayofquarter",
    docstring:
      '    datetime_dayofquarter[dt, tz]\n\nDay of quarter\n\nExample:\n```rel\ndef t = parse_datetime["2014-01-31 01:00 +03:00", "YYYY-mm-dd HH:MM zzzz"]\ndatetime_dayofquarter[t, "+03:00"] = 31\n```',
    code: "@inline\ndef datetime_dayofquarter = rel_primitive_datetime_dayofquarter",
    children: [],
  },
  {
    type: "definition",
    name: "date_add",
    docstring:
      '    date_add[d, period]\n    d + period\n\nAdd a Period to a Date\n\nExample:\n```rel\ndef d = parse_date["2021-09-21", "Y-m-d"]\ndef output = date_add[d, Day[20]]\nDates.Date("2021-10-11")\n```',
    code: "@inline\ndef date_add = rel_primitive_add_date_period",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_add",
    docstring:
      '    datetime_add[dt, period]\n    dt + period\n\nAdd a Period to a DateTime\n\nExamples:\n```rel\ndef dt = parse_datetime["2021-01-01 01:00:00", "Y-m-d H:M:S"]\ndef output = datetime_add[dt, Year[1]]\nDates.DateTime("2022-01-01T01:00:00")\n\ndef output = datetime_add[dt, Month[13]]\nDates.DateTime("2022-02-01T01:00:00")\n\ndef output = datetime_add[dt, Hour[1000]]\nDates.DateTime("2021-02-11T17:00:00")\n```',
    code: "@inline\ndef datetime_add = rel_primitive_add_datetime_period",
    children: [],
  },
  {
    type: "definition",
    name: "date_subtract",
    docstring:
      '    date_subtract[date, period]\n    date - period\n\nSubtract a Period from a Date, giving another Date.\n\nExample:\n```rel\ndef d = parse_date["2021-09-21", "Y-m-d"]\ndef output = date_subtract[d, Day[1000]]\nDates.Date("2018-12-26")\n```',
    code: "@inline\ndef date_subtract = rel_primitive_subtract_date_period",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_subtract",
    docstring:
      '    datetime_subtract[dt, period]\n    dt - period\n\nSubtract a Period from a DateTime, giving another DateTime.\n\nExample:\n```rel\ndef dt = parse_datetime["2021-01-01 01:00:00", "Y-m-d H:M:S"]\ndef output = datetime_subtract[dt, Hour[1000]]\nDates.DateTime("2020-11-20T09:00:00")\n```',
    code: "@inline\ndef datetime_subtract = rel_primitive_subtract_datetime_period",
    children: [],
  },
  {
    type: "definition",
    name: "period_add",
    docstring:
      "    period_add[period1, period2]\n\nAdd two periods. For now, they need to be of the same type.\n```rel\ndef output = period_add[Minute[3], Minute[4]]\nMinute[7]\n```",
    code: "@inline\ndef period_add = rel_primitive_add",
    children: [],
  },
  {
    type: "definition",
    name: "period_min",
    docstring:
      "    period_min[period1, period2]\n\nMinimum of two periods. The result is expressed as a nanosecond period.\n\nExample:\n```rel\ndef output = period_min[Minute[3],Minute[4]] = Minute[3]\ntrue\n```",
    code: "@inline\ndef period_min[x,y] = rel_primitive_min_period[x,y]",
    children: [],
  },
  {
    type: "definition",
    name: "period_max",
    docstring:
      "    period_max[period1, period2]\n\nMaximum of two periods. The result is expressed as a nanosecond period.\n\nExample:\n```rel\ndef output = period_max[Minute[3],Minute[4]] = Minute[4]\ntrue\n```",
    code: "@inline\ndef period_max[x,y] = rel_primitive_max_period[x,y]",
    children: [],
  },
  {
    type: "definition",
    name: "unix_epoch",
    docstring:
      "    unix_epoch\n\nThe beginning of the UNIX Epoch, midnight on 1 January 1970 (UTC).",
    code: '@inline\ndef unix_epoch = parse_datetime["1970-01-01 00 UTC", "Y-m-d H Z"]',
    children: [],
  },
  {
    type: "definition",
    name: "datetimes_period_milliseconds",
    docstring:
      '    datetimes_period_milliseconds[dt1, dt2]\n\nThe difference between two datetimes, `dt2 - dt1`, as a `Milliseconds` data type.\n\nIn other words, equal to the milliseconds time period between `dt1` and `dt2` --- which when added to `dt1` gives `dt2`.\n\nExample:\n```rel\ndef output = datetimes_period_milliseconds[\n    unix_epoch,\n    parse_datetime["2021-03-19 11:00:40", "YYYY-mm-dd HH:MM:SS"]\n]\n\nic {is_Millisecond(output)}\n```\n',
    code: "@inline\ndef datetimes_period_milliseconds = rel_primitive_datetimes_period_milliseconds",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_to_nanoseconds",
    docstring:
      "    datetime_to_nanoseconds[dt]\n\nConvert datetime to nanoseconds since the epoch. Assumes `dt` is in UTC.",
    code: "@inline\ndef datetime_to_nanoseconds(datetime, v) =\n    rel_primitive_datetimes_period_nanoseconds(unix_epoch, datetime, p) and\n    rel_primitive_period_nanoseconds(p, v)\n    from p",
    children: [],
  },
  {
    type: "definition",
    name: "epoch_milliseconds",
    docstring:
      "    epoch_milliseconds[dt]\n\nMilliseconds since Epoch time, as a value of type `Int64`.",
    code: "@inline\ndef epoch_milliseconds =\n    rel_primitive_epoch_milliseconds",
    children: [],
  },
  {
    type: "definition",
    name: "nanoseconds_to_datetime",
    docstring:
      "    nanoseconds_to_datetime[ns]\n\nConvert nanoseconds (from the unix epoch) to datetime.\n\nAnalogous to datetime.datetime.utcfromtimestamp(seconds) in python.\n\nExample:\n```rel\nnanoseconds_to_datetime[24 * 60 * 60 * 10^9]\n```\nis `1970-01-02T00:00:00` (one day after `unix_epoch`).",
    code: "@inline\ndef nanoseconds_to_datetime[nanoseconds] = datetime_add[unix_epoch, Nanosecond[nanoseconds]]",
    children: [],
  },
  {
    type: "definition",
    name: "Year",
    docstring:
      "    Year[n]\n\nA period that spans `n` years. The period is given in units of `Year`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Year[10]]\n```",
    code: "@inline\ndef Year = rel_primitive_year",
    children: [],
  },
  {
    type: "definition",
    name: "Month",
    docstring:
      "    Month[n]\n\nA period that spans `n` months. The period is given in units of `Month`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Month[10]]\n```",
    code: "@inline\ndef Month = rel_primitive_month",
    children: [],
  },
  {
    type: "definition",
    name: "Week",
    docstring:
      "    Week[n]\n\nA period that spans `n` weeks. The period is given in units of `Week`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Week[10]]\n```",
    code: "@inline\ndef Week = rel_primitive_week",
    children: [],
  },
  {
    type: "definition",
    name: "Day",
    docstring:
      "    Day[n]\n\nA period that spans `n` days. The period is given in units of `Day`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Day[10]]\n```",
    code: "@inline\ndef Day = rel_primitive_day",
    children: [],
  },
  {
    type: "definition",
    name: "Hour",
    docstring:
      "    Hour[n]\n\nA period that spans `n` hours. The period is given in units of `Hour`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Hour[10]]\n```",
    code: "@inline\ndef Hour = rel_primitive_hour",
    children: [],
  },
  {
    type: "definition",
    name: "Minute",
    docstring:
      "    Minute[n]\n\nA period that spans `n` minutes. The period is given in units of `Minute`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Minute[100]]\n```",
    code: "@inline\ndef Minute = rel_primitive_minute",
    children: [],
  },
  {
    type: "definition",
    name: "Second",
    docstring:
      "    Second[n]\n\nA period that spans `n` seconds. The period is given in units of `Second`.\n\nExample:\n```rel\ndatetime_add[unix_epoch, Second[100]]\n```",
    code: "@inline\ndef Second = rel_primitive_second",
    children: [],
  },
  {
    type: "definition",
    name: "Millisecond",
    docstring:
      '    Millisecond[n]\n\nA period that spans `n` milliseconds. The period is given in units of `Millisecond`.\n(One second is $10^3$ milliseconds.)\n\nExample:\n```rel\ndatetime_add[unix_epoch, Millisecond[20 * 10^3]]\n```\ngives\n```\nDates.DateTime("1970-01-01T00:00:20")\n```',
    code: "@inline\ndef Millisecond = rel_primitive_millisecond",
    children: [],
  },
  {
    type: "definition",
    name: "Microsecond",
    docstring:
      '    Microsecond[n]\n\nA period that spans `n` microseconds. The period is given in units of `Microsecond`.\n(One second is $10^6$ microseconds.)\n\nExample:\n```rel\ndatetime_add[unix_epoch, Microsecond[5 * 10^6]]\n```\ngives\n```\nDates.DateTime("1970-01-01T00:00:05")\n```',
    code: "@inline\ndef Microsecond = rel_primitive_microsecond",
    children: [],
  },
  {
    type: "definition",
    name: "Nanosecond",
    docstring:
      '    Nanosecond[n]\n\nA period that spans `n` nanoseconds. The period is given in units of `Nanosecond`.\n(One second is $10^9$ nanoseconds.)\n\nExample:\n```rel\ndatetime_add[unix_epoch, Nanosecond[5*10^9]]\n```\ngives\n```\nDates.DateTime("1970-01-01T00:00:05")\n```',
    code: "@inline\ndef Nanosecond = rel_primitive_nanosecond",
    children: [],
  },
  {
    type: "definition",
    name: "is_Year",
    docstring: "    is_Year(x)\n\nHolds if `x` is a `Year` period.",
    code: "@inline\ndef is_Year = rel_primitive_Year",
    children: [],
  },
  {
    type: "definition",
    name: "is_Month",
    docstring: "    is_Month(x)\n\nHolds if `x` is a `Month` period.",
    code: "@inline\ndef is_Month = rel_primitive_Month",
    children: [],
  },
  {
    type: "definition",
    name: "is_Week",
    docstring: "    is_Week(x)\n\nHolds if `x` is a `Week` period.",
    code: "@inline\ndef is_Week = rel_primitive_Week",
    children: [],
  },
  {
    type: "definition",
    name: "is_Day",
    docstring: "    is_Day(x)\n\nHolds if `x` is a `Day` period.",
    code: "@inline\ndef is_Day = rel_primitive_Day",
    children: [],
  },
  {
    type: "definition",
    name: "is_Hour",
    docstring: "    is_Hour(x)\n\nHolds if `x` is a `Hour` period.",
    code: "@inline\ndef is_Hour = rel_primitive_Hour",
    children: [],
  },
  {
    type: "definition",
    name: "is_Minute",
    docstring: "    is_Minute(x)\n\nHolds if `x` is a `Minute` period.",
    code: "@inline\ndef is_Minute = rel_primitive_Minute",
    children: [],
  },
  {
    type: "definition",
    name: "is_Second",
    docstring: "    is_Second(x)\n\nHolds if `x` is a `Second` period.",
    code: "@inline\ndef is_Second = rel_primitive_Second",
    children: [],
  },
  {
    type: "definition",
    name: "is_Millisecond",
    docstring:
      "    is_Millisecond(x)\n\nHolds if `x` is a `Millisecond` period.",
    code: "@inline\ndef is_Millisecond = rel_primitive_Millisecond",
    children: [],
  },
  {
    type: "definition",
    name: "is_Microsecond",
    docstring:
      "    is_Microsecond(x)\n\nHolds if `x` is a `Microsecond` period.",
    code: "@inline\ndef is_Microsecond = rel_primitive_Microsecond",
    children: [],
  },
  {
    type: "definition",
    name: "is_Nanosecond",
    docstring: "    is_Nanosecond(x)\n\nHolds if `x` is a `Nanosecond` period.",
    code: "@inline\ndef is_Nanosecond = rel_primitive_Nanosecond",
    children: [],
  },
  {
    type: "definition",
    name: "Date",
    docstring: "    Date(x)\n\nHolds if `x` is a `Date`.",
    code: "@inline\ndef Date = rel_primitive_Date",
    children: [],
  },
  {
    type: "definition",
    name: "DateTime",
    docstring: "    DateTime(x)\n\nHolds if `x` is a `DateTime`.",
    code: "@inline\ndef DateTime = rel_primitive_DateTime",
    children: [],
  },
  {
    type: "definition",
    name: "datetime_now",
    docstring:
      "    datetime_now\n\nThe current UTC time (the start time of the transaction) as a `DateTime` value.\n\nExample:\n```rel\ndef output = datetime_now\n```",
    code: "@inline\ndef datetime_now = rel_primitive_transaction_edb[:txn_start_time]",
    children: [],
  },
  {
    type: "definition",
    name: "dates_period_days",
    docstring:
      "    dates_period_days[date1, date2]\n\nThe difference in days between two dates `date2` and  `date1` as a `Day` data type.\n\nExample:\n```rel\ndef days = dates_period_days[\n    2022-05-12,\n    2022-05-15\n]\n\nic { equal(days, Day[3])}\n```",
    code: "@inline\ndef dates_period_days = rel_primitive_dates_period",
    children: [],
  },
  {
    type: "definition",
    name: "period_day_to_int",
    docstring:
      "    period_day_to_int[day]\n\nConversion from period `Day` to `int`.\n\nIn other words, returns the value of `Day` data type as an integer.\n\nExample:\n```rel\ndef num_of_days = period_day_to_int[Day[3]]\nic { equal(num_of_days, 3) }\n```\n",
    code: "@inline\ndef period_day_to_int = rel_primitive_period_days",
    children: [],
  },
  {
    type: "definition",
    name: "boolean_true",
    docstring:
      "    boolean_true(x)\n\nHolds if `x` is a `Boolean` of value `true`.",
    code: "@inline\ndef boolean_true = rel_primitive_boolean_true",
    children: [],
  },
  {
    type: "definition",
    name: "boolean_false",
    docstring:
      "    boolean_false(x)\n\nHolds if `x` is a `Boolean` of value `false`.",
    code: "@inline\ndef boolean_false = rel_primitive_boolean_false",
    children: [],
  },
  {
    type: "definition",
    name: "Boolean",
    docstring:
      '    Boolean(x)\n\nHolds if `x` is a `Boolean`.\n\nExample:\n```rel\ndef json = parse_json[\\"""{"a": true, "b": false}\\"""]\ndef output(x) = json(:a, x) and Boolean(x)\n```',
    code: "@inline\ndef Boolean = rel_primitive_Boolean",
    children: [],
  },
  {
    type: "definition",
    name: "boolean_and",
    docstring:
      "    boolean_and(x, y, z)\n\nLogical AND operator for the `Boolean` data type.\n\nExample:\n```rel\ndef output(x, y, z) = boolean_and(x, y, z) and boolean_true(z)\n```",
    code: "@inline\ndef boolean_and(x in Boolean, y in Boolean, z in Boolean) =\n    if boolean_true(x) and boolean_true(y) then\n        boolean_true(z)\n    else\n        boolean_false(z)",
    children: [],
  },
  { type: "module_end", name: "", docstring: "", code: "", children: [] },
  {
    type: "definition",
    name: "boolean_or",
    docstring:
      "    boolean_or(x, y, z)\n\nLogical `or` operator for the `Boolean` data type.\nExample:\n```rel\ndef output(x, y, z) = boolean_or(x, y, z) and boolean_false(z)\n```",
    code: "@inline\ndef boolean_or(x in Boolean, y in Boolean, z in Boolean) =\n    if boolean_false(x) and boolean_false(y) then\n        boolean_false(z)\n    else\n        boolean_true(z)",
    children: [],
  },
  { type: "module_end", name: "", docstring: "", code: "", children: [] },
  {
    type: "definition",
    name: "boolean_not",
    docstring:
      "    boolean_not(x,y)\n\nNegation(`not`) operator for the `Boolean` data type.\nExample:\n```rel\ndef output(x, y) = boolean_not(x, y) and boolean_false(x)\n```",
    code: "@inline\ndef boolean_not(x in Boolean, y in Boolean) =\n    if boolean_true(x) then\n        boolean_false(y)\n    else\n        boolean_true(y)",
    children: [],
  },
  { type: "module_end", name: "", docstring: "", code: "", children: [] },
  {
    type: "definition",
    name: "∧",
    docstring: "    F and G\n    F ∧ G\n\nLogical and (conjunction).",
    code: "@inline\ndef (∧)(F, G) = F and G",
    children: [],
  },
  {
    type: "definition",
    name: "∨",
    docstring:
      "    F or G\n    F ∨ G\n\nLogical or (disjunction), for boolean (arity 0, true or false) arguments F and G.",
    code: "@inline\ndef (∨)(F, G) = F or G",
    children: [],
  },
  {
    type: "definition",
    name: "⇒",
    docstring:
      "    F implies G\n    F ⇒ G\n    G ⇐ F\n\nLogical implication, for boolean (arity 0, true or false) arguments F and G.",
    code: "@inline\ndef (⇒)(F, G) = F implies G\n\n@inline\ndef (⇐)(F, G) = G implies F",
    children: [],
  },
  {
    type: "definition",
    name: "¬",
    docstring:
      "    not F\n    ¬F\n\nLogical negation, for boolean (arity 0, true or false) argument F.",
    code: "@inline\ndef (¬)(F) = not F",
    children: [],
  },
  {
    type: "definition",
    name: "iff",
    docstring:
      "    F iff G\n    F ≡ G\n    F ⇔ G\n\nIf and only if (boolean equivalence), for boolean (arity 0, true or false) arguments F and G.",
    code: "@inline\ndef iff(F, G) = (F implies G) and (G implies F)\n\n@inline\ndef (≡)(F, G) = F iff G\n\n@inline\ndef (⇔)(F, G) = F iff G",
    children: [],
  },
  {
    type: "definition",
    name: "xor",
    docstring:
      "    F xor G\n    F ≢ G\n    F ⇎ G\n    F ⊻ G\n\nExclusive OR, for boolean (arity 0, true or false) arguments F and G.",
    code: "@inline\ndef xor(F, G) = not(F ≡ G)\n\n@inline\ndef (⊻)(F, G) = F xor G\n\n@inline\ndef (≢)(F, G) = F xor G\n\n@inline\ndef (⇎)(F, G) = F xor G",
    children: [],
  },
  {
    type: "definition",
    name: "intersect",
    docstring:
      "    intersect[R, S]\n    R ∩ S\n\nIntersect two n-ary relations R and S",
    code: "@inline\ndef intersect[R, S](x...) = R(x...) and S(x...)\n\n@inline\ndef (∩) = intersect",
    children: [],
  },
  {
    type: "definition",
    name: "union",
    docstring:
      "    union[R, S]\n    R ∪ S\n\nUnion two n-ary relations R and S",
    code: "@inline\ndef union[R, S](x...) = R(x...) or S(x...)\n\n@inline\ndef (∪) = union",
    children: [],
  },
  {
    type: "definition",
    name: "cart",
    docstring:
      "    cart[R, S]\n    R × S\n\nCartesian product.\n\nExamples:\n```rel\ndef output = 1 ✕ 2\n(1,2)\ndef output = {1; 2} ✕ {3; 4}\n(1,3)\n(1,4)\n(2,3)\n(2,4)\n```",
    code: "@inline\ndef cart[R, S](x..., y...) = R(x...) and S(y...)\n\n@inline\ndef (×) = cart",
    children: [],
  },
  {
    type: "definition",
    name: "diff",
    docstring:
      "    diff[R, S]\n\nSet difference (complement): removes the tuples of `S` from `R`, if present.\n\nExample:\n```rel\ndef output = diff[{1;2;3;4} , {1;3} ]\n2\n4\n```",
    code: "@inline\ndef diff[R, S](x...) = R(x...) and not S(x...)",
    children: [],
  },
  {
    type: "definition",
    name: "complement",
    docstring: "    complement[R]\n\nThe complement of the relation R.",
    code: "@inline\ndef complement[R](x...) = not R(x...)",
    children: [],
  },
  {
    type: "definition",
    name: "domain",
    docstring:
      "    domain[F]\nThe domain of a scalar function `F`. The domain represents all but the last argument of `F`.\n\nExample:\n```rel\ndef output = domain[{(1, 'a', 1); (2, 'b', 4); (3, 'c', 9)}]\n(1, 'a')\n(2, 'b')\n(3, 'c')\n```",
    code: "@inline\ndef domain[F](k...) = F(k..., _)",
    children: [],
  },
  {
    type: "definition",
    name: "first",
    docstring:
      '    first[R]\n\nProjection to the first argument of R.\n\n`first` supports heterogeneous relations, both in arity and types.\n\nExamples:\n```rel\ndef output = first[(1, 2, 3); (4, 5, 6)]\n1\n4\ndef output = first[(1, 2, 3); (4, 5); 6]\n1\n4\n6\ndef output = first[("a", 1); (2, 3)]\n2\n"a"\n```',
    code: "@inline\ndef first[R](x)  = ∃(y... : R(x, y...))",
    children: [],
  },
  {
    type: "definition",
    name: "second",
    docstring:
      '    second[R]\n\nProjection to the second argument of R.\n\n`second` supports heterogeneous relations, both in arity and types.\n\nExamples:\n```rel\ndef output = second[(1, 2, 3); (4, 5)]\n2\n5\ndef output = second[(1, 2); (3, "abc")]\n2\n"abc"\n```',
    code: "@inline\ndef second[R](x) = ∃(y... : R(_, x, y...))",
    children: [],
  },
  {
    type: "definition",
    name: "last",
    docstring:
      '    last[R]\n\nProjection to the last argument of the relation `R`.\n\n`last` supports heterogeneous relations, both in arity and types.\n\nExamples:\n```rel\ndef output = last[(1, 2, 3); (4, 5, 6)]\n3\n6\ndef output = last[1; 2; 3]\n1\n2\n3\ndef output = last[(1, 2); (3, "abc")]\n2\n"abc"\ndef output = last[(1, 2, 3); (4, 5)]\n3\n5\n```\n',
    code: "@inline\ndef last[R](y)   = ∃(x... : R(x..., y))",
    children: [],
  },
  {
    type: "definition",
    name: "transpose",
    docstring:
      "    transpose[R]\n\nTranspose a binary relation (swap the two arguments).\n\nExample:\n```rel\ndef output = transpose[{(1, 2); (3, 4)}]\n(2, 1)\n(4, 3)\n```",
    code: "@inline\ndef transpose[R](y, x) = R(x, y)",
    children: [],
  },
  {
    type: "definition",
    name: "empty",
    docstring:
      "    empty(R)\n\nExamples:\n- `empty(1)` is `false`\n- `empty(true)` is `false`\n- `empty(false)` is `true`",
    code: "@inline\ndef empty(R) = not exists(x...: R(x...))",
    children: [],
  },
  {
    type: "definition",
    name: "subset",
    docstring:
      "    subset(R, S)\n    R ⊆ S\n\n`R` is a subset of `S` if all facts in `R` are also in `S`.\n\nSubset is the relational variant of implication, but note that there is a subtle difference\nfor arity-overloaded relations due to usage of varargs.\n\n- `forall(x, y: R(x, y) implies S(x, y))` is true if the implication is true for all\n  *binary* facts of `R`. If `R` also contains facts of a different arity, then the implication\n  remains true, even when `R ⊈ S`.\n\n- `subset(R, S)`, defined as `forall(xs... where R(xs...) : S(xs...))`, is true only if\n  there exists no fact in `R`, of any arity, that is not also in `S`.",
    code: "@inline\ndef subset(R, S) = forall(x... where R(x...): S(x...))\n\n@inline\ndef (⊆) = subset",
    children: [],
  },
  {
    type: "definition",
    name: "proper_subset",
    docstring:
      "    proper_subset(R, S)\n    R ⊂ S\n\n`R` is a proper subset of `S` if `subset(R, S)` and `R` and `S` are not equal. This means\nthere has to be at least one fact in `S` that is not in `R`.",
    code: "@inline\ndef proper_subset(R, S) = subset(R, S) and not equal(R, S)\n\n@inline\ndef (⊂) = proper_subset",
    children: [],
  },
  {
    type: "definition",
    name: "superset",
    docstring:
      "    superset(R, S)\n    R ⊇ S\n\nInverse of subset. See subset.",
    code: "@inline\ndef superset(R, S) = forall(x... where S(x...): R(x...))\n\n@inline\ndef (⊇) = superset",
    children: [],
  },
  {
    type: "definition",
    name: "proper_superset",
    docstring:
      "    proper_superset(R, S)\n    R ⊃ S\n\nInverse of proper_subset. See proper_subset.",
    code: "@inline\ndef proper_superset(R, S) = superset(R, S) and not equal(R, S)\n\n@inline\ndef (⊃) = proper_superset",
    children: [],
  },
  {
    type: "definition",
    name: "disjoint",
    docstring:
      "    disjoint(R, S)\n\n`R` and `S` are disjoint if they have no fact in common.\n",
    code: "@inline\ndef disjoint(R, S) = empty(R ∩ S)",
    children: [],
  },
  {
    type: "definition",
    name: "dot_join",
    docstring: "    dot_join[R, S]\n    R . S\n\nCompose",
    code: "@inline\ndef dot_join[R,S](x..., y...) = exists(t: R(x..., t) and S(t, y...))\n\n@inline\ndef (.) = dot_join",
    children: [],
  },
  {
    type: "definition",
    name: "prefix_join",
    docstring:
      '    prefix_join[R, S]\n    R <: S\n\nThe prefix join (or restriction) of `S` to `R` consists of the tuples `(x..., y...)` in `S` where the prefix `(x...)` is in `R`.\n\nThat is, `R <: S` contains the tuples in `S` that have a prefix in `R`.\n\n| Example                          | Normalized |\n| :--------------------------------| :--------- |\n| `n <: edge`                      | `x, y: edge(x, y) and x = n`\n| `female <: parent`               | `x, y: female(x) and parent(x, y)`\n| `t <: players`                   | `x, p: players(x, p) and t = x`\n| `t.players <: age`               | `p, v: players(t, p) and age(p, v)`\n| `intern <: salary`               | `p, v: intern(p) and salary(p, v)`\n\nThe restriction operator can also be used to select subsets of JSON-like relations:\n\n- `:a <: json` where `json` is `{"a": {"b": 1, "c": 2}, "d": 3}` has value\n  `{"a": {"b": 1, "c": 2}}`\n\n- `(:[], _, :a) <: json` where `json` is `[ {"a": 1, "b": 2}, {"a": 3, "b": 4} ]` has\n  value `[ {"a": 1}, {"a": 3} ]`.\n',
    code: "@inline\ndef prefix_join[R, S](x..., y...) = R(x...) and S(x..., y...)\n\n@inline\ndef (<:) = prefix_join",
    children: [],
  },
  {
    type: "definition",
    name: "suffix_join",
    docstring:
      '    suffix_join[R, S]\n    R :> S\n\nThe suffix join (or restriction) of `R` to `S` consists of the tuples `(x..., y...)` in `R` where the suffix `(y...)` is in `S`.\n\nThat is, `R :> S` contains the tuples in `R` that have a suffix in `S`.\n\n\n| Example                          | Normalized |\n| :--------------------------------| :--------- |\n| `edge :> n`                      | `x, y: edge(x, y) and y = n`\n| `parent :> female`               | `x, y: parent(x, y) and female(y)`\n| `account_balance :> positive`    | `x, v: account_balance(x, v) and positive(v)`\n| `brand_name :> "Tesla"`          | `b, s: brand_name(b, s) and s = "Tesla"`\n\nThe restriction operator can also be used to select subsets of JSON-like relations:\n\n- `json :> even` where `json` is `[ {"a": 1, "b": 2}, {"a": 3, "b": 4, "c": 6} ]` has\n   value `[ {"b": 2}, {"b": 4, "c": 6} ]`\n\n- `json :> (:b, even)` where `json` is `[ {"a": 1, "b": 2}, {"a": 3, "b": 4, "c": 6} ]`\n   has value `[ {"b": 2}, {"b": 4} ]`\n',
    code: "@inline\ndef suffix_join[R, S](x..., y...) = R(x..., y...) and S(y...)\n\n@inline\ndef (:>) = suffix_join",
    children: [],
  },
  {
    type: "definition",
    name: "left_override",
    docstring:
      '    left_override[R, S]\n    R <++ S\n\nThe (left) override operator is usually applied to relations of tuples `(k..., v)` with a functional\ndependency from the initial (key) arguments `(k...)` to the last (value) argument `v`.\n\n`R <++ S` contains all the tuples of `R`, plus all the tuples in `S`\nwhose key is not in `R`. Often, `S` specifies default values for keys that are missing in `R`.\nIn the result, a value in `R` overrides a value in `S`.\n\nThere are two equivalent ways to think about `R <++ S`:\n(1) `S` is providing default values for keys that are missing in `R`.\n(2) The entries in `R` are overriding the entries in `S`.\n\n\n| Example                          | Value      |\n| :--------------------------------| :--------- |\n| `2 <++ 3`                        | `2`\n| `1.5 <++ 3`                      | `1.5`\n| `(1,2) <++ (1,3)`                | `(1,2)`\n| `(3,4) <++ (1,2); (3,5)`         | `(1,2); (3,4)`\n| `(3,"abc") <++ (1,2); (3,5)`     | `(1,2); (3,"abc")`\n| `(1,2); (3,5) <++ (3,4); (6,7)`  | `(1,2); (3,5); (6,7)`\n\nOverride can be applied to heterogeneous relations, notably JSON-like relations. The\nfollowing examples show `<++` operators applied to JSON inputs.\n\n| Left                   | Right               | Value               |\n| :----------------------| :-------------------| :------------------ |\n| `{"a": 1, "b": 3}`     | `{"a": 2 }`         | `{"a": 1, "b": 3}`\n| `{"a": 2 }`            | `{"a": 1, "b": 3}`  | `{"a": 2, "b": 3}`\n| `{"a": 1, "b": 2}`     | `{"c": 3}`          | `{"a": 1, "b": 2, "c": 3}`\n\nSee also: `default_value[D, F, c]`.',
    code: "@inline\ndef left_override[R, S](xs...) = R(xs...)\n\n@inline\ndef left_override[R, S](xs..., v) = S(xs..., v) and not R(xs..., _)\n\n@inline\ndef (<++) = left_override",
    children: [],
  },
  {
    type: "definition",
    name: "right_override",
    docstring:
      '    right_override[R, S]\n    R ++> S\n\nRight override is identical to left override, except the arguments are swapped.\n\n`R ++> S` contains all of `S`, plus all the tuples in `R` whose key is not in `S`.\n\nThere are two equivalent ways to think about `R ++> S`:\n(1) `R` is providing default values for keys that are missing in `S`.\n(2) The entries in `S` are overriding the entries in `R`.\n\nA few examples to illustrate the difference with left-override:\n\n| Example                          | Value      |\n| :--------------------------------| :--------- |\n| `2 ++> 3`                        | `3`\n| `(1,2) ++> (1,3)`                | `(1,3)`\n| `(3,4) ++> (1,2); (3,5)`         | `(1,2); (3,5)`\n| `(3,"abc") ++> (1,2); (3,5)`     | `(1,2); (3,5)`\n| `(1,2); (3,5) ++> (3,4); (6,7)`  | `(1,2); (3,4); (6,7)`',
    code: "@inline\ndef right_override[R, S](xs...) = S(xs...)\n\n@inline\ndef right_override[R, S](xs..., v) = R(xs..., v) and not S(xs..., _)\n\n@inline\ndef (++>) = right_override",
    children: [],
  },
  {
    type: "definition",
    name: "function",
    docstring:
      "    function(R)\n\nGiven a relation R, `true` if R is a function (from all but the last elements, to the last),\nand `false` if not.\n\nExamples:\n```rel\ndef output = function[{(1, 2); (2, 5)}]\ntrue\ndef output = function[{(1, 2); (1, 3)}]\nfalse\ndef output = function[{(1,2,3) ; (1,3,4)}]\ntrue\n```",
    code: "@inline\ndef function(R) =\n    forall(k..., v1, v2 where R(k..., v1) and R(k..., v2): v1 = v2)",
    children: [],
  },
  {
    type: "definition",
    name: "total",
    docstring:
      "    total(D, F)\n\nGiven a domain D and a relation F, check that there is a value in F for every element of\nthe domain D. The arity of F must be the arity of D + 1.",
    code: "@inline\ndef total(D, F) =\n    forall(k... where D(k...): F(k..., _))",
    children: [],
  },
  {
    type: "definition",
    name: "default_value",
    docstring:
      "    default_value[D, F, c]\n\nMake function or relation `F` total for domain `D` by defaulting to `c`.\n\nThe arity of F must be the arity of D + 1.\n\nExample:\n```rel\ndef dom = {1;2;3;4}\ndef f = {(1, 321); (3, 123)}\ndef output = default_value[dom, f, 42]\n(1, 321)\n(2, 42)\n(3, 123)\n(4, 42)\n```\n\nSee also: `left_override` (`<++`) and `right_override` (`++>`).",
    code: "@inline\ndef default_value[D, F, c](k..., v) =\n    F(k..., v) or (D(k...) and not F(k..., _) and v = c)",
    children: [],
  },
  {
    type: "definition",
    name: "missing",
    docstring:
      "    missing\n\nSingleton missing value.\n\nExamples:\n```rel\nmissing[] = missing\nequal( (x : missing(x)) , {missing} )\n```",
    code: "@inline\ndef missing = rel_primitive_missing",
    children: [],
  },
  {
    type: "definition",
    name: "relname_string",
    docstring:
      '    relname_string[relation_name]\n    relname_string(relation_name, string)\n\nMaps a RelName (`relation_name`) to its corresponding String value (`string`).\nContains `relation_name` and `string` when `relation_name` matches `string`.\n\nRelation names (aka *RelNames*), when treated as data, start with the symbol `:`.\n\nCan be used to\n\n1. Verify that a RelName and string match.\n   `relname_string(relation_name, string)` evaluates to `true` if `relation_name` matches `string`.\n   If `relation_name` does not match `string`, `relname_string(relation_name, string)`\n   evaluates to `false` (the empty relation, `{}`).\n2. Convert a RelName to a string (*relname_string[relation_name]* provides shorthand for this use).\n\nNote: converting a string to a RelName is not supported.\n\nExamples:\n\nVerify that a RelName matches a string.\n\n```rel\nrelname_string(:rel, "rel")\n//evaluates to `true` because the RelName `:rel` matches the string `"rel"`.\n```\nConvert RelName `:employees` to string:\n\n```rel\ndef output(x) = relname_string(:employees, x)\n//output> "employees"\n```\n\nConvert RelName `:employees` to string using equivalent shorthand:\n\n```rel\ndef output = relname_string[:employees]\n```\n\nsee also: `string`',
    code: "@inline\ndef relname_string = rel_primitive_relname_string",
    children: [],
  },
  {
    type: "definition",
    name: "arity",
    docstring:
      '    arity[R]\n\nThe arity of a relation. In some cases, it can be an over-approximation.\n\nArity is a higher-order relation that is always evaluated at compile-time.\n\nExamples:\n```rel\ndef output = arity[3]\n1\ndef output = arity[{1; 2; 3}]\n1\ndef output = arity[(1, 2)]\n2\ndef output = arity[add]\n3\ndef output = arity[{1; 2; (1,2)}]\n1\n2\n```\n\nArity can be used to do meta-programming in logic. For example, the following\nabstraction `verbalize` implements specific cases using `arity`.\n\nExamples:\n```rel\n@inline def verbalize[R] = "nullary", arity[R] = 0;\n                            "unary", arity[R] = 1;\n                            "binary", arity[R] = 2\ndef output = verbalize[true]\n"nullary"\ndef output = verbalize[1]\n"unary"\n```\n\nArity can be used in higher-order abstractions to check at compile-time that they are\nused correctly.\n\nArity can be used in integrity constraints to state expectation on EDB or IDB\nrelations. Because `arity` is evaluated at compile-time, it can catch mistakes in the\nlogic before the logic executes.\n\nExample:\n```rel\ndef p = 1,2,3\nic { arity[p] = 3 }\n```\n\nNote that there is a difference between `R(_, _)` and `arity(R) = 2`. The first requires\n`R` to be non-empty, which is an runtime property of `R`.',
    code: "@inline\ndef arity[R] = rel_primitive_arity[R]",
    children: [],
  },
  {
    type: "definition",
    name: "pivot",
    docstring:
      "    pivot[R]\n\nAssociates each element of an input tuple with its index in the tuple.\nThe result is always a binary relation.\n\n`pivot[(t1, ..., tn)]` generates pairs `(1, t1);... (i, ti); ... (n, tn)`\nThis is useful to match up long tuples with names (see `zip`), for example.\n\nExample:\n```rel\ndef output = pivot[{(5, 60, 7, 2)}]\n(1, 5)\n(2, 60)\n(3, 7)\n(4, 2)\n```\n\n`pivot[true]` and `pivot[false]` are both `false` (the empty relation)\nFor unary relations, `pivot[{(x)}]` is `{(1,x)}`",
    code: "@inline\ndef pivot[R] = rel_primitive_pivot[R]",
    children: [],
  },
  {
    type: "definition",
    name: "zip",
    docstring:
      "    zip[R, S]\n\nPair-wise combine two `n`-ary tuples into a relation of `n` pairs.\n\nExample:\n```rel\ndef foods = {(:hamburger, :chicken, :hot_dog, :fries, :macaroni, :pizza, :salad, :milk, :ice_cream)}\ndef cost = { (2.49, 2.89, 1.50, 1.89, 2.09, 1.99, 2.49, 0.89, 1.59) }\ndef output = zip[foods, cost]\n(:chicken, 2.89)\n(:fries, 1.89)\n(:hamburger, 2.49)\n(:hot_dog, 1.5)\n(:ice_cream, 1.59)\n(:macaroni, 2.09)\n(:milk, 0.89)\n(:pizza, 1.99)\n(:salad, 2.49)\n```",
    code: "@inline def zip[R,S](x, y) = rel_primitive_pivot[R](i, x) and rel_primitive_pivot[S](i, y) from i",
    children: [],
  },
  {
    type: "definition",
    name: "jacobian",
    docstring:
      "    jacobian[S, R]\n    jacobian(S, R, J)\n\nCompute the Jacobian (e.g. the derivative or gradient) of relation `S` w.r.t. relation `R`.\n\n`jacobian` computes the derivatives of one scalar- or vector-valued relation (`R`) with respect to a second scalar- or vector-valued relation (`S`).\nIt returns a matrix of all of them (`J`) using (relational) automatic differentiation techniques.\n\nBoth relations (`S` and `R`) must be key value pairs.\nThis is true even of scalars such as `x[1]`, which cannot be rendered as `x`.\n\n\nExamples\n\nDerivative of a scalar-valued relation of one scalar variable:\n\n```rel\ndef y[1] = 1.0\ndef z[1] = 3.0 * y[1]^2\n\ndef output = jacobian[z, y]\n//output> 1,1,6.0\n```\n\nDerivative of a more complicated scalar-valued relation of one scalar variable:\n\n```rel\ndef x[1] = 1.0\ndef y[1] = 3.0 * x[1]^2\ndef z[1] = y[1] / 2\n\ndef output = jacobian[z, x]\n//output> 1,1,3.0\n```\n\nGradient of a vector-valued relation with respect to a scalar input:\n\n```rel\ndef y[1] = 2.0\ndef z[1] = 3.0 * y[1]^2\ndef w[1] = z[1]^2\ndef w[2] = y[1]\n\ndef output = jacobian[w, y]\n\n//output> 1,1,288.0\n//        2,2,1.0\n```\n\nJacobian of a vector-valued relation with respect to a vector input:\n\n```rel\ndef y[1] = 1.0\ndef y[2] = 4.0\n\ndef z[1] = 2*y[1] + 3*y[2]\ndef z[2] =   y[1] - y[2]\n\ndef output = jacobian[z, y]\n//output> 1,1,2.0\n//        1,2,3.0\n//        2,1,1.0\n//        2,2,-1.0\n```",
    code: "@inline\ndef jacobian[S, R] = rel_primitive_jacobian[S, R]",
    children: [],
  },
  {
    type: "definition",
    name: "int",
    docstring:
      "    int[n, v]\n\nThe `n`-bit signed integer value from the integer value `v`.",
    code: "@inline\ndef int = rel_primitive_int",
    children: [],
  },
  {
    type: "definition",
    name: "uint",
    docstring:
      "    uint[n, v]\n\nThe `n`-bit unsigned integer value from the integer value `v`.",
    code: "@inline\ndef uint = rel_primitive_uint",
    children: [],
  },
  {
    type: "definition",
    name: "decimal",
    docstring:
      "    decimal[n, digits, v]\n\nThe `n`-bit decimal value with `digits` precision from number value `v`.",
    code: "@inline\ndef decimal = rel_primitive_decimal",
    children: [],
  },
  {
    type: "definition",
    name: "rational",
    docstring:
      "    rational[n, num, denom]\n\nThe `n`-bit rational value from integer numerator `num` and denominator `denom`.\nThe result is invalid when both the numerator and the denominator are zero.",
    code: "@inline\ndef rational = rel_primitive_rational",
    children: [],
  },
  {
    type: "definition",
    name: "float",
    docstring:
      "    float[n, v]\n\nThe `n`-bit floating point value from the number `v`.\nExample: `float[64, 3.0]`.",
    code: "@inline\ndef float = rel_primitive_float",
    children: [],
  },
  {
    type: "definition",
    name: "int64",
    docstring:
      "    int64[v]\n\nThe `64`-bit signed integer value from the integer value `v`.",
    code: "@inline\ndef int64 = int[64]",
    children: [],
  },
  {
    type: "definition",
    name: "int128",
    docstring:
      "    int128[v]\n\nThe `128`-bit signed integer value from the integer value `v`.",
    code: "@inline\ndef int128 = int[128]",
    children: [],
  },
  {
    type: "definition",
    name: "uint64",
    docstring:
      "    uint64[v]\n\nThe `64`-bit unsigned integer value from the integer value `v`.",
    code: "@inline\ndef uint64 = uint[64]",
    children: [],
  },
  {
    type: "definition",
    name: "uint128",
    docstring:
      "    uint128[v]\n\nThe `128`-bit unsigned integer value from the integer value `v`.",
    code: "@inline\ndef uint128 = uint[128]",
    children: [],
  },
  {
    type: "definition",
    name: "float64",
    docstring:
      "    float64[v]\n\nThe `64`-bit floating point value from the number `v`, which must be a float.",
    code: "@inline\ndef float64 = float[64]",
    children: [],
  },
  {
    type: "definition",
    name: "numerator",
    docstring:
      '    numerator[x]\n\nNumerator of a rational-like number.\n\nExamples:\n```rel\nnumerator[rational[64, 1, 3]] = 1\nnumerator[rational[64, 1, 100]] = 1\nnumerator[rational[64, 1, 100] + rational[64, 1, 3]]  =  103\nnumerator[parse_decimal[64, 2, "3.14"]]  =  314\nnumerator[parse_decimal[64, 5, "3.14159"]]  =  314159\nnumerator[5]  =  5\n```',
    code: "@inline\ndef numerator = rel_primitive_numerator",
    children: [],
  },
  {
    type: "definition",
    name: "denominator",
    docstring:
      '    denominator[x]\n\nDenominator of a rational-like number.\n\nExamples:\n```rel\ndenominator[rational[64, 1, 3]] = 3\ndenominator[rational[64, 1, 100]] = 100\ndenominator[rational[64, 1, 100] + rational[64, 1, 3]] = 300\ndenominator[parse_decimal[64, 2, "3.14"]] = 100\ndenominator[parse_decimal[64, 5, "3.14159"]] = 10000\ndenominator[5] = 1\n```',
    code: "@inline\ndef denominator = rel_primitive_denominator",
    children: [],
  },
  {
    type: "definition",
    name: "int_float_convert",
    docstring:
      "    int_float_convert[x]\n\nConversion from int to float. Argument must be an int.\n\nExample:\n```rel\nint_float_convert[3] = 3.0\nint_float_convert[3.2] : error\n```",
    code: "@inline\ndef int_float_convert = rel_primitive_int_float_convert",
    children: [],
  },
  {
    type: "definition",
    name: "float_int_convert",
    docstring:
      "    float_int_convert[x]\n\nConversion from float to int.\nIf the argument is not equivalent to an int,  `float_int_convert` returns `false`.  (See `trunc_to_int`, `floor_to_int` for general conversion.)\n\nExample:\n```rel\nfloat_int_convert[3.0] = 3\nfloat_int_convert[3.2] = false\n```",
    code: "@inline\ndef float_int_convert = rel_primitive_float_int_convert",
    children: [],
  },
  {
    type: "definition",
    name: "decimal_int_convert",
    docstring:
      "    decimal_int_convert[x]\n\nConversion from `n`-bit fixed-point decimal with `d` precision to `n`-bit int.\n\nIf the argument is not equivalent to an int,  `decimal_int_convert` returns `false`.\n\nExample:\n```rel\ndecimal_int_convert[decimal[32, 2, 3.00]] = 3\ndecimal_int_convert[decimal[32, 2, 3.20]] = false\n```",
    code: "@inline\ndef decimal_int_convert = rel_primitive_decimal_int_convert",
    children: [],
  },
  {
    type: "definition",
    name: "rational_convert",
    docstring:
      "    rational_convert[n, x]\n\nConvert a number `x` to a rational with `n`-bit integer representation.\n\nAny type that supports `numerator` and `denominator` is supported.\n\nExamples:\n```rel\nrational_convert[64, 3]  =  (3//1,)\nrational_convert[64, decimal[64, 2, 0.75]]  =  (3//4,)\n```",
    code: "@inline\ndef rational_convert[n, a] =\n    rational[n, numerator[a], denominator[a]]",
    children: [],
  },
  {
    type: "definition",
    name: "uint128_uint64_truncate",
    docstring:
      "    uint128_uint64_truncate[v]\n\nTruncates `v` of type `UInt128` to a `UInt64` number.\n\nTruncates the high order bits in `v` and converts the remaining bits to UInt64.\nTruncate always succeeds. For values larger than 2^64, consists of only the lower bits.\n\nExamples:\n```rel\nuint128_uint64_truncate[uint128[1]] = 1\nuint128_uint64_truncate[uint128[2] ^ 64 + uint128[1]] = 1\n```",
    code: "@inline\ndef uint128_uint64_truncate = rel_primitive_uint128_uint64_truncate",
    children: [],
  },
  {
    type: "definition",
    name: "Any",
    docstring:
      '\n    Any(x)\n\nHolds for any `x`, where `x` exists. (`Any` functions as a wildcard.)\n\nExample:\n\nIntegrity constraint that tests whether `x` is of any type:\n\n```rel\ndef R = (1, 3) ; (1, "foo")\n\nic any_ic {subset(R, (Int, Any) )}\n```',
    code: "@inline\ndef Any(x) = true",
    children: [],
  },
  {
    type: "definition",
    name: "Number",
    docstring:
      "    Number(x)\n\nHolds if `x` is a number (for example, `Int` ,`Float`, or their fixed-width versions).\n\nSee also: `Int` and `Float` in `intrinsics.rel`.\n\nExample:\n\nIntegrity constraint that tests whether `x` is of type `Number` (throws if `x` is not of type `Number`):\n\n```rel\ndef R  = {1; 1.5; uint[8,3]; 4; float[32, 1.321]}\n\nic number_ic { subset(R, Number) }\n```",
    code: "@inline\ndef Number = rel_primitive_Number",
    children: [],
  },
  {
    type: "definition",
    name: "Pattern",
    docstring:
      '    Pattern(x)\n\nHolds if `x` is of type `Pattern`, which is a compiled regular expression (see `regex_compile`).\n\nExample:\n\nIntegrity constraint that tests whether `x` is of type `Pattern`:\n\n```rel\ndef R  = regex_compile["a.*b"]\n\nic pattern_ic(x in R) {\n    Pattern(x)\n}\n```\n',
    code: "@inline\ndef Pattern = rel_primitive_Pattern",
    children: [],
  },
  {
    type: "definition",
    name: "Char",
    docstring:
      "    Char(x)\n\nHolds if `x` is of type `Char`, which has a Unicode character as its value and is specified with single quotes.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is of type `Char`:\n\n```rel\ndef R = 't'\n\nic mychar_ic(x in R)\n    Char(x)\n}\n```\nSchema defined in a relation using `Char`:\n\n```rel\ndef myrelation(x in Char, y in Int) {\n    x = 'a' and y = 123\n}\n\ndef output = myrelation\n//output> (a, 123)\n```",
    code: "@inline\ndef Char = rel_primitive_Char",
    children: [],
  },
  {
    type: "definition",
    name: "String",
    docstring:
      '    String(x)\n\nHolds if `x` is a `String`. Strings are specified by double quotes, for example, `"abc"`.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is of type `String`:\n\n```rel\ndef R = "foo"\n\nic string_type_check(x in R) {\n    String(x)\n}\n```\n\nSchema defined in a relation using `String`:\n\n```rel\ndef myrelation(x in String, y in Int) {\n    x = "abc" and y = 123\n}\n\ndef output = myrelation\n//output> (abc, 123)\n```',
    code: "@inline\ndef String = rel_primitive_String",
    children: [],
  },
  {
    type: "definition",
    name: "Missing",
    docstring:
      "    Missing(x)\n\nTests whether `x` has the data type `Missing`.\n\nThe only data value that is of type `Missing` is `missing`.\nUsed for imported data that contains explicit nulls (such as JSON data).\n\nNote: `Missing` (with a capital) refers to the data type, while `missing` is the data itself.\n\nExamples:\n\nQuery that returns all relations without `missing` as the second argument:\n\n```rel\ndef R = { (1, 2); (3, missing) }\n\ndef output(x, y) = R(x, y) and not Missing(y)\n//output> (1, 2)\n```",
    code: "@inline\ndef Missing = rel_primitive_Missing",
    children: [],
  },
  {
    type: "definition",
    name: "Floating",
    docstring:
      "    Floating(nbits, x)\n\nHolds if `x` is an `nbits' floating point number.\n`Float(x)` is a shorthand that holds if `x` is a 64-bit float.\n\nExample:\n\nIntegrity constraint that tests if `x` is a 32-bit float (will throw if `x` is not a 32-bit Float):\n\n```rel\ndef R = float[32, 1.321]\n\nic float_type_check(x in R) {\n    Floating(32, x)\n}\n```",
    code: "@inline\ndef Floating = rel_primitive_Floating",
    children: [],
  },
  {
    type: "definition",
    name: "UnsignedInt",
    docstring:
      "    UnsignedInt(nbits, x)\n\nHolds if `x` is an unsigned integer of the bit length `nbits`.\n\nExample:\n\nIntegrity constraint that tests whether `x` is a 32-bit unsigned integer:\n\n```rel\ndef my_unsigned_int = uint[32, 1234]\n\nic my_unsigned_ic(x) {\n    my_unsigned_int(x) implies UnsignedInt(32, x)\n}\n```",
    code: "@inline\ndef UnsignedInt = rel_primitive_UnsignedInt",
    children: [],
  },
  {
    type: "definition",
    name: "SignedInt",
    docstring:
      "    SignedInt(nbits, x)\n\nHolds if `x` is an `nbits` signed integer.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is an 8-bit signed integer:\n\n```rel\ndef R = int[8, 5]\n\nic unsigned_type_check(x in R) {\n    SignedInt(8, x)\n}\n```",
    code: "@inline\ndef SignedInt = rel_primitive_SignedInt",
    children: [],
  },
  {
    type: "definition",
    name: "Rational",
    docstring:
      "    Rational(nbits, x)\n\nHolds if `x` is an `nbits` rational constructed with `rational[nbits, numerator, denominator]`.\n\nExample:\n\nQuery that checks that `x` is of type Rational with a bit size of `nbits`, a numerator of `-5`, and a denominator of `-7`:\n\n```rel\ndef my_rational = rational[16, -5, -7]\n\ndef output(x) = my_rational(x) and Rational(16, x)\n//output> 5/7\n```",
    code: "@inline\ndef Rational = rel_primitive_Rational",
    children: [],
  },
  {
    type: "definition",
    name: "FixedDecimal",
    docstring:
      "    FixedDecimal(nbits, ndecimals, x)\n\nHolds if `x` is of type `FixedDecimal` with a bit size of `nbits` and `ndecimals` decimal precision.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is a `FixedDecimal` with a bit size of `64` and `4` decimal precision:\n\n```rel\ndef R = decimal[64, 4, pi_float64]\n\nic float_type_check(x in R) {\n    FixedDecimal(64, 4, x)\n}\n```\nQuery to check whether `x` is a `FixedDecimal` with a bit size of `64` and `4` decimal precision.\n\n```rel\ndef R = {decimal[64, 4, pi_float64]; decimal[64, 10, pi_float64]}\n\ndef output(x) = R(x) and FixedDecimal(64, 4, x)\n//output> 3.1416\n```",
    code: "@inline\ndef FixedDecimal = rel_primitive_FixedDecimal",
    children: [],
  },
  {
    type: "definition",
    name: "RelName",
    docstring:
      "    RelName(x)\n\nHolds if `x` is a relation name.\n\nExamples:\n\nIntegrity constraint that specifies that a module always contains a `RelName` and an integer:\n\n```rel\ndef mymodule:f = 1\n\nic { subset(mymodule, (RelName, Int)) }\n\ndef output = mymodule\n//output> (:f, 1)\n```",
    code: "@inline\ndef RelName = rel_primitive_RelName",
    children: [],
  },
  {
    type: "definition",
    name: "Entity",
    docstring:
      "    Entity(x)\n\nHolds if `x` is an entity.\n\nExample:\n\nIntegrity constraint that specifies that a module always contains an entity:\n\n```rel\ndef myentity:f = 1\n\nic my_entity_ic(x) { myentity(x) implies Entity(x) }\n```",
    code: "@inline\ndef Entity = rel_primitive_Entity",
    children: [],
  },
  {
    type: "definition",
    name: "AutoNumber",
    docstring:
      "    AutoNumber(x)\n\n## DEPRECATED\nThis function is deprecated and should be avoided. It will be removed soon.\n\nTest if the given value is an AutoNumberValue.",
    code: "@inline\ndef AutoNumber = rel_primitive_AutoNumberValue",
    children: [],
  },
  {
    type: "definition",
    name: "Hash",
    docstring:
      '    Hash(x)\n\nHolds if `x` is a RelationalAI HashValue generated by `hash128`.\n\nExamples:\n\nIntegrity constraint that tests whether `x` is Hash (will throw if `x` is not Hash):\n\n```rel\ndef R = (9, "a")\n\ndef my_hash = hash128[R]\n//three value relation with hash value as third value\n\nic hash_type_check{\n    subset(my_hash, (Any, Any, Hash))\n}\n```\nDefines Hash as schema for a relation:\n\n```rel\ndef R = (9, "a")\ndef my_hash = hash128[R]\ndef hashed_relation(x in Hash) = my_hash(_, _, x)\n\ndef output = hashed_relation\n//output> -107770920621774551289984725953057040743\n```',
    code: "@inline\ndef Hash = rel_primitive_HashValue",
    children: [],
  },
  {
    type: "definition",
    name: "FilePos",
    docstring:
      '    FilePos(x)\n\nHolds if the given value is a FilePos, which are types created when importing CSV files.\nFilePos types are used as keys when joining columns from the same row.\nCurrently, users cannot directly create this data type themselves.\n\nExample:\n\nIntegrity constraint that specifies that a relation called `csv` contains values with `RelName`, `FilePos`, and `String`.\n\n```rel\ndef config:data = \\"""\n   item, category\n   laptop, computer\n   monitor, peripheral\n   \\"""\n\ndef csv = load_csv[config]\n//FilePos automatically generated\n\ndef csv_ic {\n    subset(csv, (RelName, FilePos, String))\n}\n```',
    code: "@inline\ndef FilePos = rel_primitive_FilePos\n\n// Temporary alias for backward compatibility\n@inline\ndef delve_period_days = rel_primitive_period_days\n\n// Temporary alias for backward compatibility\n@inline\ndef delve_date_daysinmonth = rel_primitive_date_daysinmonth",
    children: [],
  },
  {
    type: "definition",
    name: "int_spread_by_even",
    docstring:
      '    int_spread_by_even[R, value]\n\nSpreads `value` to the entries in the relation `R` evenly as whole units.\nIf the value to spread = `50` and `R` has 5 elements, each element will\nget `10`. In case of uneven spread (e.g. spread 51 to 5 elements), the\nremainder gets distributed as single units in order starting from the first\nelement after the relation has been sorted lexicographically (for details\nsee `sort`).\n\nEmpty if `value` is negative.\n\nExample:\n```rel\ndef R = {("Atlanta", "Georgia");\n    ("Seattle", "Washington");\n    ("San Francisco", "California")}\n\ndef output = int_spread_by_even[R, 32]\n("Atlanta", "Georgia", 11)\n("San Francisco", "California", 11)\n("Seattle", "Washington", 10)\n```',
    code: "@inline\ndef int_spread_by_even[R, val] = v..., s:\n    Int(val) and\n    R(v...) and\n    val >= 0 and\n    c = count[R] and\n    sort[R](i, v...) and\n    (\n        (i <= remainder[val, c] and s = trunc_divide[val, c] + 1) or\n        (i > remainder[val, c] and s = trunc_divide[val, c])\n    )\n    from i, c",
    children: [],
  },
  {
    type: "definition",
    name: "int_spread_by_ratio",
    docstring:
      '    int_spread_by_ratio[R, value]\n\nSpreads `value` to the entries in the relation `R` proportionally to their\nweight (which is the last element in each tuple), as whole units. For\nexample, if the relation is `{("X",90); ("Y",10)}`, `"X"` will get `90%`\nof `value` and `"Y"` will get `10%`. Often, this split will result in a\ndecimal number, but we want to spread whole units. To resolve this issue,\nwe first distribute the floor value of the decimal number computed. The\nremainder gets distributed as single units in order starting from the\nelement that had the highest decimal value.\n\nEmpty if `value` is negative.\n\nExample:\n```\ndef R = {("Atlanta", "Georgia", 50);\n    ("Seattle", "Washington", 80);\n    ("San Francisco", "California", 10)}\n\ndef output = int_spread_by_ratio[R, 30]\n("Atlanta", "Georgia", 11)\n("San Francisco", "California", 2)\n("Seattle", "Washington", 17)\n```',
    code: "@inline\ndef int_spread_by_ratio[R, val] = v..., s:\n    Int(val) and\n    R(v..., w) and\n    val >= 0 and\n    forall(t in last[R] : t > 0) and\n    s = floor_to_int[val * (w / sum[R])] + offset and\n    sort[(rr, vv...) : rr = remainder[R[vv...] * val, sum[R]]](i, r, v...) and\n    c = val - sum[vv... : floor_to_int[val * (R[vv...] / sum[R])]] and\n    (\n        (offset = 1 and i >= count[R] - c + 1) or\n        (offset = 0 and i < count[R] - c + 1)\n    )\n    from w, i, r, c, offset",
    children: [],
  },
  {
    type: "definition",
    name: "FixedDecimal_spread",
    docstring:
      '    FixedDecimal_spread[mode, R, val]\n\nThis definition uses the two spread strategies implemented in `int_spread_by_even`\nand `int_spread_by_ratio` but specialized to input value that is a FixedDecimal.\nThe major difference here is that in the integer case, the smallest unit to spread\nwas `1`, whereas here, the smallest unit to spread is `10^(-d)` where `d` is the\nnumber of digits used in the `FixedDecimal` value `val`. For example, if we are\ntrying to spread the value `3.140`, the smallest unit to spread will be `0.001`.\n`mode` can be `:even` or `:ratio`.\n\nExample:\n```rel\ndef R = {("Atlanta", "Georgia", 50);\n    ("Seattle", "Washington", 80);\n    ("San Francisco", "California", 10)}\n\ndef output = FixedDecimal_spread[:even, R, decimal[64, 3, 3.14]]\n("Atlanta", "Georgia", 1.047)\n("San Francisco", "California", 1.047)\n("Seattle", "Washington", 1.046)\n```',
    code: "@inline\ndef FixedDecimal_spread[mode, R, val] = v..., s:\n    rel_primitive_decimal_type(val, decimal_bit_length[val], decimal_precision[val]) and\n    den = denominator[val] and\n    digits = floor_to_int[log10[den]] and\n    valinput = numerator[val] and\n    (\n        (mode = :even and s = int_spread_by_even[R, valinput][v...] / den) or\n        (mode = :ratio and s = int_spread_by_ratio[R, valinput][v...] / den)\n    )\n    from valinput, digits, den",
    children: [],
  },
  {
    type: "definition",
    name: "spread",
    docstring:
      '    spread[mode, R, val]\n\nThis definition unifies the spread definitions on integers and FixedDecimal values\nusing the two spreading strategies. Namely, this definition wraps\n`FixedDecimal_spread`, `int_spread_by_even`, and `int_spread_by_ratio`.\n\n\n`mode` can be `:even` for even spread, or `:ratio` for ratio spread.\n`R` is the relation to execute the spread on.\n`val` is the value to spread.\n\nExample:\n```rel\ndef R = {("Atlanta", "Georgia", 50);\n    ("Seattle", "Washington", 80);\n    ("San Francisco", "California", 10)}\n\ndef out1 = spread[:even, R, decimal[64, 3, 31.0]]\n("Atlanta", "Georgia", 50, 10.334)\n("San Francisco", "California", 10, 10.333)\n("Seattle", "Washington", 80, 10.333)\n\ndef out2 = spread[:even, R, 31]\n("Atlanta", "Georgia", 50, 11)\n("San Francisco", "California", 10, 10)\n("Seattle", "Washington", 80, 10)\n```',
    code: "@inline\ndef spread[mode, R, val](v...) =\n(\n    (Int(val) and mode = :even and int_spread_by_even[R, val](v...)) or\n    (Int(val) and mode = :ratio and int_spread_by_ratio[R, val](v...)) or\n    (\n        rel_primitive_decimal_type(val, decimal_bit_length[val], decimal_precision[val]) and\n        FixedDecimal_spread[mode, R, val](v...)\n    )\n)",
    children: [],
  },
  {
    type: "definition",
    name: "formula_card_est",
    docstring:
      "    formula_card_est[R]\n\nThe cardinality estimate of a given relational abstraction `R` as estimated by the\nphysical query optimizer. The estimate is represented as a `Float`. It is typically\nan upper bound on the actual cardinality and can suffer from a numeric overflow, e.g. if the\nformula `R` is a big cross-product of relations. To avoid this, use the log-version\n`log_card_est[R]`. See `log_card_est` for more details.\n\nExamples:\n```\ndef card = formula_card_est[R]\ndef card = formula_card_est[a, b, c: R(a, b) and S(b, c) and T(a, c)]\n```",
    code: "@inline\ndef formula_card_est[R] = 2.0 ^ rel_log_card_est[R]",
    children: [],
  },
  {
    type: "definition",
    name: "log_card_est",
    docstring:
      "    log_card_est[R]\n\nThe log base 2 of the cardinality estimate of a given relational abstraction `R`.",
    code: "@inline\ndef log_card_est[R] = rel_log_card_est[R]",
    children: [],
  },
  {
    type: "definition",
    name: "soundex",
    docstring:
      '    soundex[string_value]\n\n`soundex` returns a 4-letter encoding the phonetic representation of `string_value`.\n`soundex` lets you compare words and sentences based on how they sound in English.\n\n`string_value` could be any arbitrary long string, but only the first few syllables are\nconsidered for the result\n\nExamples:\n```rel\ndef output = soundex["Smith"]\n"s530"\n\ndef output = soundex["Smythe"]\n"s530"\n\ndef output = soundex["Christina"]\n"c623"\n\ndef output = soundex["Cristine"]\n"c623"\n```\n\nHere a simple illustration. Consider the following:\n```\ndef my_favorite_bands = { "Metallica"; "Iron Maiden"; "Wolfheart"; "Insomium" }\ndef do_I_like = "Mee ta li ka"\ndef output = exists({ y : soundex[my_favorite_bands][y] and equal(y, soundex[do_I_like]) })\n```\nthe script above evaluates to true since `"Mee ta li ka"` and\n`"Metallica"` have the same soundex code.\n',
    code: "@inline\ndef soundex = rel_primitive_soundex",
    children: [],
  },
  {
    type: "definition",
    name: "metaphone",
    docstring:
      '    metaphone[string_value, length]\n\n`metaphone` returns an encoding of the phonetic representation of `string_value`.\n`metaphone` lets you compare words and sentences based on how they sound in English. The\nmetaphone is considered as an improvement of the `soundex` algorithm, and does a better job\nat matching words and names which sound\nsimilar.\n\n`string_value` could be any arbitrary long string.\n`length` is the length of the encoding that is used for comparison purpose. A length of `4`\nis commonly used.\n\nExamples:\n```rel\ndef output = metaphone["Smith", 4]\n"sm0"\n\ndef output = metaphone["Smythe", 4]\n"sm0"\n\ndef output = metaphone["Christina", 4]\n"xrst"\n\ndef output = metaphone["Cristine", 4]\n"krst"\n\ndef output = metaphone["I like Music", 4]\n"ilkm"\n\ndef output = metaphone["i loak Museek", 4]\n"ilkm"\n\ndef output = metaphone["RelationalAI", 4]\n"rlxn"\n\ndef output = metaphone["rellationalleAI", 4]\n"rlxn"\n```\n\nHere a simple illustration. Consider the following:\n```\ndef my_favorite_bands = { "Metallica"; "Iron Maiden"; "Wolfheart"; "Insomium" }\ndef do_I_like = "Mee ta li ka"\ndef output = {y in my_favorite_bands : metaphone(do_I_like, 4, z), metaphone[y, 4] = z from z}\n```\nthe script above returns `"Metallica"` since since `"Mee ta li ka"` and `"Metallica"` have\nthe same metaphone code.',
    code: "@inline\ndef metaphone = rel_primitive_metaphone",
    children: [],
  },
  {
    type: "definition",
    name: "double_metaphone",
    docstring:
      '    double_metaphone[string_value]\n    double_metaphone_alt[string_value]\n\nDouble Metaphone is an improvement\nof `metaphone` that considers spelling particularities in a number of other languages.\n`double_metaphone` and `double_metaphone_alt` returns an encoding of\nthe phonetic representation of `string_value`. For many strings, `double_metaphone` and\n`double_metaphone_alt` returns the very same encoding. However, it may differs based on the\nspelling in a non-English language.\n\n`string_value` could be any arbitrary long string\n\nExamples:\n```rel\n@inline def dm[string] = double_metaphone[string] ; double_metaphone_alt[string]\n\ndef output = dm["Smith"]\n"sm0"\n\ndef output = dm["Smythe"]\n"sm0"\n"xmt"\n\ndef output = dm["Christina"]\n"krstn"\n\ndef output = dm["Cristine"]\n"krstn"\n\ndef output = dm["I like Music"]\n"ilkm"\n\ndef output = dm["i loak Museek"]\n"ilkm"\n\ndef output = dm["RelationalAI"]\n"rlxnl"\n\ndef output = dm["rellationalleAI"]\n"rlxnl"\n```\n',
    code: "@inline\ndef double_metaphone = rel_primitive_double_metaphone\n\n@inline\ndef double_metaphone_alt = rel_primitive_double_metaphone_alt",
    children: [],
  },
  {
    type: "definition",
    name: "model_is_function",
    docstring:
      "    ic model_is_function\n\nAn integrity constraint ensuring that `rel:catalog:model` has a functional dependency\nfrom the name to the actual value.",
    code: "ic model_is_function(k) { function(rel:catalog:model[k]) }",
    children: [],
  },
  {
    type: "module",
    name: "vega",
    docstring:
      '    vega\n\nModule containing a function to display a relation `R` as a *Vega chart*, if supported by the\nclient.\n\n- `plot[R]`: Given a relation representing a full JSON Vega schema, richly render it as a\n  Vega chart. See the [Vega docs](https://vega.github.io/vega/) for more information on\n  creating a Vega schema.\n\n# Example\n```rel\ndef chart:width = 200\ndef chart:height = 200\ndef chart[:data, :[], 1] = {\n  (:name, "table");\n  :values, :[], {\n    (1, :x, 1);\n    (1, :y, 28);\n    (2, :x, 3);\n    (2, :y, 55);\n    (3, :x, 5);\n    (3, :y, 43)\n  }\n}\ndef chart[:scales, :[], 1] = {\n  (:name, "xscale");\n  (:domain, {(:data, "table"); (:field, "x")});\n  (:range, "width");\n}\ndef chart[:scales, :[], 2] = {\n  (:name, "yscale");\n  (:domain, {(:data, "table"); (:field, "y")});\n  (:range, "height");\n}\ndef chart[:marks, :[], 1] = {\n  (:type, "line");\n  (:from, :data, "table");\n  (:encode, :enter, {\n    (:x, {(:scale, "xscale"); (:field, "x")});\n    (:y, {(:scale, "yscale"); (:field, "y")})\n  })\n}\n\ndef output = vega:plot[chart]\n```\nOutputs the custom Rel Vega MIME type along with the chart relation tuples, for the plot to\nbe rendered by Vega in a client.\n\nNote: a `false` value entered in one of the chart tuples (e.g. setting\n`/:scales/:[]/1/:zero` to `false`) will get compiled away and not exist in the specification\nat plot time.  However, a `false` value loaded from JSON will not get compiled away - see\nthe example below:\n\n```rel\ndef chart = parse_json[\\"\\"\\"\n{\n  "width": 200,\n  "height": 200,\n\n  "data": [\n    {\n      "name": "table"\n    }\n  ],\n\n  "scales": [\n    {\n      "name": "xscale",\n      "domain": {"data": "table", "field": "x"},\n      "range": "width",\n      "zero": false\n    },\n    {\n      "name": "yscale",\n      "domain": {"data": "table", "field": "y"},\n      "range": "height"\n    }\n  ],\n\n  "marks": [\n    {\n      "type": "line",\n      "from": {"data":"table"},\n      "encode": {\n        "enter": {\n          "x": {"scale": "xscale", "field": "x"},\n          "y": {"scale": "yscale", "field": "y"}\n        }\n      }\n    }\n  ]\n}\n\\"\\"\\"]\n\ndef data = {(1, 28); (3, 55); (5, 43)}\ndef chart[:data][:[]][1][:values][:[]][i] =\n  {(:x, x); (:y, y)} from x,y where enumerate[data](i, x, y)\n\ndef output = vega:plot[chart]\n```\nCombines the Vega JSON specification without data, with data defined in Rel.  Outputs the\ncustom Rel Vega MIME type along with the chart relation tuples.\n\n## See Also:\n- `vegalite`',
    code: "@inline\nmodule vega\n  def plot[R] = {\n    :MIME, MIME_REL_VEGA;\n    // This logic makes no assumptions on the valid json-structure of the relation R;\n    // instead that is checked in the front-end display.\n    :plot, :vega, R\n  }",
    children: [],
  },
  {
    type: "definition",
    name: "MIME_REL_VEGA",
    docstring: "",
    code: '\n// Custom MIME type that indicates the relation should be interpreted as a Vega plot.\n@inline\ndef MIME_REL_VEGA = "application/vnd.rel.relation.plot.vega.v5"',
    children: [],
  },
  {
    type: "module",
    name: "vegalite",
    docstring:
      '    vegalite\n\nModule containing a function to display a relation `R` as a *Vega-Lite chart*, if supported by\nthe client, as well as convenience functions for constructing relations to be plotted.\n\n## Display function\n- `plot[R]`: Given a relation representing a full JSON Vega-Lite schema, richly render it as\n  a Vega-Lite chart. See the [Vega-Lite docs](https://vega.github.io/vega-lite/) for more\n  information on creating a Vega-Lite schema.\n\n## Convenience functions\n\nThe convenience functions build upon the `vegalite_utils` and `templates` to provide a simpler\ninterface to generate common plot types. All convenience functions take in required arguments\nfor that type of plot, along with a `CONFIG` relation, which includes the data. They each output\na JSON relation, which can then be plotted with the `plot` display function, or further\nmodified by overloading the relation or overriding specific values (see `right_override`).\n\n- `bar[X, Y, CONFIG]`: Given an `X` relation specifying the `x` field (categorical data), a\n  `Y` relation specifying the `y` field (quantitative data), and a `CONFIG` relation (see the section on `CONFIG` below),\n  gives a relation specifying a bar chart in vegalite.\n- `scatter[X, Y, CONFIG]`: Given an `X` relation specifying the `x` field (quantitative data), a\n  `Y` relation specifying the `y` field (quantitative data), and a `CONFIG` relation (see the section on `CONFIG` below),\n  gives a relation specifying a scatter chart in vegalite.\n- `line[X, Y, CONFIG]`: Given an `X` relation specifying the `x` field (quantitative data), a\n  `Y` relation specifying the `y` field (quantitative data), and a `CONFIG` relation (see the section on `CONFIG` below),\n  gives a relation specifying a scatter chart in vegalite.\n\nThe convenience functions generally combine encoding functions from `vegalite_utils` along\nwith other utilities with the corresponding `vegalite_templates` template.  The `CONFIG` relation\nrequires the `(:data, DATA)` tuple at a minimum, but can also include tuples with any\n`vegalite_utils` utility name and its arguments (e.g. `(:width, 500)`, `(:x, :axis, :orient, "top")`)\n\n## Examples\n\n### Specify a full JSON Relation\n```rel\ndef chart[:data, :values, :[]] = {\n  (1, :a, "A");\n  (1, :b, 28);\n  (2, :a, "B");\n  (2, :b, 55);\n  (3, :a, "C");\n  (3, :b, 43)\n}\ndef chart[:mark, :type] = "bar"\ndef chart[:mark, :tooltip] = boolean_true // Note: JSON `boolean_true` / `boolean_false`\ndef chart[:encoding, :x] = {\n  (:field, "a");\n  (:type, "nominal");\n  (:axis, :labelAngle, 0)\n}\ndef chart[:encoding, :y] = {\n  (:field, "b");\n  (:type, "quantitative")\n}\n\ndef output = vegalite:plot[chart]\n```\nOutputs the custom Rel Vega-Lite MIME type along with the chart relation tuples, for the plot\nto be rendered by Vega-Lite in a client.\n\nNote: JSON-value relations require boolean_true / boolean_false values in tuples (e.g. setting `:tooltip` to\n`boolean_false`), not the logical `true` / `false` used in Formulas. Logical true / false cannot be used as values.\n\n### Read in JSON example then add data\n```rel\ndef chart = parse_json[\\"\\"\\"{\n  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",\n  "description": "A simple bar chart with embedded data.",\n  "mark": {"type": "bar", "tooltip": false},\n  "encoding": {\n    "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},\n    "y": {"field": "b", "type": "quantitative"}\n  }\n}\\"\\"\\"]\n\ndef data = {("A", 28); ("B", 55); ("C", 43)}\ndef chart[:data][:values][:[]][i] =\n  {(:a, a); (:b, b)} from a,b where enumerate[data](i, a, b)\n\ndef output = vegalite:plot[chart]\n```\nCombines the Vega-Lite JSON specification without data, with data defined in Rel.  Outputs\nthe custom Rel Vega-Lite MIME type along with the chart relation tuples.\n\n### Simple bar chart\n```rel\ndef data:letter = {(1, "A"); (2, "B"); (3, "C")}\ndef data:number = {(1, 24); (2, 67); (3, 43)}\n\ndef chart = vegalite:bar[:letter, :number, {:data, data}]\ndef output = vegalite:plot[chart]\n```\nThe data is defined in the `(field, keys..., value)` format (same format used by `load_csv`),\nand then plotted with the categorical `letter` field on the x axis and the\nquantitative `number` field on the y axis.\n\n### Complex bar chart from CSV data\n```rel\n// from the "Machine Learning (Classification)" How-To guide\ndef file_config[:path] = "s3://relationalai-documentation-public/ml-classification/penguin/penguins_size.csv"\n\ndef file_config[:schema, :species] = "string"\ndef file_config[:schema, :island] = "string"\ndef file_config[:schema, :culmen_length_mm] = "float"\ndef file_config[:schema, :culmen_depth_mm] = "float"\ndef file_config[:schema, :flipper_length_mm] = "float"\ndef file_config[:schema, :body_mass_g] = "float"\ndef file_config[:schema, :sex] = "string"\n\ndef chart_config:data = lined_csv[load_csv[file_config]]\ndef chart_config:color = {(:sex); (:title, "Sex"); (:scale, :schema, "dark2")}\ndef chart_config:y = {:title, "Count of Penguins"}\ndef chart_config:title = "🐧"\n\ndef chart = vegalite:bar[\n  :species,\n  {:aggregate, "count"},\n  chart_config\n]\n\ndef output = vegalite:plot[chart]\n```\nOutputs a stacked barchart of the count of penguins broken down by species (bar height) and\nsex (color within each bar).\n\nThe x axis field is set using the fieldname `:species`.\n\nThe `{:aggregate, "count"}` is using [aggregate encoding](https://vega.github.io/vega-lite/docs/aggregate.html) to plot the number of records for each `:species` on the y axis instead of\na field directly.\n\nThe `:color` encoding is doing three things:\n  1. Creating the stacking of the bar chart by coloring each bar by the `:sex` breakdown within each `:species`, grouping the chart data by `:sex`.\n  2. The `(:color, :title)` is being set to `"Sex"`, which will update the title of the legend (included by default) as well as the field name displayed in the tooltip (included with the `vegalite_templates:bar` relation).\n  3. The color scheme is being changed from the default (`"tableau10"`) to the `"dark2"` scheme.\n  See the [Vega documentation](https://vega.github.io/vega/docs/schemes/) for the full list\n  of color schemes available.\n\nThe `(:y, :title, "Count of Penguins")` relation is setting the title of the y axis to `"Count\nof Penguins"`.  This also updates the field name displayed in the tooltip.\n\nThe `(:title, "🐧")` relation sets a title for the chart.\n\n## See Also:\n- `vega`\n- `vegalite_utils`\n- `vegalite_templates`\n- `right_override`\n- `load_csv`\n- `parse_json`',
    code: "@inline\nmodule vegalite",
    children: [
      {
        type: "definition",
        name: "plot",
        docstring:
          "    plot[R]\n\nCombine the Vega-Lite schema relation `R` with the Vega-Lite MIME type to be richly rendered\nby the client.",
        code: "  def plot[R] = {\n    :MIME, MIME_REL_VEGALITE;\n    // This logic makes no assumptions on the valid json-structure of the relation R;\n    // instead that is checked in the front-end display.\n    :plot, :vegalite, R\n  }",
        children: [],
      },
      {
        type: "definition",
        name: "bar",
        docstring:
          '    bar[X, Y, CONFIG]\n\nConstruct a Vega-Lite specification for a bar chart.\n\n## Arguments\n\n- `X`: A relation specifying the `x` field in the chart. Typically, a `RelName` (e.g.\n `:category`) will be passed to indicate the field in the `:data` to use as the `x` data. By\n  default, this is set to ["nominal"](https://vega.github.io/vega-lite/docs/type.html) data (i.e. categorical) and the chart\'s bars are sorted in ascending order by the value of this\n  field. Can accept any values accepted by the [`:x` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `Y`: A relation specifying the `y` field in the chart. Typically, a `RelName` (e.g.\n `:amount`) will be passed to indicate the field in the `:data` to use as the `y` data. An\n  [`:aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) tuple might be used\n  in addition to the field specified by a RelName (in the case of a `"mean"` of that field),\n  or instead of the field (in the case of a `"count"` of records). By default, this is\n  set to ["quantitative"](https://vega.github.io/vega-lite/docs/type.html) data. Can\n  accept any values accepted by the [`:y` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `CONFIG`: An overloaded relation with configuration for the chart. At a minimum, must\n  contain the `(:data, DATA)` tuple, where `DATA` is a relation in the column-wise\n  format `(field, keys..., value)`. Any tuple in the `CONFIG` relation can contain the\n  name of a utility from `vegalite_utils` along with the arguments to that utility.\n\n## Examples\n\n### Simple bar chart\n```rel\ndef data:letter = {(1, "A"); (2, "B"); (3, "C")}\ndef data:number = {(1, 24); (2, 67); (3, 43)}\n\ndef chart = vegalite:bar[:letter, :number, {:data, data}]\ndef output = vegalite:plot[chart]\n```\nThe data is defined in the `(field, keys..., value)` format (same format used by `load_csv`),\nand then plotted with the categorical `letter` field on the x axis and the\nquantitative `number` field on the y axis.\n\n### Complex bar chart from CSV data\n```rel\n// from the "Machine Learning (Classification)" How-To guide\ndef file_config[:path] = "s3://relationalai-documentation-public/ml-classification/penguin/penguins_size.csv"\n\ndef file_config[:schema, :species] = "string"\ndef file_config[:schema, :island] = "string"\ndef file_config[:schema, :culmen_length_mm] = "float"\ndef file_config[:schema, :culmen_depth_mm] = "float"\ndef file_config[:schema, :flipper_length_mm] = "float"\ndef file_config[:schema, :body_mass_g] = "float"\ndef file_config[:schema, :sex] = "string"\n\ndef chart_config:data = lined_csv[load_csv[file_config]]\ndef chart_config:color = {(:sex); (:title, "Sex"); (:scale, :schema, "dark2")}\ndef chart_config:y = {:title, "Count of Penguins"}\ndef chart_config:title = "🐧"\n\ndef chart = vegalite:bar[\n  :species,\n  {:aggregate, "count"},\n  chart_config\n]\n\ndef output = vegalite:plot[chart]\n```\nOutputs a stacked barchart of the count of penguins broken down by species (bar height) and\nsex (color within each bar).\n\nThe x axis field is set using the fieldname `:species`.\n\nThe `{:aggregate, "count"}` is using [aggregate encoding](https://vega.github.io/vega-lite/docs/aggregate.html) to plot the number of records for each `:species` on the y axis instead of\na field directly.\n\nThe `:color` encoding is doing three things:\n  1. creating the stacking of the bar chart by coloring each bar by the `:sex` breakdown within each `:species`.\n  2. The `:title` is being set to `"Sex"`, which will update the title of the legend (included by default) as well as the field name displayed in the tooltip (included with the `vegalite_templates:bar` relation).\n  3. The color scheme is being changed from the default (`"tableau10"`) to the `"dark2"` scheme.\n  See the [vega documentation](https://vega.github.io/vega/docs/schemes/) for the full list\n  of color schemes available.\n\nThe `(:y, :title, "Count of Penguins")` relation is setting the title of the y axis to `"Count\nof Penguins"`.  This also updates the field name displayed in the tooltip.\n\nThe `(:title, "🐧")` relation sets a title for the chart.\n\n### Simple bar chart with entity data\n```rel\nentity Country\ncountry_from_name = {\n    "United States";\n    "France";\n    "Iceland";\n}\n\ndef country:name(e, value) = country_from_name(value, e)\n\ndef country:population[e in country_from_name["Iceland"]] = 364134\ndef country:population[e in country_from_name["United States"]] = 328239523\ndef country:population[e in country_from_name["France"]] = 2931241\n\ndef chart = vegalite:bar[\n  :name,\n  :population,\n  {:data, country}\n]\ndef output = vegalite:plot[chart]\n```\nOutputs a bar chart with the country name on the x axis and the population on the y axis.\n\n### Horizontal bar chart sorted by value\n```rel\ndef data:letter = {(1, "A"); (2, "B"); (3, "C")}\ndef data:number = {(1, 24); (2, 67); (3, 43)}\n\ndef chart = vegalite:bar[\n  :number,\n  :letter,\n  {\n    (:data, data);\n    (:x, :type, "quantitative");\n    (:y, :type, "nominal");\n    (:sort, "-x")\n  }\n]\ndef output = vegalite:plot[chart]\n```\nOutputs a bar chart with horizontal bars of letter on the y axis vs number on the x axis.\nThe bars are sorted by the x value (number) in descending order.',
        code: "  def bar[X, Y, CONFIG] = {\n    vegalite_utils:x[X];\n    vegalite_utils:y[Y];\n    (vegalite_utils[util, CONFIG[util]] from util);\n  } <++ vegalite_templates:bar",
        children: [],
      },
      {
        type: "definition",
        name: "scatter",
        docstring:
          '    scatter[X, Y, CONFIG]\n\nConstruct a Vega-Lite specification for a scatter plot.\n\n## Arguments\n\n- `X`: A relation specifying the `x` field in the chart. Typically, a `RelName` (e.g.\n `:height`) will be passed to indicate the field in the `:data` to use as the `x` data. By\n  default, this is set to ["quantitative"](https://vega.github.io/vega-lite/docs/type.html) data (i.e. categorical).\n  Can accept any values accepted by the [`:x` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `Y`: A relation specifying the `y` field in the chart. Typically, a `RelName` (e.g.\n `:wingspan`) will be passed to indicate the field in the `:data` to use as the `y` data. An\n  [`:aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) tuple might be used\n  in addition to the field specified by a RelName (in the case of a `"mean"` of that field),\n  or instead of the field (in the case of a `"count"` of records). By default, this is\n  set to ["quantitative"](https://vega.github.io/vega-lite/docs/type.html) data. Can\n  accept any values accepted by the [`:y` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `CONFIG`: An overloaded relation with configuration for the chart. At a minimum, must\n  contain the `(:data, DATA)` tuple, where `DATA` is a relation in the column-wise\n  format `(field, keys..., value)`. Any tuple in the `CONFIG` relation can contain the\n  name of a utility from `vegalite_utils` along with the arguments to that utility.\n\n## Examples\n\n### Simple scatter plot\n```rel\ndef data:height = {(1, 102); (2, 94); (3, 74)}\ndef data:wingspan = {(1, 36.2); (2, 45.2); (3, 35.0)}\n\ndef chart = vegalite:scatter[:height, :wingspan, {:data, data}]\n\ndef output = vegalite:plot[chart]\n```\nThe data is defined in the `(field, keys..., value)` format (same format used by `load_csv`),\nand then plotted with the quantitative `height` field on the x axis and the\nquantitative `wingspan` field on the y axis.\n\n### Complex scatter plot from CSV data\n\nTranslated from the [Colored Scatterplot Vega-Lite example](https://vega.github.io/vega-lite/examples/point_color_with_shape.html).\n\n```rel\n// from the "Machine Learning (Classification)" How-To guide\ndef file_config[:path] = "s3://relationalai-documentation-public/ml-classification/penguin/penguins_size.csv"\n\ndef file_config[:schema, :species] = "string"\ndef file_config[:schema, :island] = "string"\ndef file_config[:schema, :culmen_length_mm] = "float"\ndef file_config[:schema, :culmen_depth_mm] = "float"\ndef file_config[:schema, :flipper_length_mm] = "float"\ndef file_config[:schema, :body_mass_g] = "float"\ndef file_config[:schema, :sex] = "string"\n\ndef chart_config:data = lined_csv[load_csv[config]]\ndef chart_config:color = :species\ndef chart_config:shape = :species\ndef chart_config:x = {(:title, "Flipper Length (mm)"); (:scale, :zero, boolean_false)}\ndef chart_config:y = {(:title, "Body Mass (g)"); (:scale, :zero, boolean_false)}\ndef chart_config:title = "🐧"\n\ndef chart = vegalite:scatter[\n  :flipper_length_mm,\n  :body_mass_g,\n  chart_config\n]\n\ndef output = vegalite:plot[chart]\n```\nOutputs a scatter plot of flipper length vs body mass with the points colored and shaped\nby the species.  A legend and tooltip are included by default.\n\nThe `X` and `Y` relations are simply the field names in the dataset in `:data, data`.\n\nThe `:species` is double encoded with the [`:color` and `:shape` property\nchannels](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop-field-def).\nEach species is assigned a unique shape and color, which are shown in the legend.\nThis has the effect of _grouping-by_ species in the plot.\n\nBoth the x and y axes have custom titles set (the default is the field name) and neither\n[includes zero in its domain](https://vega.github.io/vega-lite/docs/scale.html).\n\nThe `(:title, "🐧")` relation sets a title for the chart.\n\n### Set custom axis range\n```rel\ndef data:height = {(1, 102); (2, 94); (3, 74)}\ndef data:wingspan = {(1, 36.2); (2, 45.2); (3, 35.0)}\n\ndef chart = vegalite:scatter[\n  :height,\n  :wingspan,\n  {\n    :data, data;\n    :x, :scale, :domain, :[], {(1, 50); (2, 150)}\n  }\n]\n\ndef output = vegalite:plot[chart]\n```\nOutput a scatter plot with the x axis from 50 to 150 instead of from zero to the field\'s\nmaximum (the default).',
        code: "  def scatter[X, Y, CONFIG] = {\n    vegalite_utils:x[X];\n    vegalite_utils:y[Y];\n    (vegalite_utils[util, CONFIG[util]] from util);\n  } <++ vegalite_templates:scatter",
        children: [],
      },
      {
        type: "definition",
        name: "line",
        docstring:
          '    line[X, Y, CONFIG]\n\nConstruct a Vega-Lite specification for a line chart.\n\n## Arguments\n\n- `X`: A relation specifying the `x` field in the chart. Typically, a `RelName` (e.g.\n `:year`) will be passed to indicate the field in the `:data` to use as the `x` data. By\n  default, this is set to ["quantitative"](https://vega.github.io/vega-lite/docs/type.html) data (i.e. categorical).\n  Can accept any values accepted by the [`:x` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `Y`: A relation specifying the `y` field in the chart. Typically, a `RelName` (e.g.\n `:price`) will be passed to indicate the field in the `:data` to use as the `y` data. An\n  [`:aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html) tuple might be used\n  in addition to the field specified by a RelName (in the case of a `"mean"` of that field),\n  or instead of the field (in the case of a `"count"` of records). By default, this is\n  set to ["quantitative"](https://vega.github.io/vega-lite/docs/type.html) data. Can\n  accept any values accepted by the [`:y` encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#position-datum-def).\n- `CONFIG`: An overloaded relation with configuration for the chart. At a minimum, must\n  contain the `(:data, DATA)` tuple, where `DATA` is a relation in the column-wise\n  format `(field, keys..., value)`. Any tuple in the `CONFIG` relation can contain the\n  name of a utility from `vegalite_utils` along with the arguments to that utility.\n\n## Examples\n\n### Simple line plot\n```rel\ndef data:year = {(1, 1990); (2, 2000); (3, 2010)}\ndef data:price = {(1, 36.2); (2, 45.2); (3, 74.0)}\n\ndef chart = vegalite:line[:year, :price, {:data, data}]\n\ndef output = vegalite:plot[chart]\n```\nThe data is defined in the `(field, keys..., value)` format (same format used by `load_csv`),\nand then plotted with the quantitative `year` field on the x axis and the\nquantitative `price` field on the y axis.\n\n### Multi-line, colored line plot\n```rel\n// from the "Machine Learning (Regression)" How-To guide\ndef file_config[:path] = "s3://relationalai-documentation-public/ml-regression/airfoil/airfoil_self_noise.dat"\n\ndef file_config[:syntax, :header_row] = -1\ndef file_config[:syntax, :header] =\n    (1, :frequency);\n    (2, :angle);\n    (3, :chord_length);\n    (4, :velocity) ;\n    (5, :displacement) ;\n    (6, :sound)\n\ndef file_config[:syntax, :delim] = \'\\t\'\n\ndef file_config[:schema, :frequency] = "float"\ndef file_config[:schema, :angle] = "float"\ndef file_config[:schema, :chord_length] = "float"\ndef file_config[:schema, :velocity] = "float"\ndef file_config[:schema, :displacement] = "float"\ndef file_config[:schema, :sound] = "float"\n\ndef chart_config:data = lined_csv[load_csv[config]]\ndef chart_config:color = {(:chord_length); (:title, "Chord Length")}\ndef chart_config:strokeWidth = {(:velocity); (:type, "nominal")}\ndef chart_config:opacity = 0.8\ndef chart_config:y = {:scale, :zero, :boolean_false}\n\ndef chart = vegalite:line[\n  :angle,\n  {:sound; :aggregate, "mean"},\n  chart_config\n]\n\ndef output = vegalite:plot[chart]\n```\nOutputs a line plot of angle vs sound with the lines colored by chord_length and\nstrokeWidth\'ed by velocity.  A legend and tooltip are included by default.\n\nThe `X` relation is simply the field names in the dataset in `(:data, data)`.  The `Y`\nrelation is both a field name and an `(:aggregate, "mean")`, which sets the y axis to be\nthe mean of the field `:sound` instead of the raw data points.  The mean is grouped by\nboth `:chord_length` and `:velocity` due to the `:color` and `:strokeWidth` encodings.\n\nThe `:color` relation sets a custom title, which displays on the legend and the tooltip (included by default with the `vegalite_templates:line` relation).\n\nThe `:opacity` of the lines is set to `0.8`, making it easier to distinguish the densely\nclustered lines.\n\nThe `:y` encoding sets `(:scale, :zero, boolean_false)` so that the zero point is not\nincluded in the axis, which is the default for quantitative data.',
        code: "  def line[X, Y, CONFIG] = {\n    vegalite_utils:x[X];\n    vegalite_utils:y[Y];\n    (vegalite_utils[util, CONFIG[util]] from util);\n  } <++ vegalite_templates:line",
        children: [],
      },
    ],
  },
  {
    type: "definition",
    name: "MIME_REL_VEGALITE",
    docstring: "",
    code: '\n// Custom MIME type that indicates the relation should be interpreted as a Vega-Lite plot.\n@inline\ndef MIME_REL_VEGALITE = "application/vnd.rel.relation.plot.vegalite.v5"',
    children: [],
  },
  {
    type: "module",
    name: "vegalite_templates",
    docstring:
      "  vegalite_templates\n\nContains partial specifications to be used as templates for creating common types of\nVega-Lite charts:\n\n* `bar`: A bar chart with the categorical data on the x axis and quantitative on the y\n* `scatter`: A scatter plot with quantitative data on both axes\n* `line`: A line chart with quantitative date on both axes",
    code: "@inline\nmodule vegalite_templates",
    children: [
      {
        type: "definition",
        name: "bar",
        docstring:
          '    bar\n\nPartial specification for a Vega-Lite bar chart\n\n# Example\n```rel\ndef data:letter = {(1, "A"); (2, "B"); (3, "C")}\ndef data:number = {(1, 24); (2, 67); (3, 43)}\n\ndef chart = vegalite_utils:x[:letter]\ndef chart = vegalite_utils:y[:number]\ndef chart = vegalite_utils:data[data]\ndef chart = vegalite_templates:bar\n\ndef output = vegalite:plot[chart]\n```\nOutputs a bar chart with the letters on the x axis and the numbers on the y axis. The axis\ntitles match the field names and a tooltip is included in the template.',
        code: '  def bar = {\n    :mark, {:type, "bar"; :tooltip, boolean_true};\n    :encoding, :y, :type, "quantitative";\n    :encoding, :x, :type, "nominal";\n  }',
        children: [],
      },
      {
        type: "definition",
        name: "scatter",
        docstring:
          "    scatter\n\nPartial specification for a Vega-Lite scatter plot\n\n# Example\n```rel\ndef data:height = {(1, 102); (2, 94); (3, 74)}\ndef data:wingspan = {(1, 36.2); (2, 45.2); (3, 35.0)}\n\ndef chart = vegalite_utils:x[:height]\ndef chart = vegalite_utils:y[:wingspan]\ndef chart = vegalite_utils:data[data]\ndef chart = vegalite_templates:scatter\n\ndef output = vegalite:plot[chart]\n```\nOutputs a scatter plot with the height on the x axis and the wingspan on the y axis and\neach (height, wingspan) pair is a point on the chart. The axis titles match the field\nnames and a tooltip is included in the template.",
        code: '  def scatter = {\n    :mark, {:type, "point"; :tooltip, boolean_true};\n    :encoding, :y, :type, "quantitative";\n    :encoding, :x, :type, "quantitative";\n  }',
        children: [],
      },
      {
        type: "definition",
        name: "line",
        docstring:
          "    line\n\nPartial specification for a Vega-Lite line chart\n\n# Example\n```rel\ndef data:year = {(1, 1990); (2, 2000); (3, 2010)}\ndef data:price = {(1, 36.2); (2, 45.2); (3, 74.0)}\n\ndef chart = vegalite_utils:x[:year]\ndef chart = vegalite_utils:y[:price]\ndef chart = vegalite_utils:data[data]\ndef chart = vegalite_templates:line\n\ndef output = vegalite:plot[chart]\n```\nOutputs a line plot with the year on the x axis and the price on the y axis and each\n(year, price) pair is connected by a line on the chart. The axis titles match the field\nnames and a tooltip is included in the template.",
        code: '  def line = {\n    :mark, {:type, "line"; :tooltip, boolean_true};\n    :encoding, :y, :type, "quantitative";\n    :encoding, :x, :type, "quantitative";\n  }',
        children: [],
      },
    ],
  },
  {
    type: "module",
    name: "_vegalite_utils",
    docstring: "",
    code: "\n\n//////////////////////////////////////////////////////////////////////////////////////////\n// Internal utility functions for generating user-facing `vegalite_utils`\n@inline\nmodule _vegalite_utils\n  // If the CONFIG is a unary relation with type RelName, assume it is adding a `field`\n  def encoding[channel, CONFIG] = {\n    :encoding, channel, :field, relname_string[field]\n    from field where CONFIG(field) and RelName(field)\n  }\n\n  // If the CONFIG is a unary relation of any type other than RelName, assume it is a `value`\n  def encoding[channel, CONFIG] = {\n    :encoding, channel, :value, value\n    from value where CONFIG(value) and not(RelName(value))\n  }\n\n  // If the CONFIG is a 2+ary relation, assume it is json keys to add to the encoding\n  def encoding[channel, CONFIG] = {:encoding, channel, k, v, CONFIG[k, v] from k, v}",
    children: [],
  },
  {
    type: "module",
    name: "vegalite_utils",
    docstring:
      "    vegalite_utils\n\nUtility functions for building Vega-Lite specifications. Most functions correspond to either\na top-level or encoding key in the Vega-Lite specification.",
    code: "@inline\nmodule vegalite_utils\n  with _vegalite_utils use encoding",
    children: [
      {
        type: "definition",
        name: "data",
        docstring:
          '    data[DATA]\n\nTakes the overloaded relation DATA with the column-wise format (field, keys..., value)\nand adds the values as an array in the top-level `data` key.\n\nThe `field` is expected to be a `RelName` (e.g. `:price`), the `keys...` and `value` can\nbe any type except for `RelName`.\n\nGives a relation that defines [inline data](https://vega.github.io/vega-lite/docs/data.html#inline)\nfor the Vega-Lite spec.\n\n## Examples\n\n### `(field, key, value)` data\n```rel\ndef data:year = {(1, 1990); (2, 2000); (3, 2010)}\ndef data:price = {(1, 36.2); (2, 45.2); (3, 74.0)}\n\ndef output = vegalite_utils:data[data]\n```\nOutputs the data organized as (position, field, value) and prepended with the keys\n`:data`, `:values`, `:[]`.\n\n### `(field, keys..., value)` data\n```rel\ndef data:year = {(1, 1990); (2, 2000); (3, 2010)}\ndef data:price = {(1, "shoes", 36.2); (2, "coats", 45.2); (3, "ties", 74.0)}\n\ndef output = vegalite_utils:data[data]\n```\nOutputs the data organized as (position, field, value) and prepended with the keys\n`:data`, `:values`, `:[]`.\n\n### `(field, entity, value)` data\n```rel\nentity Country\ncountry_from_name = {\n    "United States";\n    "France";\n    "Iceland";\n}\n\ndef country:name(e, value) = country_from_name(value, e)\n\ndef country:population[e in country_from_name["Iceland"]] = 364134\ndef country:population[e in country_from_name["United States"]] = 328239523\ndef country:population[e in country_from_name["France"]] = 2931241\n\ndef output = vegalite_utils:data[country]\n```\nOutputs the data organized as (position, field, value) and prepended with the keys\n`:data`, `:values`, `:[]`.\n\n### `(key, field, value)` data (row-wise)\n```rel\ndef data = {\n  1, {(:year, 1990); (:price, 36.2)};\n  2, {(:year, 2000); (:price, 45.2)};\n  3, {(:year, 2010); (:price, 74.0)};\n}\n\ndef output = vegalite_utils:data[{field, key, value : data(key, field, value)}]\n```\nOutputs the data organized as (position, field, value) and prepended with the keys\n`:data`, `:values`, `:[]`.\n\nInstead of reordering the fields to pass them to `vegalite_utils:data`, this data could\nalso be prepended with `(:data, :values, :[])` as it is already in the required format.',
        code: "  def data[DATA] = {\n    :data, :values, :[], i, field, value\n    from field, i, value\n    where enumerate[{ks2... : DATA[_](ks2...,_)}](i, ks...) and DATA(field, ks..., value)\n        from ks...\n  }",
        children: [],
      },
      {
        type: "definition",
        name: "title",
        docstring:
          '    title[t]\n    title[CONFIG]\n\nAdd the string `t` as a [title](https://vega.github.io/vega-lite/docs/title.html) for the\nVega-Lite chart. Or provide an overloaded relation `CONFIG` with keys and values as described\nin the [Vega-Lite docs](https://vega.github.io/vega-lite/docs/title.html) (e.g. `:color`).\n\nGives a relation that is the string `t` prepended with the keys `:title`, and `:text` and\nany binary tuples prepended with `:title`.\n\n## Examples\n\n### Add a basic title\n```rel\ndef output = vegalite_utils:title["A Simple Title"]\n```\nOutputs `{:title, :text, "A Simple Title"}`, which adds the title to the top center of\nthe chart in black font.\n\n### Add a fancy title\n```rel\ndef output = vegalite_utils:title[{\n  ("Fancy Title");\n  (:subtitle, "Fancy Titles require Fancy Subtitles");\n  (:color, "purple");\n  (:anchor, "start");\n  (:fontSize, 24);\n  (:fontStyle, "italic");\n  (:subtitleColor, "blue");\n}]\n```\nOutputs `"Fancy Title"` prepended by `:title\', `:text` and the other tuples prepended\nonly with `:title`.  This would add a purple title and a blue subtitle with italic, size\n24 font which was anchored at the top left of the chart.',
        code: "  def title[S] = {:title, :text, s} from s where S(s) and String(s)\n  def title[S] = {:title, k, v} from k, v where S(k, v)",
        children: [],
      },
      {
        type: "definition",
        name: "width",
        docstring:
          "    width[w]\n\nSet the [width](https://vega.github.io/vega-lite/docs/size.html#specifying-fixed-width-and-height)\nof the Vega-Lite chart in pixels. Gives `w` prepended with the `:width` key.",
        code: "  def width[w] = {:width, w}",
        children: [],
      },
      {
        type: "definition",
        name: "height",
        docstring:
          "    height[h]\n\nSet the [height](https://vega.github.io/vega-lite/docs/size.html#specifying-fixed-width-and-height)\nof the Vega-Lite chart in pixels. Gives `h` prepended with the `:height` key.",
        code: "  def height[h] = {:height, h}",
        children: [],
      },
      {
        type: "definition",
        name: "background",
        docstring:
          "    background[c]\n\nSet the [background color](https://vega.github.io/vega-lite/docs/spec.html#top-level) of\nthe entire Vega-Lite chart to `c`. Gives `c` prepended with the `:background` key.",
        code: "  def background[c] = {:background, c}",
        children: [],
      },
      {
        type: "definition",
        name: "x",
        docstring:
          '    x[:field_name]\n    x[value]\n    x[CONFIG]\n\nSet the encoding for the [x position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :x, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :x, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :x)`.\n\n## Examples\n\n### Set x to a field\n```rel\ndef output = vegalite_utils:x[:my_field]\n```\nOutputs `(:encoding, :x, :field, "my_field")`. By default, the field name is then used as\nthe axis title on the `x` axis.\n\n### Set x to a value\n```rel\ndef output = vegalite_utils:x[202]\n```\nOutputs `(:encoding, :x, :value, 200)`.  This is less commonly used compared to defining\nx with a field, but can be useful when adding a vertical line to a chart.\n\n### Set x to a field and set some options\n```rel\ndef output = vegalite_utils:x[{\n  (:my_field);\n  (:title, "My Fancy X");\n  (:sort, "ascending");\n  (:axis, {\n    (:orient, "top");\n    (:ticks, boolean_false);\n    (:titleColor, "green");\n    (:grid, boolean_false);\n  })\n}]\n```\nOutputs an x encoding with the `:field` set to `"my_field"`. This chart would have a\ngreen x axis title of `"My Fancy X"` with the axis on the top of the chart. The axis\nwould have no ticks and there would be no x gridlines on the chart. The data would be\nsorted in ascending order (other common options are `"descending"`, `"y"` (sorts the x\ndata by the y field in ascending order), or `"-y"` (sorts the x data by the y field in\ndescending order)). See [the Vega-Lite axis docs](https://vega.github.io/vega-lite/docs/axis.html)\nfor all of the `:axis` options.',
        code: "  def x[CONFIG] = encoding[:x, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "x2",
        docstring:
          "    x2[:field_name]\n    x2[value]\n    x2[CONFIG]\n\nSet the encoding for the [x2 position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :x2, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :x2, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :x2)`.\n\nThe x2 position channel is most commonly used when specifying ranges of x values, such as\nin a [gantt chart](https://vega.github.io/vega-lite/examples/bar_gantt.html).",
        code: "  def x2[CONFIG] = encoding[:x2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "xError",
        docstring:
          "    xError[:field_name]\n    xError[value]\n    xError[CONFIG]\n\nSet the encoding for the [xError position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :xError, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :xError, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :xError)`.\n\nThe xError position channel is most commonly used when specifying [error bar marks](https://vega.github.io/vega-lite/docs/errorbar.html).",
        code: "  def xError[CONFIG] = encoding[:xError, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "xError2",
        docstring:
          "    xError2[:field_name]\n    xError2[value]\n    xError2[CONFIG]\n\nSet the encoding for the [xError2 position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :xError2, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :xError2, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :xError2)`.\n\nThe xError2 position channel is most commonly used when specifying [error bar marks](https://vega.github.io/vega-lite/docs/errorbar.html).",
        code: "  def xError2[CONFIG] = encoding[:xError2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "xOffset",
        docstring:
          "    xOffset[:field_name]\n    xOffset[value]\n    xOffset[CONFIG]\n\nSet the encoding for the [xOffset position offset channel](https://vega.github.io/vega-lite/docs/encoding.html#positon-offset).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :xOffset, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :xOffset, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :xOffset)`.\n\nThe xOffset position offset channel is most commonly used when creating a grouped bar chart\nor a jittered scatter plot.",
        code: "  def xOffset[CONFIG] = encoding[:xOffset, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "y",
        docstring:
          '    y[:field_name]\n    y[value]\n    y[CONFIG]\n\nSet the encoding for the [y position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :y, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :y, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :y)`.\n\n## Examples\n\n### Set y to a field\n```rel\ndef output = vegalite_utils:y[:my_field]\n```\nOutputs `(:encoding, :y, :field, "my_field")`. By default, the field name is then used as\nthe axis title on the `y` axis.\n\n### Set y to a value\n```rel\ndef output = vegalite_utils:y[202]\n```\nOutputs `(:encoding, :y, :value, 200)`.  This is less commonly used compared to defining\ny with a field, but can be useful when adding a horizontal line to a chart.\n\n### Set y to a field and set some options\n```rel\ndef output = vegalite_utils:y[{\n  (:my_field);\n  (:title, "My Fancy Y");\n  (:sort, "ascending");\n  (:axis, {\n    (:orient, "right");\n    (:ticks, boolean_false);\n    (:titleColor, "green");\n    (:grid, boolean_false);\n  })\n}]\n```\nOutputs an y encoding with the `:field` set to `"my_field"`. This chart would have a\ngreen y axis title of `"My Fancy Y"` with the axis on the right of the chart. The axis\nwould have no ticks and there would be no x gridlines on the chart. The data would be\nsorted in ascending order (other common options are `"descending"`, `"x"` (sorts the y\ndata by the x field in ascending order), or `"-x"` (sorts the y data by the x field in\ndescending order)). See [the Vega-Lite axis docs](https://vega.github.io/vega-lite/docs/axis.html)\nfor all of the `:axis` options.',
        code: "  def y[CONFIG] = encoding[:y, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "y2",
        docstring:
          "    y2[:field_name]\n    y2[value]\n    y2[CONFIG]\n\nSet the encoding for the [y2 position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :y2, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :y2, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :y2)`.\n\nThe y2 position channel is most commonly used when specifying ranges of y values, such as\nin a [waterfall chart](https://vega.github.io/vega-lite/examples/waterfall_chart.html) (\nthis example is quite complex, but note the `y2` is simply set to a field).",
        code: "  def y2[CONFIG] = encoding[:y2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "yError",
        docstring:
          "    yError[:field_name]\n    yError[value]\n    yError[CONFIG]\n\nSet the encoding for the [yError position channel](https://vega.github.io/vega-lite/docs/encoding.html#position). If `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :yError, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :yError, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :yError)`.\n\nThe yError position channel is most commonly used when specifying [error bar marks](https://vega.github.io/vega-lite/docs/errorbar.html).",
        code: "  def yError[CONFIG] = encoding[:yError, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "yError2",
        docstring:
          "    yError2[:field_name]\n    yErro2[value]\n    yError2[CONFIG]\n\nSet the encoding for the [yError2 position channel](https://vega.github.io/vega-lite/docs/encoding.html#position).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :yError2, :field)`. If `CONFIG` is any other\nunary value, it is assumed to be a value and is prepended with `(:encoding, :yError2,\n:value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :yError2)`.\n\nThe yError2 position channel is most commonly used when specifying [error bar marks](https://vega.github.io/vega-lite/docs/errorbar.html).",
        code: "  def yError2[CONFIG] = encoding[:yError2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "yOffset",
        docstring:
          "    yOffset[:field_name]\n    yOffset[value]\n    yOffset[CONFIG]\n\nSet the encoding for the [yOffset position offset channel](https://vega.github.io/vega-lite/docs/encoding.html#positon-offset).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :yOffset, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :yOffset, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :yOffset)`.\n\nThe yOffset position offset channel is most commonly used when creating a grouped bar chart\nor a jittered scatter plot.",
        code: "  def yOffset[CONFIG] = encoding[:yOffset, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "color",
        docstring:
          '    color[:field_name]\n    color[value]\n    color[CONFIG]\n\nSet the encoding for the [color mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :color, :field)`. If `CONFIG` is any other\nunary value, it is assumed to be a value and is prepended with `(:encoding, :color,\n:value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :color)`.\n\n## Examples\n\n### Set color to a value\n```rel\ndef output = vegalite_utils:color["cornflowerblue"]\n```\nOutputs `(:encoding, :color, :value, "cornflowerblue")`. Sets the color of the marks to\n[Cornflower Blue](https://www.w3schools.com/colors/colors_names.asp).\n\n### Set color to a field\n```rel\ndef output = vegalite_utils:color[:my_field]\n```\nOutputs `(:encoding, :color, :field, "my_field")`. When adding a color specification to a\nchart, it groups the data by that field. This results in [multiple\nlines](https://vega.github.io/vega-lite/examples/line_color.html) with a `:line` mark, [a\nstacked bar chart](https://vega.github.io/vega-lite/examples/stacked_bar_count_corner_radius_mark.html),\nor [colored points on a scatter plot](https://vega.github.io/vega-lite/examples/point_color_with_shape.html).\n\n### Set color to a predefined scheme, no legend\n```rel\ndef output = vegalite_utils:color[{\n  (:my_field);\n  (:scale, :scheme, "dark2");\n  (:legend, boolean_false)\n}]\n```\nOutputs a color encoding with the `:field` set to `"my_field"`. The `"dark2"` [color\nscheme](https://vega.github.io/vega/docs/schemes/#scheme-reference) is used instead of\nthe default. The legend is suppressed by setting `:legend` to `false`.\n\n### Set color to a custom scheme, legend title\n```rel\ndef output = vegalite_utils:color[{\n  (:my_field);\n  (:title, "Weather");\n  (:scheme, {\n    (:domain, :[], {(1, "sun"); (2, "fog"); (3, "rain")});\n    (:range, :[], {(1, "yellow"); (2, "grey"); (3, "aqua")})\n  })\n}]\n```\nOutputs a color encoding with the `:field` set to `"my_field"`. The legend title is set\nto `"Weather"` and the color scheme uses a custom mapping from data values in `:my_field`\nto colors (e.g. sun = yellow).',
        code: "  def color[CONFIG] = encoding[:color, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "opacity",
        docstring:
          '    opacity[:field_name]\n    opacity[value]\n    opacity[CONFIG]\n\nSet the encoding for the [opacity mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with `(:encoding, :opacity, :field)`. If `CONFIG` is any other\nunary value, it is assumed to be a value and is prepended with `(:encoding, :opacity,\n:value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :opacity)`.\n\n## Examples\n\n### Set opacity to a value\n```rel\ndef output = vegalite_utils:opacity[0.7]\n```\nOutputs `(:encoding, :opacity, :value, 0.7)`. Sets the opacity of the marks to 0.7. Setting\nthe opacity to 1 makes the marks fully opaque (the default), whereas setting it to 0 makes\nthe marks fully transparent.\n\n### Set opacity to a field\n```rel\ndef output = vegalite_utils:opacity[:my_field]\n```\nOutputs `(:encoding, :opacity, :field, "my_field")`. When adding an opacity specification to a\nchart, it should be used with continuous quantitative data.\n\n### Change the opacity of a mark based on the value of the data\n```rel\ndef output = vegalite_utils:opacity[{\n  (0.9);\n  (:condition, {\n    (:test, "datum.my_field == \'A\'");\n    (:value, 0.5);\n  })\n}]\n```\nOutputs an opacity encoding with the `:value` set to `0.9`. Then uses a condition to test\nif the data for the mark has `my_field = \'A\'` and if so, sets the opacity to 0.5.\n\n### Change the opacity of a mark based on hover\n```rel\ndef output = vegalite_utils:opacity[{\n  :condition, {\n    (:param, "hover");\n    (:value, 0.5);\n  };\n}]\n```\nUses a condition to test if the mark is being hovered over and if so, sets the opacity\nto 0.5. Otherwise, the default opacity of 1.0 is used.',
        code: "  def opacity[CONFIG] = encoding[:opacity, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "fillOpacity",
        docstring:
          '    fillOpacity[:field_name]\n    fillOpacity[value]\n    fillOpacity[CONFIG]\n\nSet the encoding for the [fillOpacity mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe fill opacity sets the opacity of only the interior of a mark (such as a circle). If\n`CONFIG` is a unary `RelName`, the value is assumed to be a field name and is prepended\nwith `(:encoding, :fillOpacity, :field)`. If `CONFIG` is any other unary value, it is\nassumed to be a value and is prepended with `(:encoding, :fillOpacity, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :fillOpacity)`.\n\n## Examples\n\n### Set fill opacity to a value\n```rel\ndef output = vegalite_utils:fillOpacity[0.7]\n```\nOutputs `(:encoding, :fillOpacity, :value, 0.7)`. Sets the fill opacity of the marks to 0.7.\nSetting the fill opacity to 1 makes the marks fully opaque, whereas setting it to 0 makes\nthe marks fully transparent.\n\n### Set fill opacity to a field\n```rel\ndef output = vegalite_utils:fillOpacity[:my_field]\n```\nOutputs `(:encoding, :fillOpacity, :field, "my_field")`. When adding an opacity specification\nto a chart, it should be used with continuous quantitative data.\n\n### Change the fill opacity of a mark based on the value of the data\n```rel\ndef output = vegalite_utils:fillOpacity[{\n  (0.9);\n  (:condition, {\n    (:test, "datum.my_field == \'A\'");\n    (:value, 0.5);\n  }}\n}]\n```\nOutputs a fill opacity encoding with the `:value` set to `0.9`. Then uses a condition to test\nif the data for the mark has `my_field = \'A\'` and if so, sets the opacity to 0.5.\n\n### Change the fill opacity of a mark based on hover\n```rel\ndef output = vegalite_utils:fillOpacity[{\n  :condition, {\n    (:param, "hover");\n    (:value, 0.5);\n  };\n}]\n```\nUses a condition to test if the mark is being hovered over and if so, sets the fill\nopacity to 0.5. Otherwise, the default opacity is used.',
        code: "  def fillOpacity[CONFIG] = encoding[:fillOpacity, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "strokeOpacity",
        docstring:
          '    strokeOpacity[:field_name]\n    strokeOpacity[value]\n    strokeOpacity[CONFIG]\n\nSet the encoding for the [strokeOpacity mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe stroke opacity sets the opacity of only the exterior of a mark (such as a circle) or\na line. If `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is\nprepended with `(:encoding, :strokeOpacity, :field)`. If `CONFIG` is any other unary value,\nit is assumed to be a value and is prepended with `(:encoding, :strokeOpacity, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :strokeOpacity)`.\n\n## Examples\n\n### Set stroke opacity to a value\n```rel\ndef output = vegalite_utils:strokeOpacity[0.7]\n```\nOutputs `(:encoding, :strokeOpacity, :value, 0.7)`. Sets the stroke opacity of the marks to 0.7.\nSetting the stroke opacity to 1 makes the marks fully opaque, whereas setting it to 0 makes\nthe marks fully transparent.\n\n### Set stroke opacity to a field\n```rel\ndef output = vegalite_utils:strokeOpacity[:my_field]\n```\nOutputs `(:encoding, :strokeOpacity, :field, "my_field")`. When adding an opacity specification\nto a chart, it should be used with continuous quantitative data.\n\n### Change the stroke opacity of a mark based on the value of the data\n```rel\ndef output = vegalite_utils:strokeOpacity[{\n  (0.9);\n  (:condition, {\n    (:test, "datum.my_field == \'A\'");\n    (:value, 0.5);\n  })\n}]\n```\nOutputs a stroke opacity encoding with the `:value` set to `0.9`. Then uses a condition to test\nif the data for the mark has `my_field = \'A\'` and if so, sets the opacity to 0.5.\n\n### Change the stroke opacity of a mark based on hover\n```rel\ndef output = vegalite_utils:strokeOpacity[{\n  :condition, {\n    (:param, "hover");\n    (:value, 0.5);\n  };\n}]\n```\nUses a condition to test if the mark is being hovered over and if so, sets the stroke\nopacity to 0.5. Otherwise, the default opacity is used.',
        code: "  def strokeOpacity[CONFIG] = encoding[:strokeOpacity, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "strokeWidth",
        docstring:
          '    strokeWidth[:field_name]\n    strokeWidth[value]\n    strokeWidth[CONFIG]\n\nSet the encoding for the [strokeWidth mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe stroke width sets the width of a line or the outline of a mark (such as a circle). If\n`CONFIG` is a unary `RelName`, the value is assumed to be a field name and is\nprepended with `(:encoding, :strokeWidth, :field)`. If `CONFIG` is any other unary value,\nit is assumed to be a value and is prepended with `(:encoding, :strokeWidth, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :strokeWidth)`.\n\n## Examples\n\n### Set stroke width to a value\n```rel\ndef output = vegalite_utils:strokeWidth[2]\n```\nOutputs `(:encoding, :strokeWidth, :value, 2)`. Sets the stroke width of the marks to 2 pixels.\n\n### Set stroke width to a field\n```rel\ndef output = vegalite_utils:strokeWidth[:my_field]\n```\nOutputs `(:encoding, :strokeWidth, :field, "my_field")`.\n\n### Change the stroke width of a mark based on the value of the data\n```rel\ndef output = vegalite_utils:strokeWidth[{\n  (2);\n  (:condition, {\n    (:test, "datum.my_field == \'A\'");\n    (:value, 4);\n  });\n}]\n```\nOutputs a stroke width encoding with the `:value` set to `2`. Then uses a condition to test\nif the data for the mark has `my_field = \'A\'` and if so, sets the width to 4 pixels.\n\n### Change the stroke width of a mark based on hover\n```rel\ndef output = vegalite_utils:strokeWidth[{\n  :condition, {\n    (:param, "hover");\n    (:value, 4);\n  };\n}]\n```\nUses a condition to test if the mark is being hovered over and if so, sets the stroke\nwidth to 4 pixels. Otherwise, the default width is used.',
        code: "  def strokeWidth[CONFIG] = encoding[:strokeWidth, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "strokeDash",
        docstring:
          '    strokeDash[:field_name]\n    strokeDash[value]\n    strokeDash[CONFIG]\n\nSet the encoding for the [strokeDash mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe stroke dash sets the pattern of a line or the outline of a mark (such as a circle). If\n`CONFIG` is a unary `RelName`, the value is assumed to be a field name and is\nprepended with `(:encoding, :strokeDash, :field)`. If `CONFIG` is any other unary value,\nit is assumed to be a value and is prepended with `(:encoding, :strokeDash, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :strokeDash)`.\n\n## Examples\n\n### Set stroke dash to a field\n```rel\ndef output = vegalite_utils:strokeDash[:my_field]\n```\nOutputs `(:encoding, :strokeDash, :field, "my_field")`. When adding a stroke dash\nspecification to a chart, it groups the data by that field. This results in multiple\nlines with a `:line` mark.\n\n### Set stroke dash to a field with custom title\n```rel\ndef output = vegalite_utils:strokeDash[{\n  (:my_field);\n  (:title, "My Field")\n}]\n```\nOutputs `(:encoding, :strokeDash, :field, "my_field")`. When adding a stroke dash\nspecification to a chart, it groups the data by that field. This results in multiple\nlines with a `:line` mark. Setting the `:title` updates the title on the legend (included\nby default), and the tooltip.',
        code: "  def strokeDash[CONFIG] = encoding[:strokeDash, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "size",
        docstring:
          '    size[:field_name]\n    size[value]\n    size[CONFIG]\n\nSet the encoding for the [size mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is\nprepended with `(:encoding, :size, :field)`. If `CONFIG` is any other unary value,\nit is assumed to be a value and is prepended with `(:encoding, :size, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :size)`.\n\nAdding size to a `scatter` chart, converts it to a [bubble plot](https://vega.github.io/vega-lite/examples/point_bubble.html).\n\n## Examples\n\n### Set size to a value\n```rel\ndef output = vegalite_utils:size[20]\n```\nOutputs `(:encoding, :size, :field, "my_field")`. The size property is most commonly used\nwith `"point"`, `"square"`, and `"circle"` marks where the value of 20 is then the area\nof the mark.\n\n### Set size to a field\n```rel\ndef output = vegalite_utils:size[:my_field]\n```\nOutputs `(:encoding, :size, :field, "my_field")`.\n\n### Set size to a field with custom title\n```rel\ndef output = vegalite_utils:size[{\n  (:my_field);\n  (:title, "My Field")\n}]\n```\nOutputs `(:encoding, :size, :field, "my_field")`. Setting the `:title` updates the title\non the legend (included by default), and the tooltip.\n\n### Create a bubble plot\n```rel\ndef data:height = {(1, 102); (2, 94); (3, 74)}\ndef data:wingspan = {(1, 36.2); (2, 45.2); (3, 35.0)}\ndef data:weight = {(1, 20.1); (2, 15.4); (3, 20.4) }\n\ndef chart = vegalite:scatter[:height, :wingspan, { :data, data; :size, :weight }]\n\ndef output = vegalite:plot[chart]\n```\nOutputs a bubble plot with height on the x axis, wingspan on the y axis, and the points\nsized by weight.',
        code: "  def size[CONFIG] = encoding[:size, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "angle",
        docstring:
          '    angle[:field_name]\n    angle[value]\n    angle[CONFIG]\n\nSet the encoding for the [angle mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe angle property sets the angle of text or point marks (e.g. rotating a text mark to\n45 degrees). If `CONFIG` is a unary `RelName`, the value is assumed to be a field name\nand is prepended with `(:encoding, :angle, :field)`. If `CONFIG` is any other unary value,\nit is assumed to be a value and is prepended with `(:encoding, :angle, :value)`. Any\ntuples with arity >= 2 are prepended with `(:encoding, :angle)`.\n\n## Examples\n\n### Set angle to a value\nrel```\ndef output = vegalite_utils:angle[45]\n```\nOutputs `(:encoding, :angle, :value, 45)`. This rotates the angle of the mark 45 degrees\nclockwise.\n\n### Set angle to a field\nrel```\ndef output = vegalite_utils:angle[:direction]\n```\nOutputs `(:encoding, :angle, :field, "direction")`. This rotates the angle of each mark\nby the value in the field `:direction`.',
        code: "  def angle[CONFIG] = encoding[:angle, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "shape",
        docstring:
          '    shape[:field_name]\n    shape[value]\n    shape[CONFIG]\n\nSet the encoding for the [shape mark property channel](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop).\nThe shape property is used primarily with `"point"` marks. If `CONFIG` is a unary\n`RelName`, the value is assumed to be a field name and is prepended with `(:encoding,\n:shape, :field)`. If `CONFIG` is any other unary value, it is assumed to be a value and\nis prepended with `(:encoding, :shape, :value)`. Any tuples with arity >= 2 are prepended with\n`(:encoding, :shape)`.\n\n## Examples\n\n### Set shape to a value\n```rel\ndef output = vegalite_utils:shape["square"]\n```\nOutputs `(:encoding, :shape, :value, "square")`. Possible values:\n* `"circle"`\n* `"cross"`\n* `"diamond"`\n* `"square"`\n* `"triangle-up"`\n* `"triangle-down"`\n* `"triangle-left"`\n* `"triangle-right"`\n* `"stroke"`\n* `"wedge"`\n* `"arrow"`\n* `"triangle"`\n* An SVG path string\n\n### Set size to a field\n```rel\ndef output = vegalite_utils:shape[:my_field]\n```\nOutputs `(:encoding, :shape, :field, "my_field")`.\n\n### Set shape to a field with custom title\n```rel\ndef output = vegalite_utils:shape[{\n  (:my_field);\n  (:title, "My Field")\n}]\n```\nOutputs `(:encoding, :shape, :field, "my_field")`. Setting the `:title` updates the title\non the legend (included by default), and the tooltip.',
        code: "  def shape[CONFIG] = encoding[:shape, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "theta",
        docstring:
          '    theta[:field_name]\n    theta[value]\n    theta[CONFIG]\n\nSet the encoding for the [theta polar position channel](https://vega.github.io/vega-lite/docs/encoding.html#polar).\nThe theta property is used with `"arc"` marks. If `CONFIG` is a unary `RelName`, the\nvalue is assumed to be a field name and is prepended with `(:encoding, :theta, :field)`.\nIf `CONFIG` is any other unary value, it is assumed to be a value and is prepended with\n`(:encoding, :theta, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :theta)`.\n\n## Examples\n\n### Set theta to a field\n```rel\ndef output = vegalite_utils:theta[:my_field]\n```\nOutputs `(:encoding, :theta, :field, "my_field")`. This sets the size of the arcs based\non the data in my field so that the arcs create a circle.\n\n### Create a pie chart\n```rel\ndef data:count = {(1, 20); (2, 40) }\ndef data:response = {(1, "No"); (2, "Yes")}\n\ndef chart = vegalite_utils:data[data]\ndef chart = vegalite_utils:theta[{(:count); (:type, "quantitative")}]\ndef chart = vegalite_utils:color[{(:response); (:type, "nominal")}]\ndef chart = {:mark, "arc"}\n\ndef output = vegalite:plot[chart]\n```\nOutput a pie chart with two wedges, `"No"` and `"Yes"`, which are sized to 1/3 and 2/3\nof the circle respectively.',
        code: "  def theta[CONFIG] = encoding[:theta, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "theta2",
        docstring:
          '    theta2[:field_name]\n    theta2[value]\n    theta2[CONFIG]\n\nSet the encoding for the [theta2 polar position channel](https://vega.github.io/vega-lite/docs/encoding.html#polar).\nThe theta2 property is used with `"arc"` marks. If `CONFIG` is a unary `RelName`, the\nvalue is assumed to be a field name and is prepended with `(:encoding, :theta2, :field)`.\nIf `CONFIG` is any other unary value, it is assumed to be a value and is prepended with\n`(:encoding, :theta2, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :theta2)`.\n\n## Examples\n\n### Set theta2 to a field\n```rel\ndef output = vegalite_utils:theta2[:my_field]\n```\nOutputs `(:encoding, :theta2, :field, "my_field")`. This sets the end angle of the arc in\nradians, to the values in `:my_field`.',
        code: "  def theta2[CONFIG] = encoding[:theta2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "radius",
        docstring:
          '    radius[:field_name]\n    radius[value]\n    radius[CONFIG]\n\nSet the encoding for the [radius polar position channel](https://vega.github.io/vega-lite/docs/encoding.html#polar).\nThe radius property is used with `"arc"` marks. If `CONFIG` is a unary `RelName`, the\nvalue is assumed to be a field name and is prepended with `(:encoding, :radius, :field)`.\nIf `CONFIG` is any other unary value, it is assumed to be a value and is prepended with\n`(:encoding, :radius, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :radius)`.\n\n## Examples\n\n### Set radius to a value\n```rel\ndef output = vegalite_utils:radius[240]\n```\nOutputs `(:encoding, :radius, :value, 240)`. This sets the outer radius of the arc marks\nto 240 pixels.',
        code: "  def radius[CONFIG] = encoding[:radius, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "radius2",
        docstring:
          '    radius2[:field_name]\n    radius2[value]\n    radius2[CONFIG]\n\nSet the encoding for the [radius2 polar position channel](https://vega.github.io/vega-lite/docs/encoding.html#polar).\nThe radius2 property is used with `"arc"` marks. If `CONFIG` is a unary `RelName`, the\nvalue is assumed to be a field name and is prepended with `(:encoding, :radius2, :field)`.\nIf `CONFIG` is any other unary value, it is assumed to be a value and is prepended with\n`(:encoding, :radius2, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :radius2)`.\n\n## Examples\n\n### Set radius to a value\n```rel\ndef output = vegalite_utils:radius2[120]\n```\nOutputs `(:encoding, :radius2, :value, 120)`. This sets the inner radius of the arc marks\nto 120 pixels.',
        code: "  def radius2[CONFIG] = encoding[:radius2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "longitude",
        docstring:
          '    longitude[:field_name]\n    longitude[value]\n    longitude[CONFIG]\n\nSet the encoding for the [longitude geographic position channel](https://vega.github.io/vega-lite/docs/encoding.html#geo).\nThe longitude property is typically used along with a [projection](https://vega.github.io/vega-lite/docs/projection.html).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is prepended\nwith `(:encoding, :longitude, :field)`. If `CONFIG` is any other unary value, it is assumed\nto be a value and is prepended with `(:encoding, :longitude, :value)`. Any tuples with arity >= 2 are\nprepended with `(:encoding, :longitude)`.\n\n## Examples\n\n### Set longitude to a field\n```rel\ndef output = vegalite_utils:longitude[:lons]\n```\nOutputs `(:encoding, :longitude, :field, "lons")`. This sets the longitude position of\ngeographically project marks to the field `:lons`. See the [Vega-Lite Maps examples](https://vega.github.io/vega-lite/examples/#maps-geographic-displays)\nfor use cases on using longitude.',
        code: "  def longitude[CONFIG] = encoding[:longitude, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "longitude2",
        docstring:
          '    longitude2[:field_name]\n    longitude2[value]\n    longitude2[CONFIG]\n\nSet the encoding for the [longitude2 geographic position channel](https://vega.github.io/vega-lite/docs/encoding.html#geo).\nThe longitude2 property is typically used along with a [projection](https://vega.github.io/vega-lite/docs/projection.html).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is prepended\nwith `(:encoding, :longitude2, :field)`. If `CONFIG` is any other unary value, it is assumed\nto be a value and is prepended with `(:encoding, :longitude2, :value)`. Any tuples with arity >= 2 are\nprepended with `(:encoding, :longitude2)`.\n\n## Examples\n\n### Set longitude2 to a field\n```rel\ndef output = vegalite_utils:longitude2[:lons]\n```\nOutputs `(:encoding, :longitude2, :field, "lons")`. This sets the longitude2 position of\ngeographically project marks to the field `:lons`. See the [Vega-Lite Maps examples](https://vega.github.io/vega-lite/examples/#maps-geographic-displays)\nfor use cases on using longitude2.',
        code: "  def longitude2[CONFIG] = encoding[:longitude2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "latitude",
        docstring:
          '    latitude[:field_name]\n    latitude[value]\n    latitude[CONFIG]\n\nSet the encoding for the [latitude geographic position channel](https://vega.github.io/vega-lite/docs/encoding.html#geo).\nThe latitude property is typically used along with a [projection](https://vega.github.io/vega-lite/docs/projection.html).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is prepended\nwith `(:encoding, :latitude, :field)`. If `CONFIG` is any other unary value, it is assumed\nto be a value and is prepended with `(:encoding, :latitude, :value)`. Any tuples with arity >= 2 are\nprepended with `(:encoding, :latitude)`.\n\n## Examples\n\n### Set latitude to a field\n```rel\ndef output = vegalite_utils:latitude[:lats]\n```\nOutputs `(:encoding, :latitude, :field, "lats")`. This sets the latitude position of\ngeographically project marks to the field `:lats`. See the [Vega-Lite Maps examples](https://vega.github.io/vega-lite/examples/#maps-geographic-displays)\nfor use cases on using latitude.',
        code: "  def latitude[CONFIG] = encoding[:latitude, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "latitude2",
        docstring:
          '    latitude2[:field_name]\n    latitude2[value]\n    latitude2[CONFIG]\n\nSet the encoding for the [latitude2 geographic position channel](https://vega.github.io/vega-lite/docs/encoding.html#geo).\nThe latitude2 property is typically used along with a [projection](https://vega.github.io/vega-lite/docs/projection.html).\nIf `CONFIG` is a unary `RelName`, the value is assumed to be a field name and is prepended\nwith `(:encoding, :latitude2, :field)`. If `CONFIG` is any other unary value, it is assumed\nto be a value and is prepended with `(:encoding, :latitude2, :value)`. Any tuples with arity >= 2 are\nprepended with `(:encoding, :latitude2)`.\n\n## Examples\n\n### Set latitude2 to a field\n```rel\ndef output = vegalite_utils:latitude2[:lats]\n```\nOutputs `(:encoding, :latitude2, :field, "lats")`. This sets the latitude position of\ngeographically project marks to the field `:lats`. See the [Vega-Lite Maps examples](https://vega.github.io/vega-lite/examples/#maps-geographic-displays)\nfor use cases on using latitude2.',
        code: "  def latitude2[CONFIG] = encoding[:latitude2, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "text",
        docstring:
          '    text[:field_name]\n    text[value]\n    text[CONFIG]\n\nSet the encoding for the [text channel](https://vega.github.io/vega-lite/docs/encoding.html#text).\nUsed with the `"text"` mark type. If `CONFIG` is a unary `RelName`, the value is assumed\nto be a field name and is prepended with `(:encoding, :text, :field)`. If `CONFIG` is any\nother unary value, it is assumed to be a value and is prepended with `(:encoding, :text, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :text)`.\n\n## Examples\n\n### Set text to a field\n```rel\ndef output = vegalite_utils:text[:words]\n```\nOutputs `(:encoding, :text, :field, "words")`. This sets the marks to the text contained\nin the field `:words`.',
        code: "  def text[CONFIG] = encoding[:text, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "tooltip",
        docstring:
          "    tooltip[:field_name]\n    tooltip[value]\n    tooltip[CONFIG]\n\nSet the encoding for the [tooltip channel](https://vega.github.io/vega-lite/docs/encoding.html#text).\nThe tooltip text to show upon mouse hover.  By default, the tooltip will contain\nkey/value pairs with the data at the hovered point. This channel can be used to override\nthat behavior. See [the tooltip documentation](https://vega.github.io/vega-lite/docs/tooltip.html)\nfor more details. If `CONFIG` is a unary `RelName`, the value is assumed to be a field\nname and is prepended with `(:encoding, :tooltip, :field)`. If `CONFIG` is any other unary\nvalue, it is assumed to be a value and is prepended with `(:encoding, :tooltip, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :tooltip)`.",
        code: "  def tooltip[CONFIG] = encoding[:tooltip, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "href",
        docstring:
          '    href[:field_name]\n    href[value]\n    href[CONFIG]\n\nSet the encoding for the [href hyperlink channel](https://vega.github.io/vega-lite/docs/encoding.html#href).\nSetting the `"href"` property turns a mark into a hyperlink. If `CONFIG` is a unary\n`RelName`, the value is assumed to be a field name and is prepended with `(:encoding,\n:href, :field)`. If `CONFIG` is any other unary value, it is assumed to be a value and\nis prepended with `(:encoding, :href, :value)`. Any tuples with arity >= 2 are prepended with\n`(:encoding, :href)`.\n\n## Examples\n\n### Set href to a field\n```rel\ndef output = vegalite_utils:href[:links]\n```\nOutputs `(:encoding, :href, :field, "links")`. This sets the marks to be hyperlinks\npointing to the links contained in the field `:links`.',
        code: "  def href[CONFIG] = encoding[:href, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "detail",
        docstring:
          '    detail[:field_name]\n    detail[value]\n    detail[CONFIG]\n\nSet the encoding for the [level of detail channel](https://vega.github.io/vega-lite/docs/encoding.html#detail).\nSetting the `"detail"` property adds a grouping to the plot without mapping the marks to\nvisual properties (e.g. multiple lines all of the same color). If `CONFIG` is a unary\n`RelName`, the value is assumed to be a field name and is prepended with `(:encoding,\n:detail, :field)`. If `CONFIG` is any other unary value, it is assumed to be a value and\nis prepended with `(:encoding, :detail, :value)`. Any tuples with arity >= 2 are prepended with\n`(:encoding, :detail)`.\n\n## Examples\n\n### Set detail to a field\n```rel\ndef output = vegalite_utils:detail[:category]\n```\nOutputs `(:encoding, :detail, :field, "category")`. This adds a mark grouping to categories\ncontained in the field `:category`.',
        code: "  def detail[CONFIG] = encoding[:detail, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "key",
        docstring:
          '    key[:field_name]\n    key[value]\n    key[CONFIG]\n\nSet the encoding for the [key channel](https://vega.github.io/vega-lite/docs/encoding.html#key).\nSetting the `"key"` property adds a key to the data for consistency when programmatically\nchanging data via the API. If `CONFIG` is a unary `RelName`, the value is assumed to be\na field name and is prepended with `(:encoding, :key, :field)`. If `CONFIG` is any\nother unary value, it is assumed to be a value and is prepended with `(:encoding,\n:key, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :key)`.',
        code: "  def key[CONFIG] = encoding[:key, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "order",
        docstring:
          '    order[:field_name]\n    order[value]\n    order[CONFIG]\n\nSet the encoding for the [order channel](https://vega.github.io/vega-lite/docs/encoding.html#order).\nSetting the `"order"` property sets the stacking order for stacked charts (see\n`vegalite_utils:sort` for setting the order of non-stacked marks). If `CONFIG` is a\nunary `RelName`, the value is assumed to be a field name and is prepended with\n`(:encoding, :order, :field)`. If `CONFIG` is any other unary value, it is assumed to be a\nvalue and is prepended with `(:encoding, :order, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :order)`.',
        code: "  def order[CONFIG] = encoding[:order, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "facet",
        docstring:
          '    facet[:field_name]\n    facet[value]\n    facet[CONFIG]\n\nSet the encoding for the [facet channel](https://vega.github.io/vega-lite/docs/facet.html).\nSetting the `"facet"` property creates subplots by the field specified. If `CONFIG` is a\nunary `RelName`, the value is assumed to be a field name and is prepended with\n`(:encoding, :facet, :field)`. If `CONFIG` is any other unary value, it is assumed to be a\nvalue and is prepended with `(:encoding, :facet, :value)`. Any tuples with arity >= 2 are prepended with `(:encoding, :facet)`.\n\n## Examples\n\n### Set facet to a field\n```rel\ndef output = vegalite_utils:facet[:my_field]\n```\nOutputs `(:encoding, :facet, :field, "my_field")`. This creates a row of subplots, where\nthe data is divided by the values of `:my_field`.\n\n### Create a wrapped, ordered facet\n```rel\ndef output = vegalite_utils:facet[{\n  (:my_field);\n  (:columns, 2);\n  (:sort, {(:op, "median"); (:field, "other_field")})\n}]\n```\nOutputs `(:encoding, :facet, :field, "my_field")`. This creates two columns of subplots,\nwhere the data is divided by the values of `:my_field`. The order of the subplots is\ndetermined by the median value of `:other_field`.',
        code: "  def facet[CONFIG] = encoding[:facet, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "row",
        docstring:
          '    row[:field_name]\n    row[value]\n    row[CONFIG]\n\nSet the encoding for the [row channel](https://vega.github.io/vega-lite/docs/facet.html).\nSetting the `"row"` property creates a column of subplots where is row is determined by\nthe field specified. If `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with`(:encoding, :row, :field)`. If `CONFIG` is any other\nunary value, it is assumed to be a value and is prepended with `(:encoding, :row, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :row)`.\n\n## Examples\n\n### Set row to a field\n```rel\ndef output = vegalite_utils:row[:my_field]\n```\nOutputs `(:encoding, :row, :field, "my_field")`. This creates a column of subplots, where\nthe data is divided by the values of `:my_field`.\n\n### Create a grid of subplots\n```rel\ndef output = vegalite_utils:row[:my_field]\ndef output = vegalite_utils:column[:other_field]\n```\nOutputs `(:encoding, :row, :field, "my_field")` and `(:encoding, :column, :field,\n"other_field")`. This creates a grid of subplots, where for each row the data is divided\nby the values of `:my_field` and for each column the data is divided by `:other_field`.',
        code: "  def row[CONFIG] = encoding[:row, CONFIG]",
        children: [],
      },
      {
        type: "definition",
        name: "column",
        docstring:
          '    column[:field_name]\n    column[value]\n    column[CONFIG]\n\nSet the encoding for the [column channel](https://vega.github.io/vega-lite/docs/facet.html).\nSetting the `"column"` property creates a column of subplots where is row is determined by\nthe field specified. If `CONFIG` is a unary `RelName`, the value is assumed to be a\nfield name and is prepended with`(:encoding, :column, :field)`. If `CONFIG` is any other\nunary value, it is assumed to be a value and is prepended with `(:encoding, :column, :value)`.\nAny tuples with arity >= 2 are prepended with `(:encoding, :column)`.\n\n## Examples\n\n### Set column to a field\n```rel\ndef output = vegalite_utils:column[:my_field]\n```\nOutputs `(:encoding, :column, :field, "my_field")`. This creates a row of subplots, where\nthe data is divided by the values of `:my_field`.\n\n### Create a grid of subplots\n```rel\ndef output = vegalite_utils:column[:my_field]\ndef output = vegalite_utils:row[:other_field]\n```\nOutputs `(:encoding, :column, :field, "my_field")` and `(:encoding, :row, :field,\n"other_field")`. This creates a grid of subplots, where for each column the data is divided\nby the values of `:my_field` and for each row the data is divided by `:other_field`.',
        code: "  def column[CONFIG] = encoding[:column, CONFIG]",
        children: [],
      },
    ],
  },
  { type: "unknown", name: "", docstring: "", code: "", children: [] },
];

export const getStdlibMap = () => {
  const map = new Map<string, DocEntry>();
  for (const item of docEntries) {
    map.set(item.name, item);
  }
  return map;
};

export default docEntries;
