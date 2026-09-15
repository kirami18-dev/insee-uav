import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d from 'draco3dgltf';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'draco3d.decoder': await draco3d.createDecoderModule()});
for (const f of process.argv.slice(2)){
  const doc=await io.read(f); let tris=0,verts=0;
  for(const m of doc.getRoot().listMeshes())for(const p of m.listPrimitives()){
    const idx=p.getIndices(); const pos=p.getAttribute('POSITION');
    tris += idx? idx.getCount()/3 : (pos?pos.getCount()/3:0); verts += pos?pos.getCount():0;
  }
  const draco = doc.getRoot().listExtensionsUsed().some(e=>e.extensionName==='KHR_draco_mesh_compression');
  console.log(f.split('/').pop(), '| tris:', Math.round(tris), '| verts:', verts, '| draco:', draco);
}
