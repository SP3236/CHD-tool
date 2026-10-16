/* Canonical procedure library.
   g  group · n name · ab abbreviation · t what it does · h historical/superseded
   u  the lesions it is used in — names must match LESIONS exactly (build-time checked) */
const PGROUPS = [
  ['shunt',   'Systemic–pulmonary shunts',      'Bring extra blood to the lungs when pulmonary flow is inadequate.', '#c0702b'],
  ['cavo',    'Cavopulmonary connections',      'Stage a single-ventricle circulation by routing systemic venous blood straight to the lungs.', '#2f6fb5'],
  ['cath',    'Catheter interventions',         'Balloon, stent and occlusion procedures done in the catheter laboratory.', '#5b7fb5'],
  ['closure', 'Defect closure',                 'Close an abnormal communication, surgically or by catheter.', '#4a8f6d'],
  ['valve',   'Valve operations',               'Repair or replace a cardiac valve.', '#e0a93a'],
  ['vessel',  'Vessel and venous repairs',      'Reconstruct the arch, pulmonary arteries, veins and coronary arteries.', '#3e8f9c'],
  ['arterial','Arterial and outflow operations','Reconstruct or re-route the great arteries and ventricular outflow tracts.', '#c0392b'],
  ['restrict','Pulmonary flow restriction',     'Protect the lungs when pulmonary flow is excessive.', '#a9761b'],
  ['mixing',  'Atrial-level mixing',            'Create or enlarge an interatrial communication.', '#7a5ea8']
];

