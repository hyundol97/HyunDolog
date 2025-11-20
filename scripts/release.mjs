import { execSync } from 'child_process';

const version = process.argv[2];

if (!version) {
  console.log('Usage: node scripts/release.js v1.0.0');
  process.exit(1);
}

try {
  console.log(`🏷️  Creating tag ${version}...`);
  execSync(`git tag ${version}`, { stdio: 'inherit' });
  
  console.log(`📤 Pushing tag to origin...`);
  execSync(`git push origin ${version}`, { stdio: 'inherit' });
  
  console.log(`🌐 Updating Vercel environment...`);
  execSync(`vercel env add NEXT_PUBLIC_VERSION ${version} production`, { stdio: 'inherit' });
  
  console.log(`🚀 Deploying to production...`);
  execSync(`vercel --prod`, { stdio: 'inherit' });
  
  console.log(`✅ Release ${version} completed!`);
} catch (error) {
  console.error(`❌ Release failed:`, error.message);
  process.exit(1);
}