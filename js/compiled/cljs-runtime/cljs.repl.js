goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56903){
var map__56904 = p__56903;
var map__56904__$1 = (((((!((map__56904 == null))))?(((((map__56904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56904):map__56904);
var m = map__56904__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56906_57013 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56907_57014 = null;
var count__56908_57015 = (0);
var i__56909_57016 = (0);
while(true){
if((i__56909_57016 < count__56908_57015)){
var f_57017 = chunk__56907_57014.cljs$core$IIndexed$_nth$arity$2(null,i__56909_57016);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57017], 0));


var G__57018 = seq__56906_57013;
var G__57019 = chunk__56907_57014;
var G__57020 = count__56908_57015;
var G__57021 = (i__56909_57016 + (1));
seq__56906_57013 = G__57018;
chunk__56907_57014 = G__57019;
count__56908_57015 = G__57020;
i__56909_57016 = G__57021;
continue;
} else {
var temp__5735__auto___57022 = cljs.core.seq(seq__56906_57013);
if(temp__5735__auto___57022){
var seq__56906_57023__$1 = temp__5735__auto___57022;
if(cljs.core.chunked_seq_QMARK_(seq__56906_57023__$1)){
var c__4556__auto___57024 = cljs.core.chunk_first(seq__56906_57023__$1);
var G__57025 = cljs.core.chunk_rest(seq__56906_57023__$1);
var G__57026 = c__4556__auto___57024;
var G__57027 = cljs.core.count(c__4556__auto___57024);
var G__57028 = (0);
seq__56906_57013 = G__57025;
chunk__56907_57014 = G__57026;
count__56908_57015 = G__57027;
i__56909_57016 = G__57028;
continue;
} else {
var f_57029 = cljs.core.first(seq__56906_57023__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57029], 0));


var G__57030 = cljs.core.next(seq__56906_57023__$1);
var G__57031 = null;
var G__57032 = (0);
var G__57033 = (0);
seq__56906_57013 = G__57030;
chunk__56907_57014 = G__57031;
count__56908_57015 = G__57032;
i__56909_57016 = G__57033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57034], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57034)))?cljs.core.second(arglists_57034):arglists_57034)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56910_57035 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56911_57036 = null;
var count__56912_57037 = (0);
var i__56913_57038 = (0);
while(true){
if((i__56913_57038 < count__56912_57037)){
var vec__56924_57039 = chunk__56911_57036.cljs$core$IIndexed$_nth$arity$2(null,i__56913_57038);
var name_57040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924_57039,(0),null);
var map__56927_57041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924_57039,(1),null);
var map__56927_57042__$1 = (((((!((map__56927_57041 == null))))?(((((map__56927_57041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56927_57041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56927_57041):map__56927_57041);
var doc_57043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927_57042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927_57042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57040], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57044], 0));

if(cljs.core.truth_(doc_57043)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57043], 0));
} else {
}


var G__57045 = seq__56910_57035;
var G__57046 = chunk__56911_57036;
var G__57047 = count__56912_57037;
var G__57048 = (i__56913_57038 + (1));
seq__56910_57035 = G__57045;
chunk__56911_57036 = G__57046;
count__56912_57037 = G__57047;
i__56913_57038 = G__57048;
continue;
} else {
var temp__5735__auto___57049 = cljs.core.seq(seq__56910_57035);
if(temp__5735__auto___57049){
var seq__56910_57050__$1 = temp__5735__auto___57049;
if(cljs.core.chunked_seq_QMARK_(seq__56910_57050__$1)){
var c__4556__auto___57051 = cljs.core.chunk_first(seq__56910_57050__$1);
var G__57052 = cljs.core.chunk_rest(seq__56910_57050__$1);
var G__57053 = c__4556__auto___57051;
var G__57054 = cljs.core.count(c__4556__auto___57051);
var G__57055 = (0);
seq__56910_57035 = G__57052;
chunk__56911_57036 = G__57053;
count__56912_57037 = G__57054;
i__56913_57038 = G__57055;
continue;
} else {
var vec__56929_57056 = cljs.core.first(seq__56910_57050__$1);
var name_57057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929_57056,(0),null);
var map__56932_57058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929_57056,(1),null);
var map__56932_57059__$1 = (((((!((map__56932_57058 == null))))?(((((map__56932_57058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56932_57058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56932_57058):map__56932_57058);
var doc_57060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932_57059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932_57059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57057], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57061], 0));

if(cljs.core.truth_(doc_57060)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57060], 0));
} else {
}


var G__57062 = cljs.core.next(seq__56910_57050__$1);
var G__57063 = null;
var G__57064 = (0);
var G__57065 = (0);
seq__56910_57035 = G__57062;
chunk__56911_57036 = G__57063;
count__56912_57037 = G__57064;
i__56913_57038 = G__57065;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56934 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56935 = null;
var count__56936 = (0);
var i__56937 = (0);
while(true){
if((i__56937 < count__56936)){
var role = chunk__56935.cljs$core$IIndexed$_nth$arity$2(null,i__56937);
var temp__5735__auto___57070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57070__$1)){
var spec_57071 = temp__5735__auto___57070__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57071)], 0));
} else {
}


