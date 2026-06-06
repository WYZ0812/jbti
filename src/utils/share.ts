import type { PersonalityType } from "../data/types";

/**
 * 生成分享卡片图片
 * @param element 要截图的 DOM 元素
 * @returns Blob URL
 */
export async function generateShareImage(
  element: HTMLElement
): Promise<Blob | null> {
  try {
    // 动态引入 html2canvas（减少初始加载）
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(element, {
      scale: 2, // 高清输出
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/png");
    });
  } catch (err) {
    console.error("生成分享图片失败:", err);
    return null;
  }
}

/**
 * 保存图片到设备
 */
export function downloadImage(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * 使用 Web Share API 分享（移动端原生分享）
 */
export async function nativeShare(
  type: PersonalityType,
  imageBlob?: Blob | null
): Promise<boolean> {
  if (!navigator.share) return false;

  const shareData: ShareData = {
    title: `我的 JBTI 人格是：${type.emoji} ${type.name}（${type.code}）`,
    text: `${type.tagline}\n来测测你是什么？`,
    url: window.location.href,
  };

  if (imageBlob) {
    shareData.files = [
      new File([imageBlob], `jbti-${type.code}.png`, { type: "image/png" }),
    ];
  }

  try {
    await navigator.share(shareData);
    return true;
  } catch {
    return false; // 用户取消也算失败
  }
}

/**
 * 检测是否在微信内置浏览器中
 */
export function isWechatBrowser(): boolean {
  return /micromessenger/i.test(navigator.userAgent);
}

/**
 * 复制文本到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // 降级方案
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  }
}
