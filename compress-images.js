const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');
const backupDir = path.join(__dirname, 'src', 'assets', 'images', 'backup');

// 압축할 이미지 파일 목록
const targetImages = [
    'scan1.jpg',
    'scan2.jpg',
    'scan3.jpg',
    'scan4.jpg',
    'scan5.jpg',
    'scan6.jpg',
    'scan7.jpg',
    'hangooksa.jpg',
    'kineungsa.jpg',
    'yutong.jpg'
];

async function compressImages() {
    // 백업 폴더 생성
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
        console.log('✅ 백업 폴더 생성 완료');
    }

    for (const filename of targetImages) {
        const inputPath = path.join(imagesDir, filename);
        const backupPath = path.join(backupDir, filename);
        const outputPath = path.join(imagesDir, filename);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  ${filename} 파일을 찾을 수 없습니다.`);
            continue;
        }

        try {
            // 원본 파일 크기
            const originalSize = fs.statSync(inputPath).size;

            // 백업 (아직 백업 안된 경우만)
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(inputPath, backupPath);
                console.log(`📦 ${filename} 백업 완료`);
            }

            // 이미지 압축
            await sharp(inputPath)
                .jpeg({ quality: 80, progressive: true })
                .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
                .toFile(outputPath + '.tmp');

            // 압축된 파일로 교체
            fs.renameSync(outputPath + '.tmp', outputPath);

            // 압축 후 파일 크기
            const compressedSize = fs.statSync(outputPath).size;
            const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);

            console.log(`✅ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% 감소)`);
        } catch (error) {
            console.error(`❌ ${filename} 압축 실패:`, error.message);
        }
    }

    console.log('\n🎉 이미지 압축 완료!');
    console.log(`📁 원본 파일은 ${backupDir} 에 백업되었습니다.`);
}

compressImages();