var G__57072 = seq__56934;
var G__57073 = chunk__56935;
var G__57074 = count__56936;
var G__57075 = (i__56937 + (1));
seq__56934 = G__57072;
chunk__56935 = G__57073;
count__56936 = G__57074;
i__56937 = G__57075;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56934);
if(temp__5735__auto____$1){
var seq__56934__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56934__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56934__$1);
var G__57076 = cljs.core.chunk_rest(seq__56934__$1);
var G__57077 = c__4556__auto__;
var G__57078 = cljs.core.count(c__4556__auto__);
var G__57079 = (0);
seq__56934 = G__57076;
chunk__56935 = G__57077;
count__56936 = G__57078;
i__56937 = G__57079;
continue;
} else {
var role = cljs.core.first(seq__56934__$1);
var temp__5735__auto___57080__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57080__$2)){
var spec_57081 = temp__5735__auto___57080__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57081)], 0));
} else {
}


var G__57082 = cljs.core.next(seq__56934__$1);
var G__57083 = null;
var G__57084 = (0);
var G__57085 = (0);
seq__56934 = G__57082;
chunk__56935 = G__57083;
count__56936 = G__57084;
i__56937 = G__57085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57087 = cljs.core.ex_cause(t);
via = G__57086;
t = G__57087;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56943 = datafied_throwable;
var map__56943__$1 = (((((!((map__56943 == null))))?(((((map__56943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56943):map__56943);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56943__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56944 = cljs.core.last(via);
var map__56944__$1 = (((((!((map__56944 == null))))?(((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944):map__56944);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56945 = data;
var map__56945__$1 = (((((!((map__56945 == null))))?(((((map__56945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56945):map__56945);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56946 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56946__$1 = (((((!((map__56946 == null))))?(((((map__56946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56946):map__56946);
var top_data = map__56946__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56951 = phase;
var G__56951__$1 = (((G__56951 instanceof cljs.core.Keyword))?G__56951.fqn:null);
switch (G__56951__$1) {
case "read-source":
var map__56952 = data;
var map__56952__$1 = (((((!((map__56952 == null))))?(((((map__56952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56952):map__56952);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56954 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56954__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56954);
var G__56954__$2 = (cljs.core.truth_((function (){var fexpr__56955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56955.cljs$core$IFn$_invoke$arity$1 ? fexpr__56955.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56955.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56954__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56954__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56954__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56956 = top_data;
var G__56956__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56956,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56956);
var G__56956__$2 = (cljs.core.truth_((function (){var fexpr__56957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56957.cljs$core$IFn$_invoke$arity$1 ? fexpr__56957.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56957.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56956__$1);
var G__56956__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56956__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56956__$2);
var G__56956__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56956__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56956__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56956__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56956__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56958 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56958,(3),null);
var G__56961 = top_data;
var G__56961__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56961);
var G__56961__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56961__$1);
var G__56961__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56961__$2);
var G__56961__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56961__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56961__$4;
}

break;
case "execution":
var vec__56962 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56942_SHARP_){
var or__4126__auto__ = (p1__56942_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56966.cljs$core$IFn$_invoke$arity$1 ? fexpr__56966.cljs$core$IFn$_invoke$arity$1(p1__56942_SHARP_) : fexpr__56966.call(null,p1__56942_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56967 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56967__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56967,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56967);
var G__56967__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56967__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56967__$1);
var G__56967__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56967__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56967__$2);
var G__56967__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56967__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56967__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56967__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56967__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56951__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56970){
var map__56971 = p__56970;
var map__56971__$1 = (((((!((map__56971 == null))))?(((((map__56971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56971):map__56971);
var triage_data = map__56971__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56973 = phase;
var G__56973__$1 = (((G__56973 instanceof cljs.core.Keyword))?G__56973.fqn:null);
switch (G__56973__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56974 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56976 = loc;
var G__56977 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56978_57091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56979_57092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56980_57093 = true;
var _STAR_print_fn_STAR__temp_val__56981_57094 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56980_57093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56981_57094);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56968_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56968_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56979_57092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56978_57091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56974,G__56975,G__56976,G__56977) : format.call(null,G__56974,G__56975,G__56976,G__56977));

break;
case "macroexpansion":
var G__56982 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56983 = cause_type;
var G__56984 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56985 = loc;
var G__56986 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56982,G__56983,G__56984,G__56985,G__56986) : format.call(null,G__56982,G__56983,G__56984,G__56985,G__56986));

break;
case "compile-syntax-check":
var G__56987 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56988 = cause_type;
var G__56989 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56990 = loc;
var G__56991 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56987,G__56988,G__56989,G__56990,G__56991) : format.call(null,G__56987,G__56988,G__56989,G__56990,G__56991));

break;
case "compilation":
var G__56992 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56993 = cause_type;
var G__56994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56995 = loc;
var G__56996 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56992,G__56993,G__56994,G__56995,G__56996) : format.call(null,G__56992,G__56993,G__56994,G__56995,G__56996));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56997 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56998 = symbol;
var G__56999 = loc;
var G__57000 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57001_57099 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57002_57100 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57003_57101 = true;
var _STAR_print_fn_STAR__temp_val__57004_57102 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57003_57101);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57004_57102);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56969_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56969_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57002_57100);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57001_57099);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56997,G__56998,G__56999,G__57000) : format.call(null,G__56997,G__56998,G__56999,G__57000));
} else {
var G__57005 = "Execution error%s at %s(%s).\n%s\n";
var G__57006 = cause_type;
var G__57007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57008 = loc;
var G__57009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57005,G__57006,G__57007,G__57008,G__57009) : format.call(null,G__57005,G__57006,G__57007,G__57008,G__57009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56973__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map