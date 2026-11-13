'use client';

import React from 'react';
import { X, ShieldCheck, CheckCircle2, QrCode, FileText, Download } from 'lucide-react';
import { sampleBatchReports } from '@/data/certifications';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportIndex?: number;
}

export function CertificateModal({ isOpen, onClose, reportIndex = 0 }: CertificateModalProps) {
  if (!isOpen) return null;

  const report = sampleBatchReports[reportIndex] || sampleBatchReports[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-title"
          className="relative bg-[var(--bg-surface)] w-full max-w-xl rounded-2xl shadow-2xl border-2 border-[#B87333]/60 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Header */}
          <div className="text-center pb-5 border-b border-[#B87333]/30">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" /> NABL Accredited Laboratory Report
            </div>
            <h2 id="cert-title" className="font-serif-sacred text-2xl font-bold text-[var(--text-primary)]">
              Certificate of Material Purity
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Government Recognized Gemological & Forest Products Testing Agency
            </p>
          </div>

          {/* Report Metadata */}
          <div className="mt-5 space-y-3.5 text-xs">
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <div>
                <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Report Number</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{report.reportNumber}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Issue Date</span>
                <span className="font-semibold text-[var(--text-primary)]">{report.testedDate}</span>
              </div>
              <div className="col-span-2 pt-1 border-t border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Sample Description</span>
                <span className="font-bold text-[#C96818]">{report.productName}</span>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="rounded-xl border border-[var(--border-subtle)] overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] font-semibold border-b border-[var(--border-subtle)]">
                  <tr>
                    <th className="p-2.5">Testing Parameter</th>
                    <th className="p-2.5">Observed Value</th>
                    <th className="p-2.5 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]">
                  <tr>
                    <td className="p-2.5 text-[var(--text-secondary)] font-medium">Density Measurement</td>
                    <td className="p-2.5 text-[var(--text-primary)] font-mono">{report.density}</td>
                    <td className="p-2.5 text-right text-[#A44C18] font-bold">PASS ✓</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-[var(--text-secondary)] font-medium">Specific Gravity (Sink Test)</td>
                    <td className="p-2.5 text-[var(--text-primary)] font-mono">{report.specificGravity}</td>
                    <td className="p-2.5 text-right text-[#A44C18] font-bold">PASS ✓</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-[var(--text-secondary)] font-medium">Microscopic Seed Integrity</td>
                    <td className="p-2.5 text-[var(--text-primary)]">{report.fissureIntegrity}</td>
                    <td className="p-2.5 text-right text-[#A44C18] font-bold">PASS ✓</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-[var(--text-secondary)] font-medium">Methodology</td>
                    <td className="p-2.5 text-[var(--text-muted)] col-span-2" colSpan={2}>
                      {report.testMethod}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Verification Footer with QR Code */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#422216]/10 to-[#B87333]/10 border border-[#B87333]/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white p-1 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-[#241D19]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#B87333] block">Digital Ledger QR</span>
                  <p className="text-[11px] font-semibold text-[var(--text-primary)]">
                    Tamper-proof verifiable record
                  </p>
                  <span className="text-[10px] text-[var(--text-muted)]">Lab ID: {report.nablLabId}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A44C18] text-white text-[10px] font-bold">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED GENUINE
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl btn-saffron text-xs font-bold uppercase tracking-wider text-center"
            >
              Close Verification
            </button>
            <button
              onClick={() => alert(`Certificate ${report.reportNumber} download simulated.`)}
              className="py-2.5 px-4 rounded-xl border border-[var(--border-subtle)] hover:border-[#B87333] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
