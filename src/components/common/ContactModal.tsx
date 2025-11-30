import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ from: '', subject: '', message: '' });
    const [errors, setErrors] = useState({ from: '', subject: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        }
    }, [isOpen]);

    const validateForm = () => {
        const newErrors = { from: '', subject: '', message: '' };
        
        if (!form.from.trim()) newErrors.from = '이메일을 입력해주세요';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from)) newErrors.from = '올바른 이메일 형식이 아닙니다';
        
        if (!form.subject.trim()) newErrors.subject = '제목을 입력해주세요';
        if (!form.message.trim()) newErrors.message = '내용을 입력해주세요';
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsLoading(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            
            if (response.ok) {
                alert('메일이 성공적으로 전송되었습니다!');
                setForm({ from: '', subject: '', message: '' });
                onClose();
            } else {
                alert('메일 전송에 실패했습니다.');
            }
        } catch (error) {
            alert('메일 전송 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 transition-all duration-300"
            style={{ backgroundColor: show ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)' }}
            onClick={onClose}
        >
            <div
                className={`bg-white dark:bg-stone-800 rounded-lg p-6 max-w-md w-full mx-4 transition-all duration-300 ${
                    show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Contact Me</h2>
                    <button
                        onClick={onClose}
                        className="hover:text-indigo-300 transition-colors"
                    >
                        <Icon icon="ri:close-line" width="24" height="24" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">보내는 사람</label>
                        <input
                            type="email"
                            value={form.from}
                            onChange={(e) => setForm({ ...form, from: e.target.value })}
                            className="w-full p-2 border rounded-md dark:bg-stone-700 dark:border-stone-600"
                            placeholder="your@email.com"
                        />
                        {errors.from && <p className="text-red-500 text-xs mt-1">{errors.from}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">제목</label>
                        <input
                            type="text"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full p-2 border rounded-md dark:bg-stone-700 dark:border-stone-600"
                            placeholder="메일 제목"
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">내용</label>
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full p-2 border rounded-md h-24 resize-none dark:bg-stone-700 dark:border-stone-600"
                            placeholder="메시지를 입력해주세요"
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                    >
                        {isLoading ? '전송 중...' : '메일 보내기'}
                    </button>
                </form>
            </div>
        </div>
    );
}
