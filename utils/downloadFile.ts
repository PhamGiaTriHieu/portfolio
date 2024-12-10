import axios from 'axios';

export const downloadFile = async (
  url: string,
  fileName: string
): Promise<void> => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob',
    });

    const blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    const downloadUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    a.click(); // Bắt đầu tải xuống

    // Giải phóng URL sau khi tải xuống hoàn tất
    URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};