const PROCS = [

/* ---------- systemic–pulmonary shunts ---------- */
{g:'shunt', n:'Modified Blalock–Taussig–Thomas shunt', ab:'mBTT · BT shunt',
 t:'A PTFE tube graft from the subclavian or innominate artery to the branch pulmonary artery. The workhorse neonatal shunt; risks are over-shunting, graft thrombosis and diastolic steal.',
 u:['Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect','Pulmonary atresia with intact ventricular septum','Tricuspid atresia','Hypoplastic right heart','Double outlet right ventricle','Double inlet left ventricle','Right atrial isomerism','Ductal-dependent pulmonary circulation','Ebstein anomaly']},

{g:'shunt', n:'Classic Blalock–Taussig shunt', ab:'BT shunt', h:1,
 t:'Direct end-to-side anastomosis of the divided subclavian artery to the pulmonary artery. Superseded by the interposition graft because it sacrificed arm perfusion, but still seen in adults repaired decades ago.',
 u:['Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect','Tricuspid atresia']},

{g:'shunt', n:'Central shunt', ab:'—',
 t:'A short PTFE tube from the ascending aorta to the main pulmonary artery. Chosen when branch arteries are small or the subclavian is unsuitable; encourages symmetrical pulmonary artery growth.',
 u:['Pulmonary atresia with ventricular septal defect','Major aortopulmonary collateral arteries','Hypoplastic right heart','Tricuspid atresia']},

{g:'shunt', n:'Sano shunt (right ventricle to pulmonary artery conduit)', ab:'Sano · RV–PA conduit',
 t:'A valveless conduit from a right ventriculotomy to the pulmonary arteries, used in place of a BT shunt at the Norwood. Gives a more stable diastolic pressure and better coronary perfusion, at the cost of a ventriculotomy.',
 u:['Hypoplastic left heart syndrome','Critical aortic stenosis of the newborn','Aortic valve hypoplasia']},

{g:'shunt', n:'Waterston shunt', ab:'—', h:1,
 t:'Ascending aorta anastomosed directly to the right pulmonary artery. Abandoned because it frequently caused unilateral over-circulation and distortion of the right pulmonary artery.',
 u:['Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect']},

{g:'shunt', n:'Potts shunt', ab:'—', h:1,
 t:'Descending aorta to left pulmonary artery. Abandoned as a palliation for cyanotic disease because it was hard to take down, but revived as a decompressing shunt in suprasystemic pulmonary hypertension.',
 u:['Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect']},

/* ---------- cavopulmonary connections ---------- */
{g:'cavo', n:'Bidirectional Glenn (bidirectional cavopulmonary shunt)', ab:'BDG · BCPS',
 t:'The superior vena cava is divided and anastomosed end-to-side to the right pulmonary artery, so upper-body venous blood flows passively to both lungs. Stage 2 of single-ventricle palliation, usually at 4–6 months once pulmonary resistance has fallen.',
 u:['Hypoplastic left heart syndrome','Tricuspid atresia','Double inlet left ventricle','Pulmonary atresia with intact ventricular septum','Hypoplastic right heart','Complete atrioventricular septal defect','Double outlet right ventricle','Straddling tricuspid valve','Overriding tricuspid valve','Ebstein anomaly','Right atrial isomerism','Uhl anomaly']},

{g:'cavo', n:'Hemi-Fontan', ab:'—',
 t:'An alternative stage 2 in which the superior vena cava is incorporated into the pulmonary arteries with the atrial end temporarily patched. It prepares the anatomy for a lateral tunnel Fontan.',
 u:['Hypoplastic left heart syndrome','Tricuspid atresia','Double inlet left ventricle']},

{g:'cavo', n:'Kawashima procedure', ab:'—',
 t:'A Glenn performed where the inferior vena cava is interrupted with azygos continuation, so almost all systemic venous blood already reaches the superior vena cava. Hepatic venous blood is excluded, so pulmonary arteriovenous malformations develop until hepatic flow is later incorporated.',
 u:['Left atrial isomerism','Interrupted inferior vena cava with azygos continuation']},

{g:'cavo', n:'Fontan (total cavopulmonary connection)', ab:'TCPC · Fontan',
 t:'Inferior vena caval blood is routed to the pulmonary arteries through an extracardiac conduit or an intra-atrial lateral tunnel, completing the separation of the circulations. Usually at 2–4 years. Leaves a passive pulmonary circulation with chronically raised venous pressure.',
 u:['Hypoplastic left heart syndrome','Tricuspid atresia','Double inlet left ventricle','Pulmonary atresia with intact ventricular septum','Hypoplastic right heart','Complete atrioventricular septal defect','Double outlet right ventricle','Straddling tricuspid valve','Overriding tricuspid valve','Right atrial isomerism','Left atrial isomerism','Pulmonary arteriovenous malformation','Uhl anomaly']},

{g:'cavo', n:'Fontan fenestration', ab:'—',
 t:'A deliberate small communication between the Fontan pathway and the atrium. It offloads a high-pressure circuit at the cost of mild desaturation, and can be closed later by catheter.',
 u:['Hypoplastic left heart syndrome','Tricuspid atresia','Double inlet left ventricle']},

/* ---------- pulmonary flow restriction ---------- */
{g:'restrict', n:'Pulmonary artery banding', ab:'PA band',
 t:'A constricting band on the main pulmonary artery limits pulmonary blood flow and protects the lungs from early vascular disease. A holding operation before repair, or a step in retraining a deconditioned left ventricle.',
 u:['Muscular ventricular septal defect','Complete atrioventricular septal defect','Double outlet right ventricle','Double inlet left ventricle','Tricuspid atresia','Congenitally corrected transposition','Right atrial isomerism']},

{g:'restrict', n:'Bilateral pulmonary artery bands (hybrid stage 1)', ab:'Hybrid',
 t:'Bands on both branch arteries combined with a ductal stent, avoiding bypass in the newborn. An alternative first stage for high-risk neonates, deferring arch reconstruction.',
 u:['Hypoplastic left heart syndrome']},

/* ---------- atrial-level mixing ---------- */
{g:'mixing', n:'Balloon atrial septostomy (Rashkind)', ab:'BAS',
 t:'A balloon catheter is pulled across the foramen ovale to tear the septum primum and improve mixing. Often done at the bedside under echo guidance; life-saving in transposition with inadequate mixing.',
 u:['Transposition of the great arteries','Tricuspid atresia','Pulmonary atresia with intact ventricular septum','Hypoplastic left heart syndrome','Total anomalous pulmonary venous return','Hypoplastic right heart']},

{g:'mixing', n:'Blade atrial septostomy (Park)', ab:'—',
 t:'A blade-tipped catheter incises a thick or fibrous atrial septum that will not yield to a balloon, usually beyond the newborn period.',
 u:['Transposition of the great arteries','Hypoplastic left heart syndrome']},

{g:'mixing', n:'Atrial septal stent', ab:'—',
 t:'A stent holds open a restrictive or intact atrial septum. An emergency in hypoplastic left heart syndrome with an intact septum, where the left atrium cannot otherwise decompress.',
 u:['Hypoplastic left heart syndrome','Transposition of the great arteries']},

/* ---------- arterial-level and outflow ---------- */
{g:'arterial', n:'Norwood procedure (stage 1)', ab:'Norwood',
 t:'The pulmonary trunk is used to build a neo-aorta with arch reconstruction, the atrial septum is excised, and pulmonary flow is supplied by a BT or Sano shunt. The right ventricle then supports the systemic circulation.',
 u:['Hypoplastic left heart syndrome','Critical aortic stenosis of the newborn','Aortic valve hypoplasia']},

{g:'arterial', n:'Damus–Kaye–Stansel anastomosis', ab:'DKS',
 t:'The proximal pulmonary trunk is joined to the ascending aorta so the ventricle ejects to the aorta without crossing an obstructed outlet. Used when a restrictive bulboventricular foramen or subaortic narrowing obstructs systemic outflow.',
 u:['Double inlet left ventricle','Tricuspid atresia','Double outlet right ventricle']},

{g:'arterial', n:'Arterial switch operation (Jatene)', ab:'ASO · switch',
 t:'The great arteries are transected above the valves and switched, with the coronary arteries transferred as buttons to the neo-aorta. The anatomical repair for transposition, best performed in the first 1–3 weeks while the left ventricle is still conditioned.',
 u:['Transposition of the great arteries','Double outlet right ventricle','Congenitally corrected transposition']},

{g:'arterial', n:'Lecompte manoeuvre', ab:'—',
 t:'The pulmonary bifurcation is brought anterior to the ascending aorta during the arterial switch. It makes the reconstruction tension-free but stretches the branch arteries across the aorta, a common site of later stenosis.',
 u:['Transposition of the great arteries','Absent pulmonary valve syndrome','Branch stenosis after neonatal repair']},

{g:'arterial', n:'Rastelli operation', ab:'Rastelli',
 t:'An intraventricular baffle carries left ventricular blood through the ventricular septal defect to the aorta, and a valved conduit connects the right ventricle to the pulmonary arteries. For transposition with a ventricular septal defect and pulmonary stenosis.',
 u:['Transposition of the great arteries','Double outlet right ventricle','Congenitally corrected transposition']},

{g:'arterial', n:'REV procedure', ab:'REV',
 t:'A réparation à l\'étage ventriculaire: the outlet septum is resected and the pulmonary artery connected directly to the right ventricle without a conduit, avoiding repeated conduit changes.',
 u:['Transposition of the great arteries','Double outlet right ventricle']},

{g:'arterial', n:'Nikaidoh procedure (aortic translocation)', ab:'Nikaidoh',
 t:'The aortic root is harvested and translocated posteriorly onto the left ventricle with the outflow tract reconstructed. Gives a straighter outflow than the Rastelli for transposition with pulmonary stenosis.',
 u:['Transposition of the great arteries','Double outlet right ventricle']},

{g:'arterial', n:'Atrial switch (Senning or Mustard)', ab:'Senning · Mustard', h:1,
 t:'Intra-atrial baffles redirect venous return at atrial level, leaving the morphological right ventricle to support the systemic circulation. Replaced by the arterial switch, but survivors present as adults with baffle obstruction, systemic ventricular failure and atrial arrhythmia.',
 u:['Transposition of the great arteries','Congenitally corrected transposition']},

{g:'arterial', n:'Double switch', ab:'—',
 t:'An atrial switch combined with an arterial switch (or a Rastelli), restoring the morphological left ventricle to the systemic circulation. Often needs left ventricular retraining with a pulmonary artery band first.',
 u:['Congenitally corrected transposition']},

{g:'arterial', n:'Right ventricle to pulmonary artery conduit', ab:'RV–PA conduit',
 t:'A valved homograft or bioprosthetic conduit establishes right ventricular outflow. It does not grow, so it is replaced several times through childhood and is the usual target for a later transcatheter valve.',
 u:['Truncus arteriosus','Pulmonary atresia with ventricular septal defect','Transposition of the great arteries','Absent pulmonary valve syndrome','Pulmonary regurgitation after repair']},

{g:'arterial', n:'Konno and modified Konno (Konno–Rastan) aortoventriculoplasty', ab:'Konno',
 t:'The ventricular septum is incised to enlarge a small aortic annulus or a tunnel-like outflow tract. Added to valve replacement when the annulus is too small to accept an adequate prosthesis.',
 u:['Subaortic stenosis','Valvar aortic stenosis','Aortic valve hypoplasia','Shone complex']},

{g:'arterial', n:'Unifocalisation of aortopulmonary collaterals', ab:'—',
 t:'Collateral arteries are detached from the aorta and joined into a single pulmonary arterial tree, done in one stage or several. The feasibility of later complete repair depends on how much lung it can recruit.',
 u:['Major aortopulmonary collateral arteries','Pulmonary atresia with ventricular septal defect']},

/* ---------- valve operations ---------- */
{g:'valve', n:'Ross procedure', ab:'Ross',
 t:'The patient\'s own pulmonary valve is moved into the aortic position as an autograft and a homograft replaces the pulmonary valve. The autograft grows with the child and needs no anticoagulation, but converts one-valve disease into two.',
 u:['Valvar aortic stenosis','Bicuspid aortic valve','Unicuspid aortic valve','Critical aortic stenosis of the newborn','Quadricuspid aortic valve']},

{g:'valve', n:'Ross–Konno procedure', ab:'—',
 t:'A Ross combined with septal incision to enlarge a small annulus and outflow tract. The usual biventricular option when the left ventricular outflow is diffusely small.',
 u:['Aortic valve hypoplasia','Critical aortic stenosis of the newborn','Subaortic stenosis','Shone complex']},

{g:'valve', n:'Cone reconstruction (da Silva)', ab:'Cone repair',
 t:'The delaminated leaflets are mobilised and rotated into a cone that is reattached at the true annulus, restoring a valve with leaflet-to-leaflet coaptation. The preferred repair for Ebstein anomaly.',
 u:['Ebstein anomaly']},

{g:'valve', n:'Starnes procedure (right ventricular exclusion)', ab:'Starnes',
 t:'The tricuspid orifice is patched to exclude a failing right ventricle, with a shunt supplying the lungs, committing the child to a single-ventricle pathway. A salvage operation in the critically ill neonate with Ebstein anomaly or severe tricuspid dysplasia.',
 u:['Ebstein anomaly','Tricuspid valve dysplasia']},

{g:'valve', n:'Surgical valvotomy (aortic or pulmonary)', ab:'—',
 t:'Fused commissures are incised under direct vision. Chosen over balloon dilation when the valve is dysplastic, when the balloon has failed, or when another lesion is being repaired at the same time.',
 u:['Valvar aortic stenosis','Critical aortic stenosis of the newborn','Valvar pulmonary stenosis','Dysplastic pulmonary valve','Unicuspid aortic valve']},

{g:'valve', n:'Pulmonary valve replacement', ab:'PVR',
 t:'A bioprosthesis or homograft restores pulmonary valve competence after transannular patch repair. Timing is driven by right ventricular volumes on MRI, symptoms and arrhythmia, since late replacement may not reverse dilatation.',
 u:['Pulmonary regurgitation after repair','Tetralogy of Fallot','Absent pulmonary valve syndrome','Valvar pulmonary stenosis']},

{g:'valve', n:'Aortic valve repair (cusp resuspension)', ab:'—',
 t:'A prolapsing cusp is plicated or resuspended, usually alongside closure of the defect that removed its support. Early intervention preserves a repairable valve.',
 u:['Aortic regurgitation with subarterial ventricular septal defect','Outlet (doubly committed subarterial) ventricular septal defect','Quadricuspid aortic valve','Perimembranous ventricular septal defect','Sinus of Valsalva aneurysm']},

{g:'valve', n:'Aortic valve replacement (mechanical or bioprosthetic)', ab:'AVR',
 t:'A prosthesis replaces an unrepairable valve. Mechanical valves are durable but need lifelong anticoagulation; tissue valves avoid it but degenerate quickly in children.',
 u:['Valvar aortic stenosis','Bicuspid aortic valve','Unicuspid aortic valve','Quadricuspid aortic valve','Aortic valve hypoplasia']},

{g:'valve', n:'Mitral valve repair', ab:'—',
 t:'Annuloplasty, cleft closure, chordal procedures or papillary muscle splitting, chosen over replacement wherever possible because a prosthesis in a small child cannot grow.',
 u:['Congenital mitral regurgitation','Cleft anterior mitral leaflet','Congenital mitral stenosis','Parachute mitral valve','Mitral valve prolapse','Mitral arcade','Double orifice mitral valve','Complete atrioventricular septal defect','Primum atrial septal defect','Shone complex']},

{g:'valve', n:'Mitral valve replacement', ab:'MVR',
 t:'Replacement, sometimes in a supra-annular position when the annulus is too small. In atrioventricular septal defect and the Shone complex it is the strongest predictor of poor outcome.',
 u:['Congenital mitral stenosis','Mitral arcade','Shone complex','Complete atrioventricular septal defect','Parachute mitral valve','Congenital mitral regurgitation']},

{g:'valve', n:'Tricuspid valve replacement', ab:'TVR',
 t:'Used when repair is not feasible, including for the systemic atrioventricular valve in congenitally corrected transposition, where it protects the systemic right ventricle if done before function declines.',
 u:['Ebstein anomaly','Congenitally corrected transposition','Tricuspid valve dysplasia','Congenital tricuspid stenosis']},

{g:'valve', n:'Mitral cleft closure', ab:'—',
 t:'Suture closure of the cleft in the left atrioventricular valve, performed at repair of an atrioventricular septal defect. Residual regurgitation here is the commonest reason for reoperation.',
 u:['Cleft anterior mitral leaflet','Complete atrioventricular septal defect','Primum atrial septal defect']},

{g:'valve', n:'Supravalvar mitral ring resection', ab:'—',
 t:'The obstructing fibrous shelf above the annulus is excised. Results are good when the valve itself is normal, less so as part of the Shone complex.',
 u:['Supravalvar mitral ring','Shone complex','Congenital mitral stenosis']},

{g:'valve', n:'Subaortic membrane resection with septal myectomy', ab:'—',
 t:'The fibromuscular ridge is excised with a wedge of septal muscle to reduce recurrence. Balloon dilation does not work here; indications include a rising gradient or new aortic regurgitation.',
 u:['Subaortic stenosis','Shone complex','Double-chambered right ventricle']},

/* ---------- defect closure ---------- */
{g:'closure', n:'Ventricular septal defect patch closure', ab:'VSD repair',
 t:'A patch is sewn across the defect on bypass, usually through the right atrium and tricuspid valve to avoid a ventriculotomy. The conduction tissue runs along the posteroinferior rim of perimembranous and inlet defects.',
 u:['Perimembranous ventricular septal defect','Muscular ventricular septal defect','Inlet ventricular septal defect','Outlet (doubly committed subarterial) ventricular septal defect','Malalignment ventricular septal defect','Gerbode defect','Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect','Truncus arteriosus','Double outlet right ventricle','Interrupted aortic arch','Aortic regurgitation with subarterial ventricular septal defect','Absent pulmonary valve syndrome','Double-chambered right ventricle']},

{g:'closure', n:'Atrial septal defect patch or direct closure', ab:'ASD repair',
 t:'Direct suture or a pericardial patch on bypass. Required for primum and sinus venosus defects, which have no rim for a device, and for large secundum defects.',
 u:['Secundum atrial septal defect','Primum atrial septal defect','Sinus venosus defect','Unroofed coronary sinus','Common atrium','Complete atrioventricular septal defect','Total anomalous pulmonary venous return']},

{g:'closure', n:'Atrioventricular septal defect repair (two-patch, single-patch or modified single-patch)', ab:'AVSD repair',
 t:'The atrial and ventricular components are closed and the common valve divided into two competent valves with closure of the left-sided cleft. Timed at about 3–6 months, before pulmonary vascular disease sets in.',
 u:['Complete atrioventricular septal defect','Primum atrial septal defect','Inlet ventricular septal defect','Right atrial isomerism']},

{g:'closure', n:'Patent ductus arteriosus ligation', ab:'PDA ligation',
 t:'Surgical ligation or division, classically through a left thoracotomy and increasingly thoracoscopically. Reserved for ducts unsuitable for a device or medical closure.',
 u:['Patent ductus arteriosus','Ductal aneurysm']},

{g:'closure', n:'Aortopulmonary window patch closure', ab:'—',
 t:'The communication is closed with a patch from inside the aorta, preserving both great arteries and the coronary origins. Done early to prevent pulmonary vascular disease.',
 u:['Aortopulmonary window']},

{g:'closure', n:'Sinus of Valsalva aneurysm repair', ab:'—',
 t:'Patch repair of the ruptured or aneurysmal sinus, with aortic valve repair if cusp support has been lost.',
 u:['Sinus of Valsalva aneurysm']},

/* ---------- vessel and venous ---------- */
{g:'vessel', n:'Coarctation repair with extended end-to-end anastomosis', ab:'CoA repair',
 t:'The narrowed segment and all ductal tissue are resected and the anastomosis carried onto the undersurface of the arch. The standard neonatal repair through a left thoracotomy; recoarctation and late hypertension need lifelong follow-up.',
 u:['Coarctation of the aorta','Hypoplastic aortic arch','Shone complex']},

{g:'vessel', n:'Subclavian flap aortoplasty', ab:'—', h:1,
 t:'The divided left subclavian artery is turned down as a living patch across the coarctation. Largely replaced by resection, and it leaves a smaller left arm with an unrecordable blood pressure.',
 u:['Coarctation of the aorta']},

{g:'vessel', n:'Arch reconstruction (patch augmentation or direct anastomosis)', ab:'—',
 t:'Through a sternotomy on bypass, the transverse arch is enlarged with a patch or the segments anastomosed directly. Needed for a hypoplastic or interrupted arch, often with intracardiac repair at the same operation.',
 u:['Hypoplastic aortic arch','Interrupted aortic arch','Coarctation of the aorta','Hypoplastic left heart syndrome','Double inlet left ventricle','Cervical aortic arch']},

{g:'vessel', n:'Patch aortoplasty for supravalvar stenosis (Doty or Brom)', ab:'—',
 t:'The narrowed sinotubular junction is enlarged with a patch across one, two or all three sinuses. Coronary ostial involvement and the anaesthetic risk of Williams syndrome dominate the planning.',
 u:['Supravalvar aortic stenosis']},

{g:'vessel', n:'Warden procedure', ab:'Warden',
 t:'The superior vena cava is divided above the anomalous veins and reconnected to the right atrial appendage, with the veins baffled to the left atrium. Avoids sinus node injury when the veins enter high on the cava.',
 u:['Partial anomalous pulmonary venous return','Sinus venosus defect']},

{g:'vessel', n:'Total anomalous pulmonary venous return repair', ab:'TAPVR repair',
 t:'The pulmonary venous confluence is anastomosed to the back of the left atrium, the vertical vein ligated and the atrial communication closed. Obstructed forms are a true surgical emergency that medical therapy cannot defer.',
 u:['Total anomalous pulmonary venous return','Obstructed total anomalous pulmonary venous return','Right atrial isomerism']},

{g:'vessel', n:'Sutureless pulmonary vein repair', ab:'—',
 t:'The vein is opened and a pericardial well sewn to the surrounding atrium rather than to the vein itself, avoiding suture lines on the vein. Used for recurrent stenosis, where restenosis remains common.',
 u:['Pulmonary vein stenosis','Total anomalous pulmonary venous return','Obstructed total anomalous pulmonary venous return']},

{g:'vessel', n:'Scimitar vein rerouting', ab:'—',
 t:'The anomalous right pulmonary vein is baffled through the atrial septum or reimplanted into the left atrium, with the aortopulmonary collateral to the lower lobe dealt with separately.',
 u:['Scimitar syndrome']},

{g:'vessel', n:'Vascular ring division', ab:'—',
 t:'The non-dominant arch or the ligamentum is divided to release the ring around the trachea and oesophagus. Symptoms of stridor, barking cough or dysphagia drive the decision; asymptomatic rings may be left alone.',
 u:['Double aortic arch and vascular rings','Aberrant right subclavian artery','Cervical aortic arch']},

{g:'vessel', n:'Pulmonary artery sling repair with slide tracheoplasty', ab:'—',
 t:'The left pulmonary artery is divided and reimplanted anterior to the trachea; complete tracheal rings are addressed in the same operation, since the airway rather than the artery usually limits the child.',
 u:['Left pulmonary artery sling']},

{g:'vessel', n:'Coronary artery reimplantation', ab:'—',
 t:'The anomalous coronary is excised as a button from the pulmonary artery and reimplanted into the aorta, restoring a two-coronary circulation. Ventricular function usually recovers substantially even after severe infarction.',
 u:['Anomalous origin of the left coronary artery from the pulmonary artery']},

{g:'vessel', n:'Takeuchi repair', ab:'—', h:1,
 t:'An intrapulmonary baffle carries aortic blood through an aortopulmonary window to the anomalous coronary ostium. Used when direct reimplantation is not feasible; late baffle leak and supravalvar pulmonary stenosis are recognised problems.',
 u:['Anomalous origin of the left coronary artery from the pulmonary artery']},

{g:'vessel', n:'Coronary sinus re-roofing', ab:'—',
 t:'The absent roof between the coronary sinus and left atrium is reconstructed, or the sinus orifice is patched, with a persistent left superior vena cava ligated or rerouted only if drainage allows.',
 u:['Unroofed coronary sinus','Left superior vena cava draining to the left atrium','Anomalous systemic venous drainage to the left atrium']},

{g:'vessel', n:'Pulmonary artery patch arterioplasty', ab:'—',
 t:'Central or branch narrowing is enlarged with a patch, usually at the time of another operation, because peripheral stenoses are hard to reach surgically and belong to the catheter laboratory.',
 u:['Peripheral pulmonary artery stenosis','Branch stenosis after neonatal repair','Supravalvar pulmonary stenosis','Absent pulmonary valve syndrome']},

/* ---------- catheter interventions ---------- */
{g:'cath', n:'Balloon aortic valvuloplasty', ab:'BAV dilation',
 t:'The fused valve is dilated across a wire. First-line in most centres for critical and severe stenosis; the trade-off is producing aortic regurgitation, and restenosis is common.',
 u:['Valvar aortic stenosis','Critical aortic stenosis of the newborn','Bicuspid aortic valve','Unicuspid aortic valve']},

{g:'cath', n:'Balloon pulmonary valvuloplasty', ab:'BPV',
 t:'The definitive treatment for typical valvar pulmonary stenosis, with durable relief. Results are poorer when the valve is dysplastic with a small annulus, as in Noonan syndrome.',
 u:['Valvar pulmonary stenosis','Dysplastic pulmonary valve','Tetralogy of Fallot','Pulmonary atresia with intact ventricular septum']},

{g:'cath', n:'Radiofrequency perforation of the pulmonary valve', ab:'—',
 t:'The atretic valve plate is perforated with radiofrequency energy and dilated, decompressing the right ventricle. Contraindicated when the coronary circulation depends on the right ventricle.',
 u:['Pulmonary atresia with intact ventricular septum']},

{g:'cath', n:'Ductal stent', ab:'—',
 t:'A stent holds the duct open as a catheter alternative to a surgical shunt, for either pulmonary or systemic flow. It avoids a thoracotomy but needs careful positioning and antiplatelet therapy.',
 u:['Ductal-dependent pulmonary circulation','Ductal-dependent systemic circulation','Tetralogy of Fallot','Pulmonary atresia with intact ventricular septum','Pulmonary atresia with ventricular septal defect','Tricuspid atresia','Hypoplastic right heart','Hypoplastic left heart syndrome','Double inlet left ventricle','Right atrial isomerism']},

{g:'cath', n:'Right ventricular outflow tract stent', ab:'RVOT stent',
 t:'A stent across the infundibulum increases pulmonary flow in the symptomatic neonate, encouraging pulmonary artery growth before complete repair. An alternative to a shunt in severe tetralogy.',
 u:['Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect']},

{g:'cath', n:'Transcatheter device closure of an atrial septal defect', ab:'ASD device',
 t:'An occluder is deployed across a secundum defect with adequate rims, usually at 2–5 years. Not possible for primum, sinus venosus or coronary sinus defects.',
 u:['Secundum atrial septal defect','Patent foramen ovale','Atrial septal aneurysm']},

{g:'cath', n:'Transcatheter device closure of a ventricular septal defect', ab:'VSD device',
 t:'Device closure of muscular and selected perimembranous defects, including a perventricular hybrid approach for apical defects. Heart block is the main concern near the conduction tissue.',
 u:['Muscular ventricular septal defect','Perimembranous ventricular septal defect','Gerbode defect']},

{g:'cath', n:'Transcatheter device or coil closure of a patent ductus', ab:'PDA device',
 t:'The standard treatment beyond the newborn period, and increasingly used in preterm infants with dedicated small devices.',
 u:['Patent ductus arteriosus','Aortopulmonary window']},

{g:'cath', n:'Balloon angioplasty or stent for coarctation', ab:'—',
 t:'Preferred for recoarctation after surgery at any age, and used for native coarctation in older children and adolescents who have reached adult vessel size.',
 u:['Coarctation of the aorta','Hypoplastic aortic arch']},

{g:'cath', n:'Branch pulmonary artery balloon, cutting balloon or stent', ab:'—',
 t:'Dilation or stenting of branch, lobar and segmental stenoses, often repeated as the child grows. The mainstay for peripheral disease and for post-surgical narrowing.',
 u:['Peripheral pulmonary artery stenosis','Branch stenosis after neonatal repair','Supravalvar aortic stenosis','Supravalvar pulmonary stenosis','Pulmonary atresia with ventricular septal defect','Unilateral absence of a pulmonary artery']},

{g:'cath', n:'Transcatheter pulmonary valve implantation', ab:'TPVI · Melody · Sapien',
 t:'A valve is implanted inside a dysfunctional conduit or outflow tract, deferring surgical replacement. Requires suitable landing-zone anatomy and coronary clearance.',
 u:['Pulmonary regurgitation after repair','Truncus arteriosus','Tetralogy of Fallot','Pulmonary atresia with ventricular septal defect']},

{g:'cath', n:'Coil or vascular plug embolisation', ab:'—',
 t:'Occlusion of redundant aortopulmonary collaterals, arteriovenous malformations or the systemic artery in Scimitar syndrome, to reduce volume loading or right-to-left shunting.',
 u:['Major aortopulmonary collateral arteries','Pulmonary arteriovenous malformation','Scimitar syndrome','Unilateral absence of a pulmonary artery','Pulmonary atresia with ventricular septal defect']},

{g:'cath', n:'Covered stent in the superior vena cava', ab:'—',
 t:'An emerging transcatheter route for selected superior sinus venosus defects, redirecting the anomalous vein while excluding the defect. Offered only in experienced centres after careful imaging.',
 u:['Sinus venosus defect']},

{g:'valve', n:'Right ventricular outflow tract muscle resection', ab:'—',
 t:'Hypertrophied infundibular muscle or an anomalous muscle bundle is excised, with patch enlargement of the outflow tract if needed. Balloon dilation does not relieve muscular obstruction, so this is a surgical problem.',
 u:['Infundibular pulmonary stenosis','Double-chambered right ventricle','Tetralogy of Fallot']},

{g:'valve', n:'Intracardiac membrane resection', ab:'—',
 t:'Excision of an obstructing intra-atrial membrane — the dividing membrane of cor triatriatum on either side, or a persistent right venous valve. Curative when the valves themselves are normal.',
 u:['Cor triatriatum sinister','Cor triatriatum dexter','Supravalvar mitral ring']},

{g:'vessel', n:'Ventricular diverticulum or aneurysm resection', ab:'—',
 t:'Resection of a congenital outpouching of the ventricular wall for thrombus, arrhythmia, progressive enlargement or risk of rupture. Small asymptomatic diverticula are watched instead.',
 u:['Left ventricular diverticulum or aneurysm','Left atrial appendage anomalies']},

{g:'arterial', n:'Lung or heart–lung transplantation', ab:'—',
 t:'The last option where the pulmonary vascular bed itself has failed. In Eisenmenger syndrome the defect is repaired at the time of lung transplant, or a combined heart–lung block is used.',
 u:['Eisenmenger syndrome','Pulmonary vein stenosis','Pulmonary vein atresia','Unilateral absence of a pulmonary artery']},

/* ---------- transplantation ---------- */
{g:'arterial', n:'Heart transplantation', ab:'—',
 t:'Considered as primary therapy in some centres for hypoplastic left heart syndrome, for a right ventricle dependent coronary circulation, and for end-stage failure after palliation or cardiomyopathy. Donor scarcity and sensitisation after multiple operations are the limiting factors.',
 u:['Hypoplastic left heart syndrome','Pulmonary atresia with intact ventricular septum','Left ventricular non-compaction','Uhl anomaly','Congenitally corrected transposition','Pulmonary vein atresia']}
];
